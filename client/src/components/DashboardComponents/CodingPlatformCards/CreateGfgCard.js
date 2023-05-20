import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

function getNum(prob) {
    if (!prob) return "";
    var newProb = prob.match(/(\d+)/);
    return newProb[0];
}

function CreateGfgCard(props) {
    const [data, setData] = useState({
        easy_problems: "", hard_problems: "", isValid: "", medium_problems: "",
        total_problems: ""
    });

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            const url = "https://gcettbapi.onrender.com/gfg/" + props.username;
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
            <ul className="list-unstyled">
                <li style={{ color: "#808080" }}>*Make sure to attend all the contests.</li>
                <li style={{ color: "#808080" }}>*Problems below easy level are not considered.</li>
            </ul>
            <div className="mt-2 row">
                <div className="col-lg-4">
                    <span style={{ color: "#808080", fontWeight: "500" }}>Solved Problems</span>
                    <Avatar style={{
                        height: "7rem", width: "7rem", fontSize: "2.5rem",
                        fontWeight: "400", color: "black", backgroundColor: "white",
                        border: "2px solid #C0C0C0"
                    }}>
                        {data.total_problems}
                    </Avatar>
                </div>
                <div className="col-lg-8 m-auto">
                    <div className="card border-light bg-white rounded" >
                        <h5 className="card-title">User Handle: {props.username}</h5>
                        <Divider sx={{ bgcolor: 'blue' }}></Divider>
                        <h5 className="card-title">Easy problems: {getNum(data.easy_problems)}</h5>
                        <Divider sx={{ bgcolor: 'blue' }}></Divider>
                        <h5 className="card-title">Medium problems: {getNum(data.medium_problems)}</h5>
                        <Divider sx={{ bgcolor: 'blue' }}></Divider>
                        <h5 className="card-title">Hard problems: {getNum(data.hard_problems)}</h5>
                    </div >
                </div>
            </div>
        </>
    );
}

export default CreateGfgCard;