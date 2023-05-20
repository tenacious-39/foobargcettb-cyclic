import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css"
import { NavLink } from "react-router-dom";

import { ReactComponent as RoadmapImg } from "../images/roadmap.svg";
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ResourceHeading from "./ResourceHeading";

function CreateStepsCard(props) {
    return (
        <>
            <div className="card mb-3 resource-card">
                <div style={{
                    position: "absolute", right: "0"
                }}>
                    <ArrowForwardRoundedIcon color="primary" />
                </div>
                <div className="container pb-1" style={{
                    display: "flex"
                }}>
                    <div className="resource-flex-item">
                        <span style={{
                            justifyContent: "center",
                            display: "flex", color: "#808080", fontWeight: "500"
                        }}>Step</span>
                        <div style={{
                            justifyContent: "center",
                            display: "flex"
                        }}>
                            <Avatar style={{
                                height: "3rem", width: "3rem", fontSize: "2.5rem",
                                fontWeight: "400", color: "white", backgroundColor: "#0d6efd",
                                border: "2px solid #C0C0C0"
                            }}>
                                {props.stepno}
                            </Avatar>
                        </div>
                    </div>
                    <div className="resource-flex-item" style={{
                        margin: "auto"
                    }}>
                        <div className="card border-light bg-white rounded" >
                            <h6 className="card-title">{props.step}</h6>
                        </div >
                    </div>
                </div>
                <Divider sx={{ bgcolor: 'blue' }}></Divider>
                <p className="ps-4" style={{
                    color: "#808080"
                }}><i>*{props.info}</i></p>
            </div>
        </>
    )
}

function Roadmap() {
    return (
        <>
            <div className="container-fluid rounded shadow pb-2 pt-2">
                <div className="mb-3">
                    <ResourceHeading />
                    <Divider sx={{ bgcolor: 'blue' }}></Divider>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <RoadmapImg />
                    </div>
                    <div className="col-lg-6" style={{
                        overflowY: "scroll", height: "490px"
                    }}>

                        <NavLink to="/resource/step1" style={{ textDecoration: "none", color: "black" }}>
                            <CreateStepsCard
                                stepno="1"
                                step="Learn any of the languages: C++, Java, or Python"
                                info="Any of these 3 languages is recommended to start programming."
                            />
                        </NavLink>
                        <NavLink to="/resource/step2" style={{ textDecoration: "none", color: "black" }}>
                            <CreateStepsCard
                                stepno="2"
                                step="Object Oriented Programming"
                                info="Try to learn the concepts in the same language you have 
                                learnt at step 1."
                            />
                        </NavLink>
                        <NavLink to="/resource/step3" style={{ textDecoration: "none", color: "black" }}>
                            <CreateStepsCard
                                stepno="3"
                                step="Data Structures and Algorithms"
                                info="This is most important topic that will help you get placed.
                                Try to learn this in the best possible way. 
                                Don't forget to practice DSA problems while learning."
                            />
                        </NavLink>
                        <NavLink to="/resource/step4" style={{ textDecoration: "none", color: "black" }}>
                            <CreateStepsCard
                                stepno="4"
                                step="Competitive Programming (Optional)"
                                info="At this stage, you can start doing Competitive Coding.
                                But if you are not interested, you can skip this step.
                                Do practice DSA even if you are not in cp."
                            />
                        </NavLink>
                        <NavLink to="/resource/step5" style={{ textDecoration: "none", color: "black" }}>
                            <CreateStepsCard
                                stepno="5"
                                step="Learn any Tech stack and build Projects"
                                info="Before building projects, please make sure your DSA
                                concepts are ready for interviews and you have the concepts 
                                of tough topics like Graph, Trees, DP etc. While doing projects
                                you must practice DSA problems."
                            />
                        </NavLink>
                        <div>
                            <NavLink to="/resource/step6" style={{ textDecoration: "none", color: "black" }}>
                                <CreateStepsCard
                                    stepno="6"
                                    step="Build a resume"
                                    info="Having a strong resume is the key to get shortlisted
                                for interviews. In the resume, include your projects as well as 
                                the ratings of plaforms like codeforces, leetcode etc."
                                />
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/resource/step7" style={{ textDecoration: "none", color: "black" }}>
                                <CreateStepsCard
                                    stepno="7"
                                    step="Learn CS Subjects (OS, CN, & DBMS)"
                                    info="Learn these subjects to complete
                                your interview preperation."
                                />
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/resource/step8" style={{ textDecoration: "none", color: "black" }}>
                                <CreateStepsCard
                                    stepno="8"
                                    step="Off-campus placement calendar"
                                    info="Once your 2nd Year ends, you should start applying
                                 for internships upto final year. In the final year, apply for 
                                 off-campus placement exams."
                                />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Roadmap;