import React from "react";
import { Typography } from '@mui/material';
import { NavLink } from "react-router-dom";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css"

function ContestCardHeading(props) {
    return (
        <div className="rounded">
            <div style={{ display: "flex", margin: "10px 0 10px 0" }}>
                <NavLink style={{ margin: "auto 5px auto 5px" }} to="/auth/google/dashboard"><Button><ArrowBackRoundedIcon /></Button></NavLink>
                <Typography sx={{ fontWeight: '500', color: "rgba(0, 0, 0, 1)" }} style={{ margin: "auto 0px auto 0px" }} variant="h5" gutterBottom>
                    {props.title}
                </Typography>
            </div>
        </div>
    );
}

export default ContestCardHeading;