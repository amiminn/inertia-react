import { useEffect, useState } from "react";

function Information() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
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
        const res = await axios.post("api/update-profile", formData);
        toast(res.data.msg);
        getData;
    };

    async function getData() {
        let res = await axios.get("api/profile");
        setFormData({
            name: res.data.name,
            email: res.data.email,
        });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="card-label">information</div>

            <form onSubmit={handleSubmit}>
                <div className="grid gap-3 md:lg:grid-cols-2">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="name"
                            className="form-input"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email"
                            className="form-input"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 mt-3 text-white rounded bg-slate-600"
                >
                    update
                </button>
            </form>
        </>
    );
}

export default Information;
