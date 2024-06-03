<?php

namespace App\Http\Controllers\api;

use Amiminn\Support\FileService;
use Amiminn\Support\Response;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function index()
    {
        return Auth::user();
    }

    public function updateProfile(Request $request)
    {
        try {
            $data = [
                "name" => $request->name,
                "email" => $request->email,
            ];
            User::whereId(Auth::user()->id)->update($data);
            return Response::success("Data profile berhasil diperbarui.");
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    public function updatePass(Request $request)
    {
        try {
            $user = DB::table('users')->whereId(Auth::user()->id);
            $pass = $user->first()->password;
            $hash = Hash::check($request->passwordLama, $pass);

            if ($hash) {
                $data = [
                    "password" => Hash::make($request->passwordBaru),
                ];
                $user->update($data);
                return Response::success("Password berhasil diperbarui.");
            } else {
                return Response::failed("Password lama tidak sesuai.");
            }
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    public function updateAvatar(Request $request)
    {
        try {
            $user = User::whereId(Auth::user()->id);
            if ($user->first()->avatar != null) {
                FileService::deleteFileAsset($user->first()->avatar);
            }
            $avatar = FileService::saveOnetoAsset($request, "avatar", "avatar");
            $user->update([
                "avatar" => $avatar
            ]);
            return Response::success("Avatar berhasil diperbarui.");
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    public function deleteAvatar(Request $request)
    {
        try {
            $avatar = User::whereId(Auth::user()->id);
            if ($avatar->first()->avatar != null) {
                FileService::deleteFileAsset($avatar->first()->avatar);
            }
            $avatar->update([
                "avatar" => null
            ]);
            return Response::success("Avatar berhasil dihapus.");
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
}
