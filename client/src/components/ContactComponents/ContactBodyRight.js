import React, { useRef } from "react";
import { useState } from "react";
import Grow from '@mui/material/Grow';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ContactBodyRight() {
    const form = useRef();
    const [fName, setFName] = useState("");
    function handleChange(event) {
        const name = event.target.value;
        setFName(name);
    }
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("service_5o6y628",
            "template_qc73lw1", form.current, "UhcalfUBC70ELVc3n")
            .then((result) => {
                toast.success('We received your message.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                // console.log(result.text);
            }, (error) => {
                toast.error('🦄 Wow so easy!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                // console.log(error.text);
            });
    }
    return (
        <>
            <div className="card border-light shadow p-3 contact-form rounded">
                <div>
                    <h3>Hi {fName},</h3>
                    <p>we would <span><FavoriteRoundedIcon color="primary" /></span> to hear from you!</p>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group mt-2 mb-2 ms-2 me-2">
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                            autoComplete="off" name="fName" onChange={handleChange}
                            placeholder="First Name*" required />
                    </div>
                    <div className="form-group  mt-2 mb-2 ms-2 me-2">
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                            autoComplete="off" name="lName" placeholder="Last Name*" required />
                    </div>
                    <div className="form-group  mt-2 mb-2 ms-2 me-2">
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                            autoComplete="off" name="user_email" placeholder="Your Email*" required />
                    </div>
                    <div className="form-group  mt-2 mb-2 ms-2 me-2">
                        <textarea className="form-control" id="exampleFormControlTextarea1"
                            autoComplete="off" name="message" rows="4" placeholder="Message*" required></textarea>
                    </div>
                    <div className="text-center  mt-2 ms-2 me-2">
                        <button type="submit" className="btn btn-primary">Send <SendRoundedIcon /></button>
                    </div>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </form>
            </div>
        </>
    );
}

export default ContactBodyRight;