<?php

namespace App\Http\Controllers\api;

use Amiminn\Support\FileService;
use Amiminn\Support\Response;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        return User::orderByDesc("id")->paginate(10);
    }

    public function store(Request $request)
    {
        try {
            $data = [
                "name" => $request->name,
                "username" => self::toLower($request->name),
                "email" => $request->email,
                "password" => Hash::make($request->name),
                "role_id" => $request->role_id,
                "status" => $request->status,
            ];
            User::create($data);
            return Response::success("user baru berhasil ditambahkan.");
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    public function show($id)
    {
        return User::find($id);
    }

    public function update(Request $request, $id)
    {
        try {
            $user = User::whereId($id);
            $data = [
                "name" => $request->name,
                "username" => self::toLower($request->name),
                "email" => $request->email,
                "password" => Hash::make($request->name),
                "role_id" => $request->role_id,
            ];
            $user->update($data);
            return Response::success("data user berhasil diperbarui.");
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    public function destroy($id)
    {
        User::find($id)->delete();
        return Response::success("data user berhasil dihapus.");
    }

    public function status($id)
    {
        $user = User::find($id);
        $user->update([
            'status' => !$user->status
        ]);

        return Response::success("status user berhasil diperbarui.");
    }

    public function userPaginate()
    {
        return User::paginate(5);
    }

    public static function toLower($originalString)
    {
        $lowercaseString = strtolower($originalString);
        return str_replace(' ', '', $lowercaseString);
    }

    public function updateUserAvatar(Request $request, $id)
    {
        try {
            $user = User::whereId($id);
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

    public function deleteUserAvatar(Request $request, $id)
    {
        try {
            $avatar = User::whereId($id);
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
