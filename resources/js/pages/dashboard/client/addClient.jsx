import Layout from "@/components/layout";
import { Card } from "@/components/components";
import { useState } from "react";
import { Kembali } from "@/components/components";

function addClient() {
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
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("api/client", formData);
            toast(res.data.msg);
            window.history.back();
        } catch (error) {
            toast("Oops, seperrtinya ada kesalahan server.", "error");
        }
    };
    return (
        <Layout>
            <Kembali></Kembali>
            <Card>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 ">
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
                        sumbit
                    </button>
                </form>
            </Card>
        </Layout>
    );
}

export default addClient;
