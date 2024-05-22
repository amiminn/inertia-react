<?php

namespace App\Http\Controllers\auth;

use Amiminn\Support\Response;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login()
    {
        return Inertia::render("auth/login");
    }

    private static function setLogin($id)
    {
        Auth::loginUsingId($id);
        $user = Auth::user();
        $token = $user->createToken('ApiToken')->plainTextToken;
        session(['token' => $token]);
        return compact("user", "token");
    }

    public function toLogin(Request $request)
    {
        try {
            if (Auth::attempt(['username' => $request['username'], 'password' => $request['password']])) {
                $user = Auth::user();
                return self::setLogin($user->id);
            } else {
                return Response::failed("Oops, ada kesalahan username atau password.");
            }
        } catch (\Throwable $th) {
            return Response::failed($th->getMessage());
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect("/");
    }
}
