import React from "react";

const SlickSlides = ({ h1, h2, text, image, button }) => {
  return (
    <div className="slide">
      <div className="sliderImage">
        <img src={image} />
      </div>
      <h2>{h2}</h2>
      <h1>{h1}</h1>
      <p>{text}</p>
      <button className="Add-content ">{button}</button>
    </div>
  );
};

export default SlickSlides;
