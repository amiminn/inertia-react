import Layout from "@/components/layout";
import { Card } from "@/components/components";
import { useEffect, useState } from "react";
import { Kembali } from "@/components/components";

function Show({ id }) {
    const [formData, setFormData] = useState({
        name: "",
        client_secret: "",
        client_key: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    async function getData() {
        const res = await axios.get(api + "client/" + id);
        const data = {
            name: res.data.name,
            client_key: res.data.client_key,
            client_secret: res.data.client_secret,
        };
        setFormData(data);
    }

    async function updateData(e) {
        e.preventDefault();
        try {
            const res = await axios.put(api + "client/" + id, formData);
            toast(res.data.msg);
            window.history.back();
        } catch (error) {
            toast("Oops, seperrtinya ada kesalahan server.", "error");
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <Layout>
            <div className="grid">
                <div className="">
                    <Kembali></Kembali>
                    <Card>
                        <form onSubmit={updateData}>
                            <div className="grid gap-4 md:lg:grid-cols-2">
                                <div>
                                    <label htmlFor="name">name</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        id="name"
                                        name="name"
                                        placeholder="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="client_key">
                                        client_key
                                    </label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        id="client_key"
                                        name="client_key"
                                        placeholder="client_key"
                                        value={formData.client_key}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="client_secret">
                                        client_secret
                                    </label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        id="client_secret"
                                        name="client_secret"
                                        placeholder="client_secret"
                                        value={formData.client_secret}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 my-4 text-white rounded bg-slate-600"
                            >
                                update
                            </button>
                        </form>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}

export default Show;
