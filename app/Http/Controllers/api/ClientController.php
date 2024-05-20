<?php

namespace App\Http\Controllers\api;

use Amiminn\Support\Response;
use App\Http\Controllers\Controller;
use App\Models\ClientModel;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index()
    {
        return ClientModel::get();
    }

    public function store(Request $request)
    {
        try {
            $data = [
                "name" => $request->name,
            ];
            ClientModel::create($data);
            return Response::success("client baru berhasil ditambahkan.");
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    public function show($id)
    {
        return ClientModel::find($id);
    }

    public function update(Request $request, $id)
    {
        try {
            $client = ClientModel::whereId($id);
            $data = [
                "name" => $request->name
            ];
            $client->update($data);
            return Response::success("data client berhasil diperbarui.");
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    public function destroy($id)
    {
        ClientModel::find($id)->delete();
        return Response::success("data client berhasil dihapus.");
    }

    public function status($id)
    {
        $client = ClientModel::whereId($id);
        $client->update([
            'status' => !$client->status
        ]);
        return Response::success("status client berhasil diperbarui.");
    }

    public function generate($id)
    {
        $client = ClientModel::whereId($id);
        $client->update([
            'status' => !$client->client_secret
        ]);
        return Response::success("data client berhasil diperbarui.");
    }
}
