import { useState } from "react";

function Reset() {
    const [formData, setFormData] = useState({
        passwordLama: "",
        passwordBaru: "",
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
            const res = await axios.post("/api/update-password", formData);
            toast(res.data.msg);
        } catch (error) {
            toast(error.response.data.msg, "error");
        }
    };

    return (
        <>
            <div className="card-label">Reset Password</div>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-3 md:lg:grid-cols-2">
                    <div>
                        <label htmlFor="passwordlama">Password Lama</label>
                        <input
                            type="text"
                            name="passwordLama"
                            id="passwordlama"
                            placeholder="password lama"
                            className="form-input"
                            value={formData.passwordLama}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="passwordbaru">Password Baru</label>
                        <input
                            type="text"
                            name="passwordBaru"
                            id="passwordbaru"
                            placeholder="password baru"
                            className="form-input"
                            value={formData.passwordBaru}
                            onChange={handleChange}
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

export default Reset;
