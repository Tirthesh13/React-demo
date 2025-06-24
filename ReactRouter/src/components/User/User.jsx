import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid} = useParams();
    return (
        <div className="bg-orange-400 text-black text-2xl text-center py-5">
            <h1>User {userid}</h1>
        </div>
    )
}

export default User