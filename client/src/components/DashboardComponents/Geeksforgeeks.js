import React, { useEffect, useState } from "react";
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

function CreateContestCard() {
    return (
        <Card className="shadow mt-2 mb-2">
            <div className="row">
                <div className="col-lg-8 col-md">
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            GeeksforGeeks Contests
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            <div>
                                <h6>
                                    <p>Just click on the Register button to navigate to the contest page.
                                        Contests to participate:</p>
                                    <p>1.GFG Weekly Coding Contest</p>
                                    <p>2.Jobathon</p>
                                    <p>3. Problem of the day</p>
                                </h6>
                            </div>
                        </Typography>
                    </CardContent>

                </div>
                <div className="col-lg-4 col-md">
                    <CardActions>
                        <div className="card-body text-center  mt-2 ms-2">
                            <a href="https://practice.geeksforgeeks.org/events" target="_blank"><div className="btn btn-primary">Register</div></a>
                        </div>
                    </CardActions>
                </div>
            </div >
        </Card >
    );
}
function Geeksforgeeks() {

    return (
        <div className="card border-light shadow p-3 mb-5 bg-white rounded" >
            <ContestCardHeading title="GeeksforGeeks" />
            <Divider sx={{ bgcolor: 'blue' }}></Divider>
            <div className="container mt-2 mb-2 dashboard-container">
                <CreateContestCard />
            </div>
        </div >
    )
}

export default Geeksforgeeks;
