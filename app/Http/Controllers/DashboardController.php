<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function dashboard()
    {
        return Inertia::render("dashboard/page");
    }

    public function client()
    {
        return Inertia::render("dashboard/client/page");
    }

    public function users()
    {
        return Inertia::render("dashboard/users/page");
    }

    public function addUser()
    {
        return Inertia::render("dashboard/users/addUser");
    }

    public function permission()
    {
        return Inertia::render("dashboard/permission/page");
    }

    public function docs()
    {
        return Inertia::render("dashboard/docs/page");
    }
}
