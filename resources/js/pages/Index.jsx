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
    function Helper() {
        return <></>;
    }

    useEffect(() => {
        let data = async () => {
            let res = await axios.get(
                "https://jsonplaceholder.typicode.com/photos"
            );
            console.log(res.data);
        };
        data();
    }, []);
    return (
        <>
            <Layout>
                <div className="flex justify-center">
                    <div className="box p-40 bg-sky-400"></div>
                </div>
                <div>
                    <Button></Button>
                </div>
            </Layout>
        </>
    );
}

export default Index;
