import { BiSolidContact } from "react-icons/bi";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { FaBook, FaLock, FaUser } from "react-icons/fa";
import { MdDashboard, MdVpnKey } from "react-icons/md";
import { PiDeviceMobileFill, PiTreeViewFill } from "react-icons/pi";

export const menuBar = [
    {
        name: "Dashboard",
        link: "dashboard",
        icon: MdDashboard,
    },
];

export const service = [];

export const devBar = [
    {
        name: "Users",
        link: "users",
        icon: FaUser,
    },
    {
        name: "Permission",
        link: "permission",
        icon: MdVpnKey,
    },
    {
        name: "Client",
        link: "client",
        icon: FaLock,
    },
    {
        name: "Dokumentasi",
        link: "docs",
        icon: FaBook,
    },
];
