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

function Step6() {
    return (
        <div className="container-fluid section-background rounded shadow mt-4">
            <div className="pt-4 ps-4 pe-4">
                <div style={{ display: "flex", }}>
                    <NavLink style={{
                        margin: "auto 5px auto 5px"
                    }} to="/resource"><Button><ArrowBackRoundedIcon sx={{ color: "white" }} /></Button></NavLink>
                    <h3 className="white-font">Step 6: Now it's time to build a strong resume</h3>
                </div>
                <p className="white-font">
                    *Just make sure your preperation is complete for internship/placement.
                </p>
                <Divider sx={{ bgcolor: 'white' }}></Divider>
            </div>

            <ul className="white-font">
                <li>
                    Resume must be of a single page.
                </li>
                <li>
                    Don't include certificates of such topics on which you are not confident.
                </li>
                <li>
                    In the achievement section, don't include any swags' information or so, instead,
                    give your coding profile's rating and ranks on coding contests.
                </li>
                <li>
                    Don't include anything that is not associated with SDE jobs.
                </li>
            </ul>

            <div className="row mt-4">
                <div className="col-lg-8 col-md-8">
                    <h4 className="white-font mt-2">Guide to build resume:</h4>
                    <iframe
                        width="100%"
                        height="450"
                        src="https://www.youtube.com/embed/G563FwjzjcQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay;
                        clipboard-write; encrypted-media;
                        gyroscope;
                picture-in-picture" allowFullScreen>
                    </iframe>
                </div>
            </div>
            <div className="pt-4 ps-4 pe-4">
                <ul className="white-font">

                </ul>
                <div className="pt-1 ps-4 pe-4">
                    <h4 className="white-font mt-2">Websites to make resume:</h4>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <a href="https://www.overleaf.com/"
                                target="_blank">
                                <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
                                    <img className="card-img-top"
                                        src="https://images.ctfassets.net/nrgyaltdicpt/2OlBbaO7oEFSmTVpreHlkb/66a1b6eb1a10b372557ddbdd0e7099c7/ologo_square_colour_green_bg.png"
                                        alt="Image" />
                                    <h6 className="mt-1">Overleaf</h6>
                                </div >
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="https://novoresume.com/"
                                target="_blank">
                                <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
                                    <img className="card-img-top"
                                        src="https://d.novoresume.com/images/media_kit/colorful-simple-logo.png"
                                        alt="Image" />
                                    <h6 className="mt-1">Novoresume</h6>
                                </div >
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Step6;