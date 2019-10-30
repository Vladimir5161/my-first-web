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
            <a href="#">Photos</a>
          </li>
          <li className="menuPoints">
            <a href="#">Vikings History</a>
          </li>
          <li className="menuPoints">
            <a href="#">Vikings Characters</a>
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
