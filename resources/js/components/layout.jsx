import { Link } from "@inertiajs/inertia-react";
import { useEffect, useRef, useState } from "react";
import { devBar, menuBar } from "./menuBar";

export default function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);
    const navRef = useRef(null);
    const [isOpenNav, setIsOpenNav] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleNavBar = () => {
        setIsOpenNav(!isOpenNav);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsOpenNav(false);
        }
    };

    function logout() {
        Swal.fire({
            title: "Are you sure logout?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout!",
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/logout";
                Swal.fire({
                    title: "Sign Out!",
                    text: "Your file has been signout.",
                    icon: "success",
                });
            }
        });
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const url = window.location.pathname;
    const origin = window.location.origin + "/";

    const active =
        "flex items-center p-2 rounded-lg group text-gray-200 bg-[#2E3650]";
    const nonActive =
        "flex items-center p-2 rounded-lg group hover:bg-[#2E3650]";
    const mainColor = "bg-[#262B40]";
    const mainBorder = "border-[#262B40]";

    const setting = {
        sidebarLogo: "https://flowbite.com/docs/images/logo.svg",
        sidebarName: "Microservice",
    };
    const colorAvatar = "7469B6";
    const avatar = `https://ui-avatars.com/api/?background=${colorAvatar}&color=fff&name=${user.name}&bold=true`;

    function Aside() {
        return (
            <aside
                ref={sidebarRef}
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform text-white ${mainColor} border-r border-gray-200 sm:translate-x-0 ${
                    isOpen ? "transform-none" : "-translate-x-full"
                }`}
            >
                <div
                    className={`h-full px-3 pb-4 overflow-y-auto ${mainColor} `}
                >
                    {/* <div className="px-3 py-2 italic font-normal ">
                        Dashboard
                    </div> */}
                    <ul className="space-y-2 font-medium">
                        {menuBar.map((data, id) => {
                            return (
                                <li key={id}>
                                    <Link
                                        href={origin + data.link}
                                        className={
                                            url === "/" + data.link
                                                ? active
                                                : nonActive
                                        }
                                    >
                                        {data.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <hr className="my-5 border-[#2E3650]" />
                    {/* <div className="px-3 py-2 italic font-normal ">
                        Development
                    </div> */}
                    <ul className="space-y-2 font-medium">
                        {devBar.map((data, id) => {
                            return (
                                <li key={id}>
                                    <Link
                                        href={origin + data.link}
                                        className={
                                            url === "/" + data.link
                                                ? active
                                                : nonActive
                                        }
                                    >
                                        {data.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </aside>
        );
    }

    function ButtonSideBar() {
        return (
            <>
                {!isOpen ? (
                    <button
                        onClick={toggleSidebar}
                        className="inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                    >
                        <span className="sr-only">Open sidebar</span>
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button>
                ) : (
                    <button className="inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button>
                )}
            </>
        );
    }

    function Nav() {
        return (
            <nav
                className={`fixed top-0 z-50 w-full ${mainColor} border-b ${mainBorder} `}
            >
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <ButtonSideBar />
                            <div className="flex ms-2 md:me-24">
                                <img
                                    src={setting.sidebarLogo}
                                    className="h-8 me-3"
                                    alt="FlowBite Logo"
                                />
                                <span className="self-center text-xl font-semibold text-white sm:text-2xl whitespace-nowrap ">
                                    {setting.sidebarName}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div>
                                    <button
                                        onClick={toggleNavBar}
                                        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-white "
                                    >
                                        <span className="sr-only">
                                            Open user menu
                                        </span>
                                        {user.avatar ? (
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src={base + user.avatar}
                                                alt="user photo"
                                            />
                                        ) : (
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src={avatar}
                                                alt="user photo"
                                            />
                                        )}
                                    </button>
                                </div>
                                {isOpenNav && (
                                    <div
                                        ref={navRef}
                                        className="absolute top-0 right-0 z-50 block my-16 mr-1 text-base list-none bg-white divide-y divide-gray-100 rounded shadow animate__animated animate__zoomIn s_fast "
                                    >
                                        <div className="px-4 py-3">
                                            <p className="text-sm text-gray-900 ">
                                                {user.name}
                                            </p>
                                            <p className="text-sm font-medium text-gray-900 truncate ">
                                                {user.email}
                                            </p>
                                        </div>
                                        <ul className="py-1">
                                            <li>
                                                <Link
                                                    href="/profile"
                                                    className="block px-4 py-2 text-sm hover:bg-slate-100 "
                                                >
                                                    Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <div
                                                    onClick={logout}
                                                    className="block w-full px-4 py-2 text-sm font-semibold cursor-pointer text-rose-700 hover:bg-rose-100"
                                                >
                                                    Logout
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <>
            <Nav />
            <Aside />
            <div className="p-4 pt-20 sm:ml-64">{children}</div>
        </>
    );
}
