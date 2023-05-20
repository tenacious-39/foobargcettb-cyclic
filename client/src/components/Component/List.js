import React from "react";
import { NavLink } from "react-router-dom";
import "./Css/List.css";

const List = () => {
  return (
    <>
      <header>
        <div className="container container-flex">
          <div className="nav_heading">
            <h1>
              <i>Welcome To </i>GCETTB Coders’ Club
            </h1>
          </div>
          <nav>
            <div className="list">
              <NavLink to="/" className="ListItem" activeClassName="active">
                Home
              </NavLink>
              <NavLink to="/Resources" className="ListItem" activeClassName="active">
                Resources
              </NavLink>
              <NavLink to="/IDE"className="ListItem"activeClassName="active">
                IDE
              </NavLink>
              <NavLink to="/Dashboard" className="ListItem" activeClassName="active">
                Dashboard
              </NavLink>
              <NavLink to="/ContactUs"className="ListItem"activeClassName="active">
                Contact Us
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default List;
