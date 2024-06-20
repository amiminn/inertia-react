import Layout from "@/components/layout";
import { Card, Dropdown } from "@/components/components";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
function Page() {
    const [dataClient, setDataClient] = useState([]);

    async function getData() {
        const res = await axios.get("api/client");
        setDataClient(res.data);
    }

    function hapusClient(e) {
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
                axios.delete("api/client/" + id).then(({ data }) => {
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

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Layout>
                <Card>
                    <div className="flex justify-end mb-2">
                        <Link
                            href="tambah-client"
                            className="flex items-center gap-3 bg-gray-600 text-white py-2 px-6 rounded"
                        >
                            <FaPlus />
                            tambah client
                        </Link>
                    </div>
                    <div className="rounded">
                        <table className="w-full text-left ">
                            <thead className="text-white bg-gray-600">
                                <tr>
                                    <th>no</th>
                                    <th>nama</th>
                                    <th>client</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataClient.map((data, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>1</td>
                                            <td>{data.name}</td>
                                            <td>{data.client_key}</td>
                                            <td>
                                                <Dropdown name={"action"}>
                                                    <Link
                                                        href={
                                                            "/client/" + data.id
                                                        }
                                                        className="block px-2 py-1 rounded cursor-pointer  hover:bg-slate-200"
                                                    >
                                                        lihat
                                                    </Link>
                                                    <li
                                                        data-id={data.id}
                                                        onClick={hapusClient}
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
                </Card>
            </Layout>
        </>
    );
}

export default Page;
