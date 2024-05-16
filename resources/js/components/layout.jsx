import { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const setting = {
    sidebarLogo: "https://flowbite.com/docs/images/logo.svg",
    sidebarName: "Flowbite",
  };

  const menuBar = [
    {
      name: "Dashboard",
      link: "#",
      icon: "Dashboard",
    },
  ];

  function Aside() {
    return (
      <aside
        ref={sidebarRef}
        className={
          isOpen
            ? "fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform  bg-white border-r border-gray-200 sm:translate-x-0 transform-none"
            : "fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform  bg-white border-r border-gray-200 sm:translate-x-0  -translate-x-full"
        }
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
          <ul className="space-y-2 font-medium">
            {menuBar.map((data, idx) => {
              return (
                <li key={idx}>
                  <a
                    href={data.link}
                    className="flex items-center p-2 text-gray-200 bg-[#0b1120d8] rounded-lg  group"
                  >
                    <span className="ms-3">{data.name}</span>
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ms-3 ">
                  3
                </span>
              </a>
            </li>
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
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
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
          <button className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
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
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
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
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap ">
                  {setting.sidebarName}
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    onClick={toggleNavBar}
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 "
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                {isOpenNav && (
                  <div
                    ref={navRef}
                    className="absolute top-0 right-0 z-50 block my-16 mr-1 text-base list-none bg-white divide-y divide-gray-100 rounded shadow animate__animated animate__zoomIn s_fast "
                  >
                    <div className="px-4 py-3">
                      <p className="text-sm text-gray-900 ">Neil Sims</p>
                      <p className="text-sm font-medium text-gray-900 truncate ">
                        neil.sims@flowbite.com
                      </p>
                    </div>
                    <ul className="py-1">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm font-semibold text-rose-700 hover:bg-rose-100 "
                        >
                          Logout
                        </a>
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
