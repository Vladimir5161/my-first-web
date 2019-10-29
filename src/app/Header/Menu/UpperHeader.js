import React from "react";

import "./UpperHeader.css";
import logo from "../HeaderImages/Waxom.png";

const UpperHeader = () => {
  return (
    <div className="upperheader">
      <div className="logo">
        <img src={logo} alt="" className="logoImage" />
      </div>
      <nav className="menu">
        <ul className="navigationMenu">
          <li className="menuPoints">
            <a href="#">Home</a>
          </li>
          <li className="menuPoints">
            <a href="#">About Us</a>
          </li>
          <li className="menuPoints">
            <a href="#">Portfolio</a>
          </li>
          <li className="menuPoints">
            <a href="#">Features</a>
          </li>
          <li className="menuPoints">
            <a href="#">Blog</a>
          </li>
          <li className="menuPoints">
            <a href="#">Pricing</a>
          </li>
          <li className="menuPoints">
            <a href="#">Shortcodes</a>
          </li>
          <li className="menuPoints">
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>
      <div className="searcharea">
        <button className="cart"></button>
        <button className="search"></button>
      </div>
    </div>
  );
};

export default UpperHeader;
