import React, { Component, useEffect, useState } from "react";
import Layout from "./Layout";

function Button() {
    const [count, setCount] = useState(0);

    function add() {
        setCount(count + 1);
    }

    return (
        <>
            <button
                className="bg-sky-400 px-12 py-4 rounded-lg text-[#171C33]"
                onClick={add}
            >
                {count}
            </button>
        </>
    );
}

function Index() {
    const [userData, setUserData] = useState({
        name: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userData);
    };

    return (
        <>
            <Layout>
                <div className="flex justify-center">
                    <div>{userData.name}</div>
                </div>
                <div>
                    <form className="grid gap-5" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="name"
                            className="rounded-lg p-2 text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            value={userData.name}
                            name="name"
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            className="py-2 px-6  bg-sky-400 rounded-lg"
                        >
                            submit
                        </button>
                    </form>
                </div>
            </Layout>
        </>
    );
}

export default Index;
