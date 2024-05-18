<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::controller(DashboardController::class)->group(function () {
    Route::get("dashboard", "dashboard");
    Route::get("permission", "permission");
    Route::get("client", "client");
    Route::get("docs", "docs");

    // user manage
    Route::get("users", "users");
    Route::get("tambah-user", "addUser");
});
