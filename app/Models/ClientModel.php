<?php

namespace App\Models;

use Amiminn\Support\Response;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientModel extends Model
{
    use HasFactory;
    protected $table = 'client';
    protected $guarded = [];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->id = Response::epoch();
            $model->client_key = Response::random(12);
            $model->client_secret = Response::random(24);
        });
    }
}
