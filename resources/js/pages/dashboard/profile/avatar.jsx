import { useRef, useState } from "react";

function Avatar() {
    const colorAvatar = "7469B6";
    const avatar = `https://ui-avatars.com/api/?background=${colorAvatar}&color=fff&name=${user.name}&bold=true`;
    const [image, setImage] = useState(null);
    const inputRef = useRef(null);
    async function deleteAvatar() {}

    async function updateAvatar() {
        inputRef.current.click();
    }

    function changeAvatar(e) {
        setImage(e.target.files[0]);
        setTimeout(async () => {
            try {
                let formData = new FormData();
                formData.append("avatar", image);
                const res = await axios.post("api/update-avatar", formData);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }, 2000);
    }

    // async;

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
                </div>
            </div>
        </>
    );
}

export default Avatar;
