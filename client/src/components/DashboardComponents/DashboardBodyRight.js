import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useScrollTrigger } from "@mui/material";
import Divider from '@mui/material/Divider';
import ContestCardHeading from "./CotestCardHeading";
import CreateCodeforcesCard from "./CodingPlatformCards/CreateCodeforcesCard";
import CreateCodechefCard from "./CodingPlatformCards/CreateCodechefCard";
import CreateLeetcodeCard from "./CodingPlatformCards/CreateLeetcodeCard";
import CreateGfgCard from "./CodingPlatformCards/CreateGfgCard";

import { ReactComponent as LoginImage } from "../images/login1.svg";
import GoogleButton from "react-google-button";


function CreateCodeforcesDetails(props) {
    if (props.user.hasOwnProperty("cfUsername")) {
        if (props.user.cfUsername === "") {
            return (<h1 style={{ color: "rgba(0, 0, 0, 0.54)", opacity: "0.5" }}>No username exists</h1>);
        }
        else {
            return (<CreateCodeforcesCard username={props.user.cfUsername} />);
        }
    } else {
        return (<h1 style={{ color: "rgba(0, 0, 0, 0.54)", opacity: "0.5" }}>No username exists</h1>);
    }
}

function CreateCodechefDetails(props) {
    if (props.user.hasOwnProperty("cfUsername")) {
        if (props.user.cfUsername === "") {
            return (<h1 style={{ color: "rgba(0, 0, 0, 0.54)", opacity: "0.5" }}>No username exists</h1>);
        }
        else {
            return (<CreateCodechefCard username={props.user.ccUsername} />);
        }
    } else {
        return (<h1 style={{ color: "rgba(0, 0, 0, 0.54)", opacity: "0.5" }}>No username exists</h1>);
    }
}

function CreateLeetcodeDetails(props) {
    if (props.user.hasOwnProperty("cfUsername")) {
        if (props.user.cfUsername === "") {
            return (<h1 style={{ color: "rgba(0, 0, 0, 0.54)", opacity: "0.5" }}>No username exists</h1>);
        }
        else {
            return (<CreateLeetcodeCard username={props.user.lcUsername} />);
        }
    } else {
        return (<h1 style={{ color: "rgba(0, 0, 0, 0.54)", opacity: "0.5" }}>No username exists</h1>);
    }
}

function CreateGfgDetails(props) {
    if (props.user.hasOwnProperty("cfUsername")) {
        if (props.user.cfUsername === "") {
            return (<h1 style={{ color: "rgba(0, 0, 0, 0.54)", opacity: "0.5" }}>No username exists</h1>);
        }
        else {
            return (<CreateGfgCard username={props.user.gfgUsername} />);
        }
    } else {
        return (<h1 style={{ color: "rgba(0, 0, 0, 0.54)", opacity: "0.5" }}>No username exists</h1>);
    }
}

function DashboardBodyRight({ user, setUser }) {
    const [userHandle, setUserHandle] = useState({
        cc: "", cf: "", lc: "", gfg: ""
    });

    function handleInputs(event) {
        const name = event.target.name;
        const value = event.target.value;
        setUserHandle({ ...userHandle, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newUserHandle = { googleId: user.googleId, ...userHandle };
        axios
            .post('/updateHandles', newUserHandle)
            .then(() => { console.log("Resolved"); })
            .catch(err => {
                alert("Data cannot be updated. Please try later.");
                console.error(err);
            });
        handleLogout();
    }
    function handleLogIn() {
        window.open("https://cyan-creepy-cougar.cyclic.app/auth/google", "_self");
    }
    function handleLogout() {
        window.open("https://cyan-creepy-cougar.cyclic.app/logout", "_self");
        setUser(null);
    }
    //console.log(user);
    if (!user) {
        return (
            <>
                <div className="container">
                    <div className="mt-3" style={{
                        position: "absolute", left: "18%"
                    }}>
                        <GoogleButton className="rounded" onClick={handleLogIn} />
                    </div>
                    <LoginImage />
                    <h4 style={{ color: "#808080" }}>Sign in to analyse your performance in different coding platforms.</h4>
                </div>

            </>
        );
    } else {
        return (
            <>
                <div className="row mt-2 mb-2">
                    <div className="col-md">
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Update Profile Handles</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Update Profile Handles"
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    value={[]}
                                    multiple
                                >
                                    <div className="container">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlInput1">Codeforces Handle</label>
                                                <input className="form-control" type="text" autoComplete="off"
                                                    name="cf" value={userHandle.cf} onChange={handleInputs}

                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlInput1">Codechef Handle</label>
                                                <input className="form-control" type="text" autoComplete="off"
                                                    name="cc" value={userHandle.cc} onChange={handleInputs}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlInput1">Leetcode Handle</label>
                                                <input className="form-control" type="text" autoComplete="off"
                                                    name="lc" value={userHandle.lc} onChange={handleInputs}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlInput1">GeeksforGeeks Handle</label>
                                                <input className="form-control" type="text" autoComplete="off"
                                                    name="gfg" value={userHandle.gfg} onChange={handleInputs}
                                                />
                                            </div>

                                            <div className="mt-1 d-flex justify-content-end">
                                                <button type="submit" className="btn btn-success">Update</button>
                                            </div>
                                        </form>
                                    </div>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                    <div className="col-md" style={{ display: "flex", justifyContent: "right" }}>
                        <button type="submit" className="btn btn-link" onClick={handleLogout}>
                            <LogoutRoundedIcon />
                            Log out
                        </button>
                    </div>
                </div>

                <div className="container-fluid mt-2">
                    <h2>{user.fName}</h2>
                    <div className="card border-light shadow p-3 mb-5 bg-white rounded" >
                        <h5 className="card-title">Codeforces</h5>
                        <Divider sx={{ bgcolor: 'blue' }}></Divider>
                        <CreateCodeforcesDetails user={user} />
                    </div >
                    <div className="card border-light shadow p-3 mb-5 bg-white rounded" >
                        <h5 className="card-title">Codechef</h5>
                        <Divider sx={{ bgcolor: 'blue' }}></Divider>
                        <CreateCodechefDetails user={user} />
                    </div >
                    <div className="card border-light shadow p-3 mb-5 bg-white rounded" >
                        <h5 className="card-title">Leetcode</h5>
                        <Divider sx={{ bgcolor: 'blue' }}></Divider>
                        <CreateLeetcodeDetails user={user} />
                    </div >
                    <div className="card border-light shadow p-3 mb-5 bg-white rounded" >
                        <h5 className="card-title">GeeksforGeeks</h5>
                        <Divider sx={{ bgcolor: 'blue' }}></Divider>
                        <CreateGfgDetails user={user} />
                    </div >
                </div>
            </>
        );
    }
}

export default DashboardBodyRight;