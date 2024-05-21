import Layout from "@/components/layout";
import { Card } from "@/components/components";
import { useEffect, useState } from "react";

function Show({ id }) {
    const [formData, setFormData] = useState({
        name: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    async function getData() {
        const res = await axios.get(api + "permission/" + id);
        const data = {
            name: res.data.name,
        };
        setFormData(data);
    }

    async function updateData(e) {
        e.preventDefault();
        try {
            const res = await axios.put(api + "permission/" + id, formData);
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