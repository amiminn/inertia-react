import { FaAngleLeft } from "react-icons/fa6";

function Pagination({ onData, dataPaginate }) {
    async function hitPoin(data) {
        const res = await axios.get(data);
        onData(res.data);
    }

    function NextIcon() {
        return <FaAngleLeft className="w-4 h-6 py-[0.3rem] rotate-180" />;
    }

    function PrevIcon() {
        return <FaAngleLeft className="w-4 h-6 py-[0.3rem] " />;
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <div className="text-sm italic text-gray-500">
                    {!dataPaginate
                        ? ""
                        : dataPaginate.to + "/" + dataPaginate.total}
                </div>
                <div className="flex justify-end">
                    {dataPaginate.links?.map((data, id) => {
                        return (
                            <div
                                key={id}
                                hidden={!data.url && data.label != "..."}
                            >
                                {data.active || data.label == "..." ? (
                                    <div
                                        className={
                                            data.label != "..."
                                                ? `px-[1.2rem] py-1 text-white bg-slate-600 border-[1px] border-slate-600`
                                                : `px-4`
                                        }
                                    >
                                        {data.label}
                                    </div>
                                ) : (
                                    <div
                                        className={`px-[1.2rem] py-1 cursor-pointer border-[1px] border-slate-200`}
                                        onClick={() => hitPoin(data.url)}
                                    >
                                        {data.label == "Next &raquo;" ? (
                                            <NextIcon />
                                        ) : data.label == "&laquo; Previous" ? (
                                            <PrevIcon />
                                        ) : (
                                            data.label
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Pagination;
