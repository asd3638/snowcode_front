import React from "react";
import API from "../API/API"

const CheckPage = () => {
    API.get("/check")
        .then(data => {
            console.log(data);
        })
    return (
        <div>
            와
        </div>
    );
};
export default CheckPage;