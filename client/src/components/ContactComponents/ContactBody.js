import React from "react";
import { NavLink } from "react-router-dom";
import ContactBodyLeft from "./ContactBodyLeft";
import ContactBodyRight from "./ContactBodyRight";
import Grow from '@mui/material/Grow';
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css"

function ContactBody() {
    return (
        <div className="row rounded">
            <div className="col-md" >
                <ContactBodyLeft />
            </div>
            <div className="col-md">
                <ContactBodyRight />
            </div>
        </div>
    );
}

export default ContactBody;