import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Divider from '@mui/material/Divider';
import CreateCards from "../CreateCards";
import CreatePracticeCards from "../CreatePracticeCards";
import "../../../App.css"
import { Select, MenuItem } from "@mui/material";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';

function Step7() {
    return (
        <div className="container-fluid section-background rounded shadow mt-4">
            <div className="pt-4 ps-4 pe-4">
                <div style={{ display: "flex", }}>
                    <NavLink style={{
                        margin: "auto 5px auto 5px"
                    }} to="/resource"><Button><ArrowBackRoundedIcon sx={{ color: "white" }} /></Button></NavLink>
                    <h3 className="white-font">Step 7: Learn OS, DBMS & CN</h3>
                </div>
                <p className="white-font">
                    *Just make sure you have covered all the previous steps.
                </p>
                <Divider sx={{ bgcolor: 'white' }}></Divider>
            </div>

            <div className="pt-4 ps-4 pe-4">
                <h4 className="white-font mt-2">Learning Resource:</h4>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <NavLink to="/resource/videos/step7/OS" style={{ textDecoration: "none", color: "black" }}>
                            <CreateCards imgSrc="https://img.youtube.com/vi/bkSWJJZNgf8/maxresdefault.jpg"
                                heading="OS"
                                channel="Gate Smashers"
                                channelUrl="https://www.youtube.com/@GateSmashers"
                            />
                        </NavLink>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <NavLink to="/resource/videos/step7/DBMS" style={{ textDecoration: "none", color: "black" }}>
                            <CreateCards imgSrc="https://img.youtube.com/vi/kBdlM6hNDAE/maxresdefault.jpg"
                                heading="DBMS"
                                channel="Gate Smashers"
                                channelUrl="https://www.youtube.com/@GateSmashers"
                            />
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <NavLink to="/resource/videos/step7/CN" style={{ textDecoration: "none", color: "black" }}>
                            <CreateCards imgSrc="https://img.youtube.com/vi/JFF2vJaN0Cw/maxresdefault.jpg"
                                heading="CN"
                                channel="Gate Smashers"
                                channelUrl="https://www.youtube.com/@GateSmashers"
                            />
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <NavLink to="/resource/videos/step7/SE" style={{ textDecoration: "none", color: "black" }}>
                            <CreateCards imgSrc="https://img.youtube.com/vi/uJpQlyT_CK4/maxresdefault.jpg"
                                heading="Software Engineering"
                                channel="Gate Smashers"
                                channelUrl="https://www.youtube.com/@GateSmashers"
                            />
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="pt-1 ps-4 pe-4">
                <h4 className="white-font mt-2">Sheet to revise before interview:</h4>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <a href="https://takeuforward.org/interviews/must-do-questions-for-dbms-cn-os-interviews-sde-core-sheet/"
                            target="_blank">
                            <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
                                <img className="card-img-top"
                                    src="https://cdn.pixabay.com/photo/2016/12/24/01/23/database-1928236_1280.png"
                                    alt="Sheet Image" />
                                <h6 className="mt-1">Striver's SDE Core Sheet</h6>
                            </div >
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Step7;