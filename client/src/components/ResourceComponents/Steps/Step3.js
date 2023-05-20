import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Divider from '@mui/material/Divider';
import CreateCards from "../CreateCards";
import CreatePracticeCards from "../CreatePracticeCards";
import "../../../App.css"
import { Select, MenuItem } from "@mui/material";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';

function Step3() {
    return (
        <div className="container-fluid section-background rounded shadow mt-4">
            <div className="pt-4 ps-4 pe-4">
                <div style={{ display: "flex", }}>
                    <NavLink style={{
                        margin: "auto 5px auto 5px"
                    }} to="/resource"><Button><ArrowBackRoundedIcon sx={{ color: "white" }} /></Button></NavLink>
                    <h3 className="white-font">Step 3: Learn Data Structures and Algorithms</h3>
                </div>
                <p className="white-font">
                    *Choose the language you have learnt at step 1. You may refer
                    to another resources for learning. Just make sure to cover the
                    topics given in the practice sheets.
                </p>
                <Divider sx={{ bgcolor: 'white' }}></Divider>
            </div>

            <div className="pt-4 ps-4 pe-4">
                <h4 className="white-font mt-2">Learning Resource:</h4>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <NavLink to="/resource/videos/step3/Arrays" style={{ textDecoration: "none", color: "black" }}>
                            <CreateCards imgSrc="https://img.youtube.com/vi/37E9ckMDdTk/maxresdefault.jpg"
                                heading="Arrays"
                                channel="takeUforward"
                                channelUrl="https://www.youtube.com/@takeUforward"
                            />
                        </NavLink>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <NavLink to="/resource/videos/step3/Recursion" style={{ textDecoration: "none", color: "black" }}>
                            <CreateCards
                                imgSrc="https://img.youtube.com/vi/yVdKa8dnKiE/maxresdefault.jpg"
                                heading="Recursion"
                                channel="takeUforward"
                                channelUrl="https://www.youtube.com/@takeUforward"
                            />
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <NavLink to="/resource/videos/step3/Graph" style={{ textDecoration: "none", color: "black" }}>
                            <CreateCards
                                imgSrc="https://img.youtube.com/vi/M3_pLsDdeuU/maxresdefault.jpg"
                                heading="Graphs"
                                channel="takeUforward"
                                channelUrl="https://www.youtube.com/@takeUforward"
                            />
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <NavLink to="/resource/videos/step3/Trees" style={{ textDecoration: "none", color: "black" }}>
                            <CreateCards
                                imgSrc="https://img.youtube.com/vi/_ANrF3FJm7I/maxresdefault.jpg"
                                heading="Trees"
                                channel="takeUforward"
                                channelUrl="https://www.youtube.com/@takeUforward"
                            />
                        </NavLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <NavLink to="/resource/videos/step3/Dp" style={{ textDecoration: "none", color: "black" }}>
                            <CreateCards
                                imgSrc="https://img.youtube.com/vi/tyB0ztf0DNY/maxresdefault.jpg"
                                heading="Dynamic Programming"
                                channel="takeUforward"
                                channelUrl="https://www.youtube.com/@takeUforward"
                            />
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <NavLink to="/resource/videos/step3/Tries" style={{ textDecoration: "none", color: "black" }}>
                            <CreateCards
                                imgSrc="https://img.youtube.com/vi/dBGUmUQhjaM/maxresdefault.jpg"
                                heading="Tries"
                                channel="takeUforward"
                                channelUrl="https://www.youtube.com/@takeUforward"
                            />
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="pt-1 ps-4 pe-4">
                <h4 className="white-font mt-2">Practice:</h4>
                <p className="white-font">
                    ***Make sure to attend all the contests on Leetcode. To get the contests
                    details and register <NavLink to="/dashboard/leetcode">
                        <button className="btn btn-outline-light">
                            Click Here <ArrowForwardRoundedIcon />
                        </button></NavLink>
                </p>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <NavLink to="/resource/sheets/dsa">
                            <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
                                <img className="card-img-top"
                                    src="https://img.youtube.com/vi/rHn9af16O_E/maxresdefault.jpg"
                                    alt="Sheet Image" />
                                <h6 className="mt-1">Striver's A2Z DSA Course/Sheet</h6>
                            </div >
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <NavLink to="/resource/sheets/sde">
                            <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
                                <img className="card-img-top"
                                    src="https://takeuforward.org/wp-content/uploads/2022/01/Strivers-SDE-Sheet-1-scaled.webp"
                                    alt="Sheet Image" />
                                <h6 className="mt-1">Striver's SDE Sheet</h6>
                            </div >
                        </NavLink>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default Step3;