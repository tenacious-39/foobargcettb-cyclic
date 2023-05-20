import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Foobar from "../images/foobarName1.png";

// icon lists

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import LineAxisRoundedIcon from '@mui/icons-material/LineAxisRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-white">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src={Foobar} style={{ height: "45px", width: "112px" }} />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item ms-3 me-3">
                            <NavLink className="nav-link active" aria-current="page" to="/"><HomeRoundedIcon fontSize="small" color="primary" />Home</NavLink>
                        </li>
                        <li className="nav-item ms-3 me-3">
                            <NavLink className="nav-link active" aria-current="page" to="/resource"><LocalLibraryRoundedIcon fontSize="small" color="primary" />Resource</NavLink>
                        </li>
                        <li className="nav-item ms-3 me-3">
                            <NavLink className="nav-link active" aria-current="page" to="/ide"><ListAltRoundedIcon fontSize="small" color="primary" />IDE</NavLink>
                        </li>
                        <li className="nav-item ms-3 me-3">
                            <NavLink className="nav-link active" aria-current="page" to="/auth/google/dashboard"><LineAxisRoundedIcon fontSize="small" color="primary" />Dashboard</NavLink>
                        </li>
                        <li className="nav-item ms-3 me-3">
                            <NavLink className="nav-link active" aria-current="page" to="/contact"><ContactPageRoundedIcon fontSize="small" color="primary" />Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;