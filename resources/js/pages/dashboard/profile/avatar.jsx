import { useEffect, useRef, useState } from "react";

function Avatar() {
    const [upload, setUpload] = useState(false);
    const colorAvatar = "7469B6";
    const [avatar, setAvatar] = useState("");
    const [image, setImage] = useState(null);
    const inputRef = useRef(null);

    async function deleteAvatar() {
        Swal.fire({
            title: "Are you sure delete avatar?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axios.post("api/delete-avatar");
                toast(res.data.msg);
                getData();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
            }
        });
    }

    async function updateAvatar() {
        inputRef.current.click();
    }

    function changeAvatar(e) {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onload = function (e) {
                setAvatar(e.target.result);
            };
            reader.readAsDataURL(file);
            setUpload(true);
        }
    }

    async function uploadAvatar() {
        try {
            let formData = new FormData();
            formData.append("avatar", image);
            const res = await axios.post("api/update-avatar", formData);
            toast(res.data.msg);
            getData();
            setUpload(false);
        } catch (error) {
            // console.log(error);
        }
    }

    async function getData() {
        const res = await axios.get(api + "user");
        let avatarUser = res.data.avatar;
        if (avatarUser) {
            setAvatar(base + avatarUser);
        } else {
            setAvatar(
                `https://ui-avatars.com/api/?background=${colorAvatar}&color=fff&name=${user.name}&bold=true`
            );
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="card-label">avatar</div>
            <div className="grid justify-center gap-3 ">
                <div className="flex justify-center">
                    <img
                        src={avatar}
                        alt="avatar"
                        className="w-32 h-32 rounded-full"
                    />
                </div>
                <div className="grid grid-cols-2">
                    <input
                        type="file"
                        onChange={changeAvatar}
                        ref={inputRef}
                        hidden
                    />
                    <div
                        onClick={updateAvatar}
                        className="px-3 py-1 text-center border rounded-l-lg cursor-pointer hover:bg-slate-100"
                    >
                        edit avatar
                    </div>
                    <div
                        onClick={deleteAvatar}
                        className="px-3 py-1 text-center border rounded-r-lg cursor-pointer hover:bg-rose-100 hover:text-rose-600"
                    >
                        hapus avatar
                    </div>
                    {upload && (
                        <button
                            onClick={uploadAvatar}
                            className="col-span-2 py-1 my-2 text-white rounded bg-slate-400"
                        >
                            upload
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}

export default Avatar;
