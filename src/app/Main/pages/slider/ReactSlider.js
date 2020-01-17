import React from "react";
import { connect } from "react-redux"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import SlickSlides from "./SlickSlides";
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
    const { stateSlides, OnSliderClose, sliderClass, ButtonClose, clicked, OnSliderOpen} = this.props;
    return (
      <div className="sliderDiv">
              {clicked ? (
              <button
                  className={ButtonClose}
                   onClick={() => {
                      OnSliderOpen()
                               }}
              ></button>
              ) : (
              <button
                   className={ButtonClose}
                   onClick={() => {
                      OnSliderClose()
               }}
              ></button>
              )}
        <Slider {...settings} className={sliderClass}>
          {stateSlides.map(({ h1, text, h2, image, button, id, href }) => (
            <div className="HeaderSlick" key={id}>
              <div className="slide">
                <div className="Slides">
                  <SlickSlides
                    image={image}
                    h2={h2}
                    h1={h1}
                    text={text}
                    button={button}
                    href={href}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  stateSlides: state.movieChose1.stateSlides,
  sliderClass: state.Rules.sliderClass,
  ButtonClose: state.Rules.ButtonClose,
  clicked: state.Rules.clicked,
})
const mapDispatchToProps = dispatch => ({
  OnSliderClose: () => dispatch({
    type: "ONSLIDERCLOSE",
  }),
  OnSliderOpen: () => dispatch({
    type: "ONSLIDEROPEN",
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReactSlider);
