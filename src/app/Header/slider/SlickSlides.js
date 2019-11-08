import React from "react";

const SlickSlides = ({ h1, h2, text, image, button, href }) => {
  return (
    <div className="slide">
      <div className="sliderImage">
        <img src={image} />
      </div>
      <h2>{h2}</h2>
      <h1>{h1}</h1>
      <p>{text}</p>
      <div className="Add-content ">
        <a href={href}>{button}</a>
      </div>
    </div>
  );
};

export default SlickSlides;
