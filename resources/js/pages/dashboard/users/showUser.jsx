import Layout from "@/components/layout";
import { Card } from "@/components/components";
import { useEffect, useState } from "react";

function Show({ id }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    async function getData() {
        const res = await axios.get(api + "users/" + id);
        const data = {
            name: res.data.name,
            email: res.data.email,
            role: res.data.role,
        };
        setFormData(data);
    }

    async function updateData(e) {
        e.preventDefault();
        try {
            const res = await axios.put(subapi, formData);
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
            <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
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
                                    <label htmlFor="email">email</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        id="email"
                                        name="email"
                                        placeholder="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="role">role</label>
                                    <select
                                        className="appearance-none form-input"
                                        id="role"
                                        name="role"
                                        placeholder="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                    >
                                        <option>role</option>
                                    </select>
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
                <Card>
                    avatar
                    <button
                        type="submit"
                        className="w-full py-2 my-4 text-white rounded bg-slate-600"
                    >
                        update avatar
                    </button>
                </Card>
            </div>
        </Layout>
    );
}

export default Show;
