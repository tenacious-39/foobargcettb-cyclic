import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Divider from '@mui/material/Divider';
import CreateCards from "./ResourceComponents/CreateCards";
import CreatePracticeCards from "./ResourceComponents/CreatePracticeCards";
import "../App.css"
import { Select, MenuItem } from "@mui/material";
import Roadmap from "./ResourceComponents/Roadmap";


function Resource() {
    return (
        <div>
            <Roadmap />
        </div>
    );
}

export default Resource;