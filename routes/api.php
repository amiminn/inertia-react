<?php

use App\Http\Controllers\api\ClientController;
use App\Http\Controllers\api\RoleController;
use App\Http\Controllers\api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware([])->group(function () {
    Route::apiResource("client", ClientController::class);
    Route::apiResource("permission", RoleController::class);

    Route::get("user-status/{id}", [UserController::class, 'status']);
    // Route::get("users={id}", [UserController::class, 'show']);
    Route::apiResource('users', UserController::class);
    Route::apiResource('roles', RoleController::class);
});
