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


function Step1() {
    return (
        <div className="container-fluid section-background rounded shadow">
            <div className="pt-4 ps-4 pe-4">
                <div style={{ display: "flex", }}>
                    <NavLink style={{
                        margin: "auto 5px auto 5px"
                    }} to="/resource"><Button><ArrowBackRoundedIcon sx={{ color: "white" }} /></Button></NavLink>
                    <h3 className="white-font">Step 1: Learn any of the following languages:</h3>
                </div>
                <Divider sx={{ bgcolor: 'white' }}></Divider>
            </div>

            <div className="pt-4 ps-4 pe-4">
                <h4 className="white-font mt-2">Learning Resource:</h4>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <NavLink to="/resource/videos/step1/C++" style={{ textDecoration: "none", color: "black" }}>
                            <CreateCards imgSrc="https://img.youtube.com/vi/EAR7De6Goz4/maxresdefault.jpg"
                                heading="C++"
                                channel="takeUforward"
                                channelUrl="https://www.youtube.com/@takeUforward"
                            />
                        </NavLink>

                    </div>
                    <div className="col-lg-3 col-md-6">
                        <NavLink to="/resource/videos/step1/Java" style={{ textDecoration: "none", color: "black" }}>
                            <CreateCards
                                imgSrc="https://img.youtube.com/vi/eIrMbAQSU34/maxresdefault.jpg"
                                heading="Java"
                                channel="Programming with Mosh"
                                channelUrl="https://www.youtube.com/@programmingwithmosh"
                            />
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <NavLink to="/resource/videos/step1/Python" style={{ textDecoration: "none", color: "black" }}>
                            <CreateCards
                                imgSrc="https://img.youtube.com/vi/_uQrJ0TkZlc/maxresdefault.jpg"
                                heading="Python"
                                channel="Programming with Mosh"
                                channelUrl="https://www.youtube.com/@programmingwithmosh"
                            />
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="pt-1 ps-4 pe-4">
                <h4 className="white-font mt-2">Practice:</h4>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <CreatePracticeCards
                            url="https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png"
                            heading="C++"
                            hrUrl="https://www.hackerrank.com/domains/cpp"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <CreatePracticeCards
                            url="https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png"
                            heading="Java"
                            hrUrl="https://www.hackerrank.com/domains/java"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <CreatePracticeCards
                            url="https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png"
                            heading="Python"
                            hrUrl="https://www.hackerrank.com/domains/python"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Step1;