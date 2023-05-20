import React from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.css";


function Header() {
    return (
        <header className="pt-2 pb-2">
            <Navbar />
        </header>
    );
}

export default Header;