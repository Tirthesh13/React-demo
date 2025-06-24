import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData();

    // const [data, setData] = React.useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Tirthesh13")
    //     .then((response) => response.json())
    //     .then((data) => setData(data));
    // }, []);

    return (
        <div className="text-center p-4 bg-gray-600 text-white text-3xl">
            Github followers: {data.followers}
            <img src={data.avatar_url} width={300} alt="" />
        </div>
    );
}

export default Github;


export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Tirthesh13");
    return response.json()
}   

