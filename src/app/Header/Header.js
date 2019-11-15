import React from "react";

import "./Header.css";
import UpperHeader from "./Menu/UpperHeader.js";
import ReactSlider from "./slider/ReactSlider.js";

const Header = ({
  countLike,
  state,
  OnSeasonS6ClickChange,
  OnSeasonS5ClickChange,
  OnSeasonS4ClickChange,
  OnSeasonS3ClickChange,
  OnSeasonS2ClickChange,
  OnSeasonS1ClickChange
}) => {
  return (
    <header className="header">
      <div className="container">
        <UpperHeader
          countLike={countLike}
          OnSeasonS1ClickChange={OnSeasonS1ClickChange}
          OnSeasonS2ClickChange={OnSeasonS2ClickChange}
          OnSeasonS3ClickChange={OnSeasonS3ClickChange}
          OnSeasonS4ClickChange={OnSeasonS4ClickChange}
          OnSeasonS5ClickChange={OnSeasonS5ClickChange}
          OnSeasonS6ClickChange={OnSeasonS6ClickChange}
        />
        <ReactSlider stateSlides={state.headerContent.slides} />
      </div>
    </header>
  );
};

export default Header;
