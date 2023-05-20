import React, { useEffect, useState } from "react";
import axios from "axios";
import Divider from '@mui/material/Divider';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import ContestCardHeading from "./CotestCardHeading";

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function CreateContestCard(dataObj, index) {
    const totalTime = Number(dataObj.duration);
    const hr = Math.floor(totalTime / 3600);
    const min = ((totalTime % 3600) / 60);

    let isTrue = false;
    let statusOfContest = "Running";

    let startTime = dataObj.start_time;
    let endTime = dataObj.end_time;
    let startDay = dayNames[new Date(startTime.substring(0, 10)).getDay()];
    let startMonth = monthNames[new Date(startTime.substring(0, 10)).getMonth()];

    let endDay = dayNames[new Date(endTime.substring(0, 10)).getDay()];
    let endMonth = monthNames[new Date(endTime.substring(0, 10)).getMonth()];

    let localStartTime = new Date(new Date(startTime).getTime());
    let localEndTime = new Date(new Date(endTime).getTime());

    if (dataObj.in_24_hours === "Yes") isTrue = false;
    if (dataObj.status === "BEFORE") statusOfContest = "Upcoming";
    if (statusOfContest === "Running") isTrue = true;


    return (
        <Card className="shadow mt-2 mb-2" style={{ backgroundColor: isTrue ? "#f2de89" : null }} key={index}>
            <div className="row">
                <div className="col-lg-8 col-md">
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {dataObj.name}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            <div><h6>Start Time: {localStartTime.toLocaleTimeString()}, on {startDay}, {startMonth} {startTime.substring(8, 10)}, {startTime.substring(0, 4)}</h6></div>
                            <div><h6>End Time: {localEndTime.toLocaleTimeString()}, on {endDay}, {endMonth} {endTime.substring(8, 10)}, {endTime.substring(0, 4)}</h6></div>
                            <div><h6>Duration: {hr} hours {min} minutes</h6></div>
                            <div style={{ fontColor: isTrue ? "#cf700b" : null }}><h6>Contest in 24 hours: {dataObj.in_24_hours}</h6></div>
                            <div style={{ fontColor: isTrue ? "#cf700b" : null }}><h6>Status: {statusOfContest}</h6></div>
                        </Typography>
                    </CardContent>

                </div>
                <div className="col-lg-4 col-md">
                    <CardActions>
                        <div className="card-body text-center  mt-2 ms-2">
                            <a href={dataObj.url} target="_blank"><div className="btn btn-primary"
                                style={{ backgroundColor: isTrue ? "#cf700b" : null }}>Register</div></a>
                        </div>
                    </CardActions>
                </div>
            </div >
        </Card >
    );
}
function Kickstart() {
    const [data, setData] = useState([]);
    async function fetchData() {
        try {
            const response = await axios.get("https://kontests.net/api/v1/kick_start");
            setData(response.data);
        } catch (error) {
            console.error(error);
            setData(null);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (!data) {
        return (
            <div className="card border-light shadow p-3 mb-5 bg-white rounded" >
                <ContestCardHeading title="Google" />
                <Divider sx={{ bgcolor: 'blue' }}></Divider>
                <div className="container mt-2 mb-2 dashboard-container">
                    <h1 style={{ color: "rgba(0, 0, 0, 0.54)", opacity: "0.5" }}>No Data Found</h1>
                </div>
            </div >
        )
    }

    return (
        <div className="card border-light shadow p-3 mb-5 bg-white rounded" >
            <ContestCardHeading title="Google" />
            <Divider sx={{ bgcolor: 'blue' }}></Divider>
            <div className="container mt-2 mb-2 dashboard-container">
                {data && data.length > 0 && data.map(CreateContestCard)}
            </div>
        </div >
    )
}

export default Kickstart;
