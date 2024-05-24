import Layout from "@/components/layout";
import { Card } from "@/components/components";

function Page() {
    function updateInformation(e) {
        e.preventDefault();
        console.log("updateInformation");
    }
    return (
        <>
            <Layout>
                <div className="grid gap-3 md:lg:grid-cols-3">
                    <div className="md:lg:col-span-2 ">
                        <div className="grid gap-3">
                            <Card>
                                information
                                <form onSubmit={updateInformation}>
                                    <div className="grid gap-3 md:lg:grid-cols-2">
                                        <div>
                                            <label htmlFor="name">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="name"
                                                className="form-input"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
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
                            </Card>
                            <Card>
                                password
                                <form onSubmit={updateInformation}>
                                    <div className="grid gap-3 md:lg:grid-cols-2">
                                        <div>
                                            <label htmlFor="passwordlama">
                                                Password Lama
                                            </label>
                                            <input
                                                type="text"
                                                name="passwordlama"
                                                id="passwordlama"
                                                placeholder="password lama"
                                                className="form-input"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="passwordbaru">
                                                Password Baru
                                            </label>
                                            <input
                                                type="text"
                                                name="passwordbaru"
                                                id="passwordbaru"
                                                placeholder="password baru"
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
                            </Card>
                        </div>
                    </div>
                    <div>
                        <Card>
                            <div className="grid justify-center gap-3 ">
                                <div className="flex justify-center">
                                    <div className="w-32 h-32 bg-blue-200 rounded-full"></div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-3 py-1 text-center border rounded-l-lg cursor-pointer hover:bg-slate-100">
                                        edit avatar
                                    </div>
                                    <div className="px-3 py-1 text-center border rounded-r-lg cursor-pointer hover:bg-rose-100 hover:text-rose-600">
                                        hapus avatar
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Page;
