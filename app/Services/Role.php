<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;

class Role
{
    public static function isAdmin()
    {
        return Auth::user()->role == 1 ? true : false;
    }

    public static function isUser()
    {
        return Auth::user()->role == 0 ? true : false;
    }
}
