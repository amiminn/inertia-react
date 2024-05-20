<?php

use App\Http\Controllers\auth\AuthController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get("/", function () {
    return redirect("/dashboard");
});

Route::controller(AuthController::class)->group(function () {
    Route::get("login", "login");
});

Route::controller(DashboardController::class)->group(function () {
    Route::get("dashboard", "dashboard");
    Route::get("docs", "docs");

    // user manage
    Route::get("users", "users");
    Route::get("users/{id}", "showUser");
    Route::get("tambah-user", "addUser");

    // client manage
    Route::get("client", "client");
    Route::get("client/{id}", "showClient");
    Route::get("tambah-client", "addClient");

    // permission manage
    Route::get("permission", "permission");
    Route::get("permission/{id}", "showPermission");
    Route::get("tambah-permission", "addPermission");
});
