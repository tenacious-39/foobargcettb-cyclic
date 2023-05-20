import React from "react";
import "./Css/Home.css";
import Study from "./Images/Study.svg";
import TypingEffect from "./TypingEffect";
import FloatingGirl from "./Images/FloatingGirl.svg";
import GoogleMap from "./Images/GoogleMap.svg";
import Team from "./Images/Team.svg";
import College from "./Images/College2.jpg";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import { Fragment } from 'react';
import ScrollButton from './ScrollButton';
import { Content } from './Styles';
import "bootstrap/dist/css/bootstrap.css";


const Homepage = () => {
  return (
    <>
      <div className="Home continer-fluid">
        {/* Front Page */}
        <div className="FrontPage container-fluid">
          <div className="BodyContent">
            <h1>
              Government College of Engineering & Textile <br />
              Technology, Berhampore
            </h1>
          </div>
          <div className="text_slider">
            <TypingEffect> </TypingEffect>
          </div>
          <div className="StudyImage">
            <img src={Study} alt="" />
          </div>
          <div className="floating_image">
            <img src={FloatingGirl} alt="" />
          </div>
          {/* home page background  */}

          {/* floating animated image   */}

          <div className="ShapeDivider">
            <div className="custom-shape-divider-bottom-1679638918">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  class="shape-fill"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* About Us Page */}
        <div className="AboutUs">
          <div className="heading">
            <h1>About us</h1>
          </div>
          <div className="Swiper">
            <img src={College} alt="" />
          </div>
          <div className="AboutPageText">
            <p>
              We are the group of enthusiastic students from Government College
              of Engineering & Textile technology, Berhampore Engineering
              College. Here, we not only introduce coding to students who have
              never given it a thought, but also provide mentorship and
              assistance to all the students throughout their journey. Weekly
              classes are organized where we learn together and help each other
              grow. Various coding contests are also organized to inculcate
              sense of competition, as well as instill confidence in the
              students. All of us here at GCETTB learning hub mainly aim at
              providing a healthy and supportive environment for the students so
              that they can master their problem solving skills, replace their
              fears with motivation and inspiration, and have the confidence to
              overcome the challenges of tomorrow and reach great heights.
            </p>
            <div className="AboutPageImage">
              <img src={Team} alt="" />
            </div>
          </div>
        </div>

        {/* Gallery Page */}
        <div className="Gallery">
          <div className="heading">
            <h1>Gallery</h1>
          </div>
          <ImageSlider slides={SliderData} />
        </div>

        {/* Reach Us Page */}
        <div className="ReachUs">
          <div className="heading">
            <h1>Reach Us</h1>
          </div>
          <div className="CollegePhoto">
            <div className="GoogleMapIcon">
              <img src={GoogleMap} alt="" />
            </div>

            <h3>
              Government College of Engineering & Textile Technology <br />{" "}
              Berhampore, West Bengal, India-743373
            </h3>
          </div>
          <div className="Map">
            <iframe title="GooglaMap"
              // width="600px"
              // height="400"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?25&amp;&amp;hl=en&amp;q=gcettb+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
      <Fragment>
        <Content />
        <ScrollButton />
      </Fragment>
    </>
  );
};
export default Homepage;
