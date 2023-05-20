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

function CreateYTCards(props) {
    // const imgSrc = "https://img.youtube.com/vi/" + props.id + "/maxresdefault.jpg"
    const imgSrc = props.id;
    return (<>
        <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
            <img className="card-img-top step4-yt-img" src={imgSrc} alt={props.channel} />
            <p style={{ color: "rgba(54, 45, 45, 0.925)" }}>by {props.channel}</p>
        </div >
    </>);
}

function Step4() {
    return (
        <div className="container-fluid section-background rounded shadow">
            <div className="pt-4 ps-4 pe-4">
                <div style={{ display: "flex", }}>
                    <NavLink style={{
                        margin: "auto 5px auto 5px"
                    }} to="/resource"><Button><ArrowBackRoundedIcon sx={{ color: "white" }} /></Button></NavLink>
                    <h3 className="white-font">Step 4: Competitive Programming:</h3>
                </div>
                <Divider sx={{ bgcolor: 'white' }}></Divider>
            </div>

            <div className="pt-4 ps-4 pe-4">
                <h4 className="white-font mt-2">Guidance:</h4>
                <p className="white-font">*Make sure you watch these 2 videos while making notes before starting CP.</p>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <iframe
                            width="100%"
                            height="390"
                            src="https://www.youtube.com/embed/lm5EiwiGtw0"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay;
                        clipboard-write; encrypted-media;
                        gyroscope;
                picture-in-picture" allowFullScreen>
                        </iframe>
                        <p style={{ color: "white" }}>
                            **In the following docs, it is clearly mentioned that which topics you need
                            to learn and also in which order.
                        </p>
                        <a
                            style={{ color: "white" }}
                            href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbTZMQmItbzlibUhZY2hBVjliQm9uX2drRWJUd3xBQ3Jtc0ttTDdoQ1pGOFp2RjdSSEhvS2FwYUdqTldXMDFjN0FSWDdxaGlGdGt4UzhZOGxPMkYtbFNoVnI3UWU4eU5qbzFhQmRUMFlWb2lqUzlGbFVEcmgwa1R3OFY2dS1IQzFjRy1UcENEdXJ0dzkyWXpBNVlfWQ&q=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fd%2F1iXRs_bcjimqm-mFiIXWIolljSAS_1Xg8OZ2TzMBLhcg%2Fedit%3Fusp%3Dsharing&v=lm5EiwiGtw0">
                            Google docs guide Link
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <iframe
                            width="100%"
                            height="390"
                            src="https://www.youtube.com/embed/qOKCWgTChlM"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay;
                        clipboard-write; encrypted-media;
                        gyroscope;
                picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                </div>

                <h4 className="white-font mt-2">Different Resources:</h4>
                <div className="row mt-3">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
                            <h6>Typing Practice Websites:</h6>
                            <Divider sx={{ bgcolor: 'blue' }}></Divider>
                            <ul>
                                <li> <a href="https://monkeytype.com/" target="_blank">Monkey Type</a> </li>
                                <li><a href="https://www.typing.academy/" target="_blank">Typing Academy</a></li>
                                <li><a href="https://10fastfingers.com/" target="_blank">10 Fast Fingers</a></li>
                            </ul>
                        </div >
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
                            <h6>Free resources:</h6>
                            <Divider sx={{ bgcolor: 'blue' }}></Divider>
                            <ul>
                                <li> <a href="https://cp-algorithms.com/" target="_blank">CP Algorithms</a> </li>
                                <li><a href="https://codeforces.com/edu/courses" target="_blank">Codeforces Edu Section</a></li>
                                <li><a href="https://cses.fi/problemset/" target="_blank">CSES Problem Set</a></li>
                            </ul>
                        </div >
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
                            <h6>Coding Platforms:</h6>
                            <Divider sx={{ bgcolor: 'blue' }}></Divider>
                            <ol>
                                <li> <a href="https://codeforces.com/" target="_blank">CodeForecs</a> </li>
                                <li><a href="https://www.codechef.com/" target="_blank">CodeChef</a></li>
                                <li><a href="https://atcoder.jp/" target="_blank">AtCoder</a></li>
                                <li><a href="https://www.topcoder.com/" target="_blank">TopCoder</a></li>
                            </ol>
                        </div >
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
                            <h6>Contest Calendar:</h6>
                            <Divider sx={{ bgcolor: 'blue' }}></Divider>
                            <p>
                                ***To get the contests details of different coding platforms
                                and register <br />
                                <NavLink to="/auth/google/dashboard">
                                    <button className="btn btn-outline-primary">
                                        Click Here <ArrowForwardRoundedIcon />
                                    </button></NavLink>
                            </p>
                        </div >
                    </div>
                </div>

                <h4 className="white-font mt-2">Youtube channels to follow:</h4>
                <div className="row mt-3">
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <a href="https://www.youtube.com/@PriyanshAgarwal" target="_blank">
                            <CreateYTCards
                                id="https://yt3.googleusercontent.com/fSej0H2ok--_bj9NiNPw53QSJwWnsUBVJ0UhvR5h-OGaHICJg6Y7j0wUwWyTFDbHUODUJfci=s176-c-k-c0x00ffffff-no-rj"
                                channel="Priyansh Agarwal" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <a href="https://www.youtube.com/user/MrHulasingh25" target="_blank">
                            <CreateYTCards id="https://yt3.googleusercontent.com/ytc/AGIKgqNklV4bqdYIRA1K0q4XEH8e-H28Mm2qd_ZWxeUKqQ=s176-c-k-c0x00ffffff-no-rj"
                                channel="Kartik Arora" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <a href="https://www.youtube.com/channel/UCBr_Fu6q9iHYQCh13jmpbrg" target="_blank">
                            <CreateYTCards
                                id="https://yt3.googleusercontent.com/ytc/AGIKgqPQwSq13N7mPdoNupMsSA8sWludy67GiLxhoalYEw=s176-c-k-c0x00ffffff-no-rj"
                                channel="Errichto" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <a href="https://www.youtube.com/channel/UCGS5ZzcSAymQbWZvNoKOFhQ" target="_blank">
                            <CreateYTCards
                                id="https://yt3.googleusercontent.com/ytc/AGIKgqMaIEd7bG_wiykXW1fPvK1Ta0DiEZ4YIQyj8MGn=s176-c-k-c0x00ffffff-no-rj"
                                channel="Utkarsh Gupta" />
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <a href="https://www.youtube.com/channel/UCpvS3EykHW--l0ogUhMEjEw" target="_blank">
                            <CreateYTCards
                                id="https://yt3.googleusercontent.com/ytc/AGIKgqMHwRFm7cKI_kZ4gCNOT0toGcmv6OIQikXZpFOEBg=s176-c-k-c0x00ffffff-no-rj"
                                channel="Colin Galen" />
                        </a>
                    </div>

                </div>

                <h4 className="white-font mt-2">Sheets you may follow:</h4>
                <div className="row mt-3">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <NavLink to="/resource/sheets/cp">
                            <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
                                <img className="card-img-top"
                                    src="https://takeuforward.org/wp-content/uploads/2022/01/Strivers-CP-Sheet-scaled.webp"
                                    alt="Sheet Image" />
                                <h6 className="mt-1">Striver's CP Sheet</h6>
                            </div >
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="https://cses.fi/problemset/" target="_blank">
                            <div className="card border-light shadow p-3 mb-5 bg-white rounded resource-card" >
                                <img className="card-img-top"
                                    src="https://cses.fi/logo.png?1"
                                    alt="Sheet Image" />
                                <h6 className="mt-1">CSES Problem Set</h6>
                            </div >
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Step4;