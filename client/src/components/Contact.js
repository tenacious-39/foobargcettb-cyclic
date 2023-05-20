import React from "react";
import ContactBody from "./ContactComponents/ContactBody";
import ContactHeader from "./ContactComponents/ContactHeader";
import Divider from '@mui/material/Divider';
import "bootstrap/dist/css/bootstrap.css";
import "../App.css"


function Contact() {
    return (
        <div className="contact-container">
            <div className="card border-light shadow p-3 mb-5 bg-white rounded" >
                <ContactHeader />
                <Divider sx={{ bgcolor: 'blue' }}></Divider>
                <ContactBody />
            </div >
        </div>
    );
}

export default Contact;