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
import { ReactComponent as WebdevImg } from "../../images/webdev.svg";
import { ReactComponent as AppImg } from "../../images/App.svg";
import { ReactComponent as AiImg } from "../../images/AI.svg";
import { ReactComponent as FrameImg } from "../../images/framework.svg";



function CreateYTCards(props) {
    const imgSrc = "https://img.youtube.com/vi/" + props.id + "/maxresdefault.jpg"
    // const imgSrc = props.id;
    return (<>
        <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
            <img className="card-img-top" src={imgSrc} alt={props.channel} />
            <p style={{ color: "rgba(54, 45, 45, 0.925)" }}>by {props.channel}</p>
        </div >
    </>);
}

function Step5() {
    return (
        <div className="container-fluid section-background rounded shadow">
            <div className="pt-4 ps-4 pe-4 pb-2">
                <div style={{ display: "flex", }}>
                    <NavLink style={{
                        margin: "auto 5px auto 5px"
                    }} to="/resource"><Button><ArrowBackRoundedIcon sx={{ color: "white" }} /></Button></NavLink>
                    <h3 className="white-font">Step 5: Projects:</h3>
                </div>
                <Divider sx={{ bgcolor: 'white' }}></Divider>
            </div>

            <div className="pt-4 ps-4 pe-4">
                <h4 className="white-font mt-2">Areas you can explore:</h4>
                <p className="white-font">*These are the most common fields people choose.</p>
                <div className="row mt-3">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
                            <WebdevImg />
                            <h6 className="mt-1">Web Development</h6>
                        </div >
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
                            <AppImg />
                            <h6 className="mt-1">App Development</h6>
                        </div >
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
                            <AiImg />
                            <h6 className="mt-1">AI & Machine Learning</h6>
                        </div >
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
                            <FrameImg />
                            <h6 className="mt-1">Web Frameworks</h6>
                        </div >
                    </div>
                </div>

                <h4 className="white-font mt-2">Some Free Resources:</h4>
                <div className="row mt-3">
                    <div className="col-lg-4 col-md-4">
                        <a href="https://youtube.com/playlist?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD" target="_blank">
                            <CreateYTCards
                                id="Vi9bxu-M-ag"
                                channel="CodeHelp - by Babbar" />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <a href="https://youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU" target="_blank">
                            <CreateYTCards id="jGwO_UgTS7I"
                                channel="Stanford Online" />
                        </a>
                    </div>
                </div>

                <h4 className="white-font mt-2">Other Paid & Free resources</h4>
                <div className="row mt-3">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="https://www.coursera.org/specializations/machine-learning-introduction#courses" target="_blank">
                            <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
                                <img className="card-img-top"
                                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/3a/9d2a7af297483a845340bcfbac6f1e/MLS.course-banners-01_Course-Logo-.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=600&h=216&fit=fill&q=50"
                                    alt="Machine Learning" />
                                <h6 className="mt-1">Machine Learning by Andrew Ng on Coursera</h6>
                            </div >
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
                            <h6>Web Development & Frameworks</h6>
                            <Divider sx={{ bgcolor: 'blue' }}></Divider>
                            <ul>
                                <li> <a href="https://www.udemy.com/course/nodejs-the-complete-guide/" target="_blank">Node.js</a> </li>
                                <li><a href="https://www.udemy.com/course/java-spring-framework-masterclass/" target="_blank">Spring Boot</a></li>
                                <li><a href="https://www.udemy.com/course/the-complete-guide-to-angular-2/" target="_blank">Angular.js</a></li>
                                <li><a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" target="_blank">React.js</a></li>
                                <li><a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" target="_blank">FullStack development</a></li>
                            </ul>
                        </div >
                    </div>
                </div>

                <div className="mt-2 mb-2">
                    <h4 className="white-font mt-2">For Project ideas:</h4>
                    <p className="" style={{ color: "white" }}>
                        **Search on the internet for various project ideas. There
                        are many ideas available for free. But make sure not to copy any
                        project as it is.
                    </p>
                </div>

                <div className="mt-2 mb-2">
                    <h4 className="white-font mt-2">Special Note:</h4>
                    <p className="" style={{ color: "white" }}>
                        **If you are someone who doesn't have much time to explore many things,
                        you can do this: Pick up any course on Udemy on Development, on any
                        genre you feel like, and do that course religiously, every course on
                        Udemy has a project backed up with it. You can finish that project and
                        make some changes, and add some extra features to it, and for the time being,
                        you can use that as your project in your resume.
                    </p>
                </div>


            </div>
        </div >
    );
}

export default Step5;