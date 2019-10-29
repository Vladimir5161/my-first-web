import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

// import SlickSlides from "./SlickSlides";
// import slides from "./slides";
import Slider from "react-slick";

class ReactSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="HeaderSlick">
            <div className="slide">
              <h2>Enjoy the story of Ragnar Lodbrok with us</h2>
              <h1>Portfolio PSD Template</h1>
              <p>
                Nam liber tempor cum soluta nobis eleifend option congue nihil
                imperdiet doming id quod mazim placerat facer possim assum.
              </p>
              <button className="sliderButton">Get Started</button>
            </div>
          </div>
        </div>
        <div>
          <div className="HeaderSlick">
            <div className="slide">
              <h2>Unique and Modern Design</h2>
              <h1>Portfolio PSD Template</h1>
              <p>
                Nam liber tempor cum soluta nobis eleifend option congue nihil
                imperdiet doming id quod mazim placerat facer possim assum.
              </p>
              <button className="sliderButton">GET STARTED</button>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default ReactSlider;
