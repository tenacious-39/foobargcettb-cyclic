import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../../App.css"
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import { useParams } from 'react-router';
import CPP, { Java, Python, oopsCPP, oopsJava, oopsPython, Arrays, CN, Dp, Graph, OS, Recursion, Trees, Tries, DBMS, SE } from "./VideoId"
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import Divider from '@mui/material/Divider';



function VideoTutorial() {
    const { section, id } = useParams();
    let path = JSON.stringify(section);
    path = path.replace(/['"]+/g, '');
    const backPath = "/resource/" + path;

    // Conditional initialization:
    let initArr = CPP;
    if (id === "Java")
        initArr = Java;
    else if (id === "Python")
        initArr = Python;
    else if (id === "Arrays")
        initArr = Arrays;
    else if (id === "CN")
        initArr = CN;
    else if (id === "Dp")
        initArr = Dp;
    else if (id === "Graph")
        initArr = Graph;
    else if (id === "OS")
        initArr = OS;
    else if (id === "Recursion")
        initArr = Recursion;
    else if (id === "Trees")
        initArr = Trees;
    else if (id === "Tries")
        initArr = Tries;
    else if (id === "DBMS")
        initArr = DBMS;
    else if (id === "SE")
        initArr = SE;
    else if (id === "oopsCPP")
        initArr = oopsCPP;
    else if (id === "oopsJava")
        initArr = oopsJava;
    else if (id === "oopsPython")
        initArr = oopsPython;

    // const [videoArray, setArray] = useState(CPP);
    const [mainId, setMainId] = useState(initArr[0].id);
    const [mainTitle, setMainTitle] = useState(initArr[0].title);

    function handleClick(props) {
        setMainId(props.id);
        setMainTitle(props.title);
    }
    function createVideoList(data) {
        const imgSource = "https://img.youtube.com/vi/" + data.id + "/maxresdefault.jpg";
        return (
            <div className="video mb-1" onClick={() => {
                setMainId(data.id);
                setMainTitle(data.title);
            }}>
                <img className="thumbnail" src={imgSource} alt="No image found" />
                <div className="title">
                    <h3>{data.title}</h3>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div>
                <NavLink style={{ margin: "auto 2px auto 2px", }} to={backPath}>
                    <Button><ArrowBackRoundedIcon />Back</Button>
                </NavLink>
                <Divider sx={{ bgcolor: 'blue' }}></Divider>
            </div>
            <div className="row mt-1">
                <div className="col-lg-8">
                    <div>
                        <iframe
                            width="100%"
                            height="490"
                            src={"https://www.youtube.com/embed/" + mainId}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay;
                        clipboard-write; encrypted-media;
                        gyroscope;
                picture-in-picture" allowFullScreen>
                        </iframe>
                        <h2 class="video-title">{mainTitle}</h2>
                    </div>
                </div>
                <div className="col-lg-4" style={{
                    height: "490px", overflowY: "scroll"
                }}>
                    <div className="container-fluid rounded pt-1" style={{
                        border: "1px solid blueviolet"
                    }}>
                        {initArr.map(createVideoList)}
                        {/* <h2 class="video-title">Introduction to Graph | Types of Graph</h2> */}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default VideoTutorial;