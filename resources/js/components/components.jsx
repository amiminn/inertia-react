import { useEffect, useRef, useState } from "react";

export function Card({ children }) {
    return (
        <>
            <div className="w-full p-4 bg-white border-2 border-dashed rounded">
                {children}
            </div>
        </>
    );
}

export function Dropdown({
    children,
    name = "open",
    className = "bg-white border rounded-md",
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div ref={dropdownRef} className="relative text-sm">
            <button onClick={toggleDropdown} className={className}>
                <span className="block px-4 py-2">{name}</span>
            </button>
            {isOpen && (
                <ul className="absolute top-0 z-50 grid w-32 gap-1 p-2 mt-10 ml-10 origin-top-left bg-white border rounded-md shadow-sm animate__animated animate__zoomIn s_fast">
                    {children}
                </ul>
            )}
        </div>
    );
}

export function Accordion({ children, name = "What is Pines?" }) {
    const [isOpen, setisOpen] = useState();
    function toggleAccordion() {
        setisOpen(!isOpen);
    }
    return (
        <div className="relative w-full max-w-md mx-auto text-sm font-normal">
            <div className="cursor-pointer group">
                <button
                    onClick={toggleAccordion}
                    className="flex items-center justify-between w-full p-4 pb-1 text-left select-none"
                >
                    <div>{name}</div>
                    <svg
                        className={
                            isOpen
                                ? "rotate-45 w-5 h-5 duration-300 ease-out transition "
                                : "w-5 h-5 duration-300 ease-out transition "
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m6-6H6"
                        />
                    </svg>
                </button>
                {isOpen && (
                    <div>
                        <div className="p-4 pt-2 transition opacity-70 ">
                            {children}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export function Modal() {
    const [isOpen, setIsOpen] = useState(false);
    function toggleModal() {
        setIsOpen(!isOpen);
    }
    return (
        <div className="relative z-50 w-auto h-auto">
            <button
                onClick={toggleModal}
                className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors bg-white border rounded-md hover:bg-neutral-100 active:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200/60 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
            >
                Open
            </button>
            {isOpen && (
                <div>
                    <div className="fixed top-0 left-0 z-[99] flex items-center justify-center w-screen h-screen">
                        <div
                            className="absolute inset-0 w-full h-full bg-black bg-opacity-40"
                            onClick={toggleModal}
                        ></div>
                        <div className="relative w-full py-6 bg-white px-7 sm:max-w-lg sm:rounded-lg animate__animated s_fast animate__zoomIn">
                            <div className="flex items-center justify-between pb-2">
                                <h3 className="text-lg font-semibold">
                                    Modal Title
                                </h3>
                                <button
                                    onClick={toggleModal}
                                    className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 mt-5 mr-5 text-gray-600 rounded-full hover:text-gray-800 hover:bg-gray-50"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="relative w-auto">
                                <p>
                                    This is placeholder text. Replace it with
                                    your own content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

import iconBack from "@/icon/arrow-small-left_3916837.svg";
export function Kembali() {
    return (
        <>
            <button
                className="rounded py-1 px-3 mb-2"
                onClick={() => window.history.back()}
            >
                <img src={iconBack} className="w-10 text-white" alt="back" />
            </button>
        </>
    );
}
