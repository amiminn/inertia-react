import Layout from "@/components/layout";
import { Card } from "@/components/components";
import { useEffect, useState } from "react";
import { Dropdown } from "@/components/components";
import Pagination from "@/components/pagiantion";

function Page() {
    const [dataUser, setDataUser] = useState({
        data: [],
    });

    async function getData() {
        const res = await axios.get("api/users");
        setDataUser(res.data);
    }
    const handleDataFromPagination = (data) => {
        setDataUser(data);
    };
    useEffect(() => {
        getData();
    }, []);

    function status(d) {
        if (d) {
            return (
                <div>
                    <div className="px-2 text-center rounded w-max bg-emerald-100 text-emerald-600">
                        active
                    </div>
                </div>
            );
        }
        return (
            <div>
                <div className="px-2 text-center rounded w-max bg-rose-100 text-rose-600">
                    non-active
                </div>
            </div>
        );
    }

    function hapusUser(e) {
        const id = e.target["dataset"].id;
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete("api/users/" + id).then(({ data }) => {
                    toast(data.msg);
                    getData();
                });
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
            }
        });
    }

    async function changeStatus(e) {
        const id = e.target["dataset"].id;
        const res = await axios.get("api/user-status/" + id);
        toast(res.data.msg);
        getData();
    }

    return (
        <>
            <Layout>
                <Card>
                    <Link href="tambah-user">tambah user</Link>
                    <div className="rounded">
                        <table className="w-full text-left ">
                            <thead className="text-white bg-gray-600">
                                <tr>
                                    <th>no</th>
                                    <th>nama</th>
                                    <th>email</th>
                                    <th>role</th>
                                    <th>status</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataUser.data.map((data, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{dataUser.from + idx}</td>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.role}</td>
                                            <td>{status(data.status)}</td>
                                            <td>
                                                <Dropdown name={"action"}>
                                                    <Link
                                                        href={
                                                            "/users/" + data.id
                                                        }
                                                        className="px-2 py-1 rounded cursor-pointer w-max hover:bg-slate-200"
                                                    >
                                                        lihat
                                                    </Link>
                                                    <li
                                                        data-id={data.id}
                                                        onClick={changeStatus}
                                                        className="px-2 py-1 rounded cursor-pointer hover:bg-slate-200"
                                                    >
                                                        ubah status
                                                    </li>
                                                    <li
                                                        data-id={data.id}
                                                        onClick={hapusUser}
                                                        className="px-2 py-1 text-white rounded cursor-pointer bg-rose-500"
                                                    >
                                                        hapus
                                                    </li>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="my-4">
                        <Pagination
                            dataPaginate={dataUser}
                            onData={handleDataFromPagination}
                        ></Pagination>
                    </div>
                </Card>
            </Layout>
        </>
    );
}

export default Page;
