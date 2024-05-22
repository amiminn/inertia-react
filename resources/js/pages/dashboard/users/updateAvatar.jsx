import { Card } from "@/components/components";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

function updateAvatar() {
    const fileTypes = ["JPG", "PNG", "GIF"];
    const [file, setFile] = useState(null);
    const [isUpdateAvatar, setIsUpdateAvatar] = useState(false);
    const handleChange = (file) => {
        setFile(file);
    };

    function sub() {
        console.log(file.name);
    }

    return (
        <>
            <Card>
                <div className="grid gap-3">
                    <div className="flex justify-between">
                        <div>avatar</div>
                        {isUpdateAvatar && (
                            <button
                                className="text-right italic text-red-700"
                                onClick={() => setIsUpdateAvatar(false)}
                            >
                                batal
                            </button>
                        )}
                    </div>
                    {isUpdateAvatar ? (
                        <>
                            <FileUploader
                                handleChange={handleChange}
                                name="file"
                                multiple={false}
                                types={fileTypes}
                                classes={""}
                            />
                            <p className="text-sm text-rose-400 text-center italic">
                                {file && `${file.name}`}
                            </p>
                            <button
                                onClick={sub}
                                className="bg-slate-600 text-white rounded py-2 my-4"
                            >
                                update
                            </button>
                        </>
                    ) : (
                        <>
                            is avatar
                            <button
                                onClick={() => setIsUpdateAvatar(true)}
                                className="bg-slate-600 text-white rounded py-2 my-4"
                            >
                                upload disini
                            </button>
                        </>
                    )}
                </div>
            </Card>
        </>
    );
}

export default updateAvatar;
