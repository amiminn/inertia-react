import Layout from "@/components/layout";
import { Card } from "@/components/components";
import { useState } from "react";

function addUser() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        status: 0,
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
            const res = await axios.post("api/users", formData);
            toast(res.data.msg);
            window.history.back();
        } catch (error) {
            toast("Oops, seperrtinya ada kesalahan server.", "error");
        }
    };
    return (
        <Layout>
            <Card>
                <form onSubmit={handleSubmit}>
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
                        <div>
                            <label htmlFor="status">status</label>
                            <select
                                className="appearance-none form-input "
                                id="status"
                                name="status"
                                placeholder="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option className="py-2" value="0">
                                    non-active
                                </option>
                                <option className="py-2" value="1">
                                    active
                                </option>
                            </select>
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

export default addUser;
