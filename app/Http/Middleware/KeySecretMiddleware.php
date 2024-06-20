<?php

namespace App\Http\Middleware;

use Amiminn\Support\Response as SupportResponse;
use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class KeySecretMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        $access_key = $request->header("key-secret");
        if (User::where("access_key", $access_key)->first()) {
            return $next($request);
        } else {
            return SupportResponse::failed("Oops, key-secret tidak valid.");
        }
    }
}
