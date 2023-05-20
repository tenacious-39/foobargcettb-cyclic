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
import { ReactComponent as OopsImg } from "../../images/oopsInterview.svg";

function Step2() {
    return (
        <div className="container-fluid section-background rounded shadow mt-4">
            <div className="pt-4 ps-4 pe-4">
                <div style={{ display: "flex", }}>
                    <NavLink style={{
                        margin: "auto 5px auto 5px"
                    }} to="/resource"><Button><ArrowBackRoundedIcon sx={{ color: "white" }} /></Button></NavLink>
                    <h3 className="white-font">Step 2: Learn Object Oriented Programming concepts:</h3>
                </div>
                <p className="white-font">*Choose the language you have learnt at step 1</p>
                <Divider sx={{ bgcolor: 'white' }}></Divider>
            </div>

            <div className="pt-4 ps-4 pe-4">
                <h4 className="white-font mt-2">Learning Resource:</h4>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <NavLink to="/resource/videos/step2/oopsCPP" style={{ textDecoration: "none", color: "black" }}>
                            <CreateCards imgSrc="https://img.youtube.com/vi/i_5pvt7ag7E/maxresdefault.jpg"
                                heading="C++ OOPS"
                                channel="CodeHelp - by Babbar "
                                channelUrl="https://www.youtube.com/@CodeHelp"
                            />
                        </NavLink>
                        <p className="white-font">Another reference: <a
                            style={{ color: "white" }}
                            className="resource-card-a"
                            href="https://www.youtube.com/playlist?list=PL43pGnjiVwgTJg7uz8KUGdXRdGKE0W_jN"
                            target="_blank">OOPS in C++ by CodeBeauty</a>
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <NavLink to="/resource/videos/step2/oopsJava" style={{ textDecoration: "none", color: "black" }}>
                            <CreateCards
                                imgSrc="https://img.youtube.com/vi/a199KZGMNxk/maxresdefault.jpg"
                                heading="Java OOPS"
                                channel="Anuj Bhaiya"
                                channelUrl="https://www.youtube.com/@AnujBhaiya"
                            />
                        </NavLink>
                        <p className="white-font">Other sources:
                            <a
                                style={{ color: "white" }}
                                className="resource-card-a"
                                href="https://youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk"
                                target="_blank"> Playlist by Kunal Kushwaha
                            </a> &
                            <a
                                style={{ color: "white" }}
                                className="resource-card-a"
                                href="https://youtu.be/bSrm9RXwBaI"
                                target="_blank"> OOPS by Apna College
                            </a>
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <NavLink to="/resource/videos/step2/oopsPython" style={{ textDecoration: "none", color: "black" }}>
                            <CreateCards
                                imgSrc="https://img.youtube.com/vi/Ej_02ICOIgs/maxresdefault.jpg"
                                heading="Python OOPS"
                                channel="freeCodeCamp.org"
                                channelUrl="https://www.youtube.com/@freecodecamp"
                            />
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="pt-1 ps-4 pe-4">
                <h4 className="white-font mt-2">Interview Questions:</h4>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <a href="https://www.interviewbit.com/oops-interview-questions/" target="_blank" className="resource-card-a">
                            <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card">
                                <OopsImg />
                                <div className="mt-2" style={{ textAlign: "center" }}>
                                    <h4>
                                        Object Oriented Programming Interview Questions
                                    </h4>
                                </div>
                            </div >
                        </a >
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Step2;