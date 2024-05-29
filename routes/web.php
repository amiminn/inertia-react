<?php

use App\Http\Controllers\auth\AuthController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get("/", function () {
    return redirect("/dashboard");
});

Route::controller(AuthController::class)->group(function () {
    Route::get("login", "login")->name("login")->middleware("guest");
    Route::post("login", "toLogin");
    Route::get("logout", "logout")->middleware("auth");
});

Route::controller(DashboardController::class)->middleware("auth")->group(function () {
    Route::get("dashboard", "dashboard")->name("home");
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

    // profile
    Route::get("profile", "profile");
});
