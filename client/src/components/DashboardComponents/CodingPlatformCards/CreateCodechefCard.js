import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';


function CreateCodechefCard(props) {
    const [data, setData] = useState({
        star: "", username: "", isValid: "", problems: "", rating: ""
    });

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            const url = "https://gcettbapi.onrender.com/codechef/" + props.username;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = await response.json();
            console.log(result);
            setData(result);
        } catch (error) {
            console.log(error);
            setData(null);
        }
    }
    if (!data || data.isValid === false) {
        return (
            <h1 style={{ color: "rgba(0, 0, 0, 0.54)", opacity: "0.5" }}>No data found.
                Check username properly.</h1>);
    }
    return (
        <>
            <p style={{ color: "#808080" }}>*Make sure to attend all the contests.</p>
            <div className="row">
                <div className="col-lg-4">
                    <span style={{ color: "#808080", fontWeight: "500" }}>Solved Problems</span>
                    <Avatar style={{
                        height: "7rem", width: "7rem", fontSize: "2.5rem",
                        fontWeight: "400", color: "black", backgroundColor: "white",
                        border: "2px solid #C0C0C0"
                    }}>
                        {data.problems}
                    </Avatar>
                </div>
                <div className="col-lg-8 m-auto">
                    <div className="card border-light bg-white rounded" >
                        <h5 className="card-title">User Handle: {props.username}</h5>
                        <Divider sx={{ bgcolor: 'blue' }}></Divider>
                        <h5 className="card-title">Rating: {data.rating}</h5>
                        <Divider sx={{ bgcolor: 'blue' }}></Divider>
                        <h5 className="card-title">
                            Star: {data.star}
                        </h5>
                    </div >
                </div>
            </div>
        </>
    );
}

export default CreateCodechefCard;