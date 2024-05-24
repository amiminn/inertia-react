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

    public function profile()
    {
        return Inertia::render("dashboard/profile/page");
    }

    public function client()
    {
        return Inertia::render("dashboard/client/page");
    }

    public function addClient()
    {
        return Inertia::render("dashboard/client/addClient");
    }

    public function showClient($id)
    {
        return Inertia::render("dashboard/client/showClient", compact('id'));
    }

    public function users()
    {
        return Inertia::render("dashboard/users/page");
    }

    public function addUser()
    {
        return Inertia::render("dashboard/users/addUser");
    }

    public function showUser($id)
    {
        return Inertia::render("dashboard/users/showUser", compact('id'));
    }

    public function permission()
    {
        return Inertia::render("dashboard/permission/page");
    }

    public function addPermission()
    {
        return Inertia::render("dashboard/permission/addPermission");
    }

    public function showPermission($id)
    {
        return Inertia::render("dashboard/permission/showPermission", compact('id'));
    }
    public function docs()
    {
        return Inertia::render("dashboard/docs/page");
    }
}
