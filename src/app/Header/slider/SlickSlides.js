import React from "react";

const SlickSlides = ({ h1, h2, text }) => {
  return (
    <div className="slide">
      <h2>{h2}</h2>
      <h1>{h1}</h1>
      <text>{text}</text>
      <button className="sliderButton">Get Started</button>
    </div>
  );
};

export default SlickSlides;
