<?php

use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\ClientController;
use App\Http\Controllers\api\RoleController;
use App\Http\Controllers\api\UserController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('user', function (Request $request) {
    return $request->user();
});

Route::middleware([])->group(function () {
    Route::apiResource("client", ClientController::class);
    Route::apiResource("permission", RoleController::class);

    Route::get("user-status/{id}", [UserController::class, 'status']);
    Route::get("user-paginate", [UserController::class, "userPaginate"]);
    // Route::get("users={id}", [UserController::class, 'show']);
    Route::apiResource('users', UserController::class);
    Route::post("update-user-avatar&id={id}", [UserController::class, "updateUserAvatar"]);
    Route::post("delete-user-avatar&id={id}", [UserController::class, "deleteUserAvatar"]);
    Route::apiResource('roles', RoleController::class);
    Route::middleware(["auth:sanctum"])->group(function () {
        Route::get("profile", [AuthController::class, "index"]);
        Route::post("update-profile", [AuthController::class, "updateProfile"]);
        Route::post("update-password", [AuthController::class, "updatePass"]);
        Route::post("update-avatar", [AuthController::class, "updateAvatar"]);
        Route::post("delete-avatar", [AuthController::class, "deleteAvatar"]);
    });
});

Route::get('faker', function () {
    $faker = Faker\Factory::create('id_ID');

    for ($i = 0; $i < 20; $i++) {
        User::create([
            "name" => $faker->name,
            "email" => $faker->email,
            "password" => $faker->name,
            "username" => UserController::toLower($faker->name),
        ]);
    }
    // User::create([
    //     "name" => "amiminn",
    //     "email" => "amiminn@mail.com",
    //     "password" => Hash::make("admin1"),
    //     "username" => "amiminn",
    // ]);

    return ["success" => true];
});
