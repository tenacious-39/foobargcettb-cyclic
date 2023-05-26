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

function Step8() {
    return (
        <div className="container-fluid section-background rounded shadow mt-4">
            <div className="pt-4 ps-4 pe-4">
                <div style={{ display: "flex", }}>
                    <NavLink style={{
                        margin: "auto 5px auto 5px"
                    }} to="/resource"><Button><ArrowBackRoundedIcon sx={{ color: "white" }} /></Button></NavLink>
                    <h3 className="white-font">Step 8: Now it's time to apply for jobs</h3>
                </div>
                <p className="white-font">
                    *Just make sure your preperation is complete for internship/placement.
                </p>
                <Divider sx={{ bgcolor: 'white' }}></Divider>
            </div>

            <div className="pt-4 ps-4 pe-4">
                <ul className="white-font">
                    <li>
                        Follow this telegram group regularly for job/internship updates:
                        <a href="https://t.me/goyalarsh" target="_blank"
                            style={{
                                textDecorationColor: "white", color: "white"
                            }}> Arsh Goyal: Youtube</a>
                    </li>
                    <li>
                        Follow this youtube channel regularly for job/internship updates:
                        <a href="https://www.youtube.com/@ArshGoyal" target="_blank"
                            style={{
                                textDecorationColor: "white", color: "white"
                            }}> Arsh Goyal</a>
                    </li>
                    <li>
                        Also, follow jobs section of LinkedIn, indeed etc.
                    </li>
                    <li>
                        To know which company hires when, refer to the placement claendar below.
                    </li>
                    <li>
                        With the following aptitude question prtal, you can practice aptitude questions
                        for placement related exams.
                    </li>
                    <li>
                        Keep an eye on the career's page of MAANG companies and LinkedIn hiring posts.
                    </li>
                </ul>
                <div className="pt-1 ps-4 pe-4">
                    <h4 className="white-font mt-2">Placement Calendar and Aptitude question portal:</h4>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <a href="https://mcq-exam-portal.netlify.app/"
                                target="_blank">
                                <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
                                    <img className="card-img-top"
                                        src="https://www.tsassessors.com/assets/images/apt_test.jpg"
                                        alt="Sheet Image" />
                                    <h6 className="mt-1">Aptitude Question Portal</h6>
                                </div >
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="https://takeuforward.org/interviews/sde-off-campus-placement-calendar-freshers/"
                                target="_blank">
                                <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
                                    <img className="card-img-top"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkejW-HW7xn6E3csUJ-dxFpGw3riWXLw8vQA&usqp=CAU"
                                        alt="Sheet Image" />
                                    <h6 className="mt-1">SDE off-campus placement calendar</h6>
                                </div >
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Step8;