<?php

namespace App\Http\Controllers\api;

use Amiminn\Support\Response;
use App\Http\Controllers\Controller;
use App\Models\RoleModel;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index()
    {
        return RoleModel::get();
    }

    public function store(Request $request)
    {
        try {
            $data = [
                "name" => $request->name,
            ];
            RoleModel::create($data);
            return Response::success("role baru berhasil ditambahkan.");
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    public function show($id)
    {
        return RoleModel::find($id);
    }

    public function update(Request $request, $id)
    {
        try {
            $role = RoleModel::whereId($id);
            $data = [
                "name" => $request->name
            ];
            $role->update($data);
            return Response::success("data role berhasil diperbarui.");
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    public function destroy($id)
    {
        RoleModel::find($id)->delete();
        return Response::success("data role berhasil dihapus.");
    }
}
