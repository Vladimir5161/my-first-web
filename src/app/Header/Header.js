import React from "react";

import "./Header.css";
import UpperHeader from "./Menu/UpperHeader.js";
import ReactSlider from "./slider/Slider.js";

const Header = ({ countLike }) => {
  return (
    <header className="header">
      <div className="container">
        <UpperHeader countLike={countLike} />
        <ReactSlider />
      </div>
    </header>
  );
};

export default Header;
