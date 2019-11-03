import React from "react";

import "./UpperHeader.css";
import images from "../../../common/images.js";

const UpperHeader = ({ countLike }) => {
  return (
    <div className="upperheader">
      <div className="logo">
        <img src={images[0].logo} alt="" className="logoImage" />
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
        <button className="cart">
          <div className="countLike">{countLike}</div>
        </button>
        <button className="search"></button>
      </div>
    </div>
  );
};

export default UpperHeader;
