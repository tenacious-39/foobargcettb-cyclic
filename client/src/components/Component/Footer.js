import React from "react";
import "./Css/Footer.css";
import CollegeLogo from'./Images/CollegeLogo.jpg';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="CollegeLogo">
          <img src={CollegeLogo} alt="CollegeLogo" />
        </div>
        <div className="CollegeLink">
          <a href="http://gcettb.ac.in/" target="blank">www.gcettb.in</a>
        </div>
        <div>
          <h5>&copy; 2022 GCETTB Learning Hub</h5>
        </div>
        <div className="FooterText">
            <h4>Designed by Kritidipta, Arup, Jayanta & Maniklal. </h4>
        </div>
      </div>
    </>
  );
};

export default Footer;
