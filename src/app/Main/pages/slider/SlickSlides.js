import React from "react";

const SlickSlides = ({ h1, h2, text, image, button, href }) => {
    return (
        <div className="slide">
            <div className="sliderImage">
                <img src={image} alt="here should be some" />
            </div>
            <h2>{h2}</h2>
            <p>{text}</p>
            <div className="Add-content ">
                <a href={href}>{button}</a>
            </div>
        </div>
    );
};

export default SlickSlides;
