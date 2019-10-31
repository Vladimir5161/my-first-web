import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

import SlickSlides from "./SlickSlides";
import slides from "./slides";
import Slider from "react-slick";

class ReactSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {slides.map(({ h1, text, h2, image, button, id }) => (
          <div className="HeaderSlick">
            <div className="slide">
              <div className="Slides" key={id}>
                <SlickSlides
                  image={image}
                  h2={h2}
                  h1={h1}
                  text={text}
                  button={button}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}

export default ReactSlider;
