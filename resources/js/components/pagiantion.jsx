import next from "@/icon/angle-double-small-right_3916771.svg";

function Pagination({ onData, dataPaginate }) {
    async function hitPoin(data) {
        const res = await axios.get(data);
        onData(res.data);
    }

    function NextIcon() {
        return <img loading="lazy" src={next} alt="next" className="w-6 h-6" />;
    }

    function PrevIcon() {
        return (
            <img
                loading="lazy"
                src={next}
                alt="next"
                className="w-6 h-6 rotate-180"
            />
        );
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <div className="text-sm italic text-gray-500">
                    {dataPaginate && dataPaginate.to + "/" + dataPaginate.total}
                </div>
                <div className="flex justify-end gap-1">
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
                                                ? `px-3 py-1 text-white bg-slate-600 rounded`
                                                : `px-4`
                                        }
                                    >
                                        {data.label}
                                    </div>
                                ) : (
                                    <div
                                        className={`px-3 py-1 cursor-pointer bg-slate-200 rounded`}
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
