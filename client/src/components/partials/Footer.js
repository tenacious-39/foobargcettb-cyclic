import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import white_college_logo from "../images/white college logo.png"
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

function Footer() {
    return (<>
        <section className="footer-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md" >
                        <div className="mt-auto mb-auto" style={{ justifyContent: "center", display: "flex" }}>
                            <img src={white_college_logo} alt="College Logo" style={{ height: "14rem" }} />
                        </div>
                        <div className="row" style={{ paddingTop: "2rem" }}>
                            <div className="copyright" align="center">
                                <Button href="https://www.linkedin.com/company/gcettb-training-and-placement-cell/"><LinkedInIcon /></Button>
                                <Button href="https://www.facebook.com/gcettb111/"><FacebookIcon /></Button>
                                <Button href="http://www.gcettb.ac.in/"><LanguageIcon /></Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <h3>Reach us</h3>
                        <ul className="reach-us-footer" style={{ listStyle: "none" }}>
                            <li>Govt. College of Engineering & Textile Technology, Berhampore</li>
                            <li>No 4, Cantonment Road, P.O.- Berhampore,</li>
                            <li>Dist -Murshidabad, West Bengal-742101, India</li>
                            <li><p>Telephone: 03482-252809, Fax: 03482-252809</p></li>
                            <li><p>Email: <a href="mailto: principal@gcettb.ac.in">principal@gcettb.ac.in</a></p></li>
                            <li><p><a href="http://gcettb.ac.in/" target="_blank"><img src={white_college_logo} alt="college logo" style={{ height: "25px", borderRadius: "20px" }} /> GCETTB website</a></p></li>
                        </ul>
                    </div>
                </div>
                <div className="row" style={{ paddingTop: "2rem" }}>
                    <div className="copyright" align="center">
                        © {new Date().getFullYear()} GCETTB, All Rights Reserved
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Footer;