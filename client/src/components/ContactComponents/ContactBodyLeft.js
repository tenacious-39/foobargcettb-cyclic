import React from "react";
import { ReactComponent as ContactImage } from "../images/contactModified.svg";
import Grow from '@mui/material/Grow';
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css"

import ContactAvatars from "./ContactAvatars.js";

function ContactBodyLeft() {
    return (
        <>
            <div className="card border-light shadow p-3 mb-2 contact-form rounded">
                <ContactImage className="img-fluid" />
            </div>
            <div className="rounded">
                <ContactAvatars />
            </div>
        </>
    );
}

export default ContactBodyLeft;