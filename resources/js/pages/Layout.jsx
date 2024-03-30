function Layout({ children }) {
    return (
        <>
            <div className="w-full h-screen text-6xl text-white bg-[#171C33] flex justify-center items-center">
                <div className="grid text-center gap-12">{children}</div>
            </div>
        </>
    );
}

export default Layout;
