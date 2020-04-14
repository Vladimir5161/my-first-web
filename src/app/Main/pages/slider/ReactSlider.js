import React from "react";
import { connect } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import SlickSlides from "./SlickSlides";
import Slider from "react-slick";
import { getSlides } from "../../../selectors/sliderSelectors";
import { OnSliderClose, OnSliderOpen } from "../../../../store/sliderReducer";

class ReactSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        const {
            OnSliderClose,
            sliderClass,
            ButtonClose,
            clicked,
            OnSliderOpen,
        } = this.props;
        return (
            <div className="sliderDiv">
                {clicked ? (
                    <button
                        className={ButtonClose}
                        onClick={() => {
                            OnSliderOpen();
                        }}
                    ></button>
                ) : (
                    <button
                        className={ButtonClose}
                        onClick={() => {
                            OnSliderClose();
                        }}
                    ></button>
                )}
                <Slider {...settings} className={sliderClass}>
                    {this.props.Sliders.map(
                        ({ h1, text, h2, image, button, id, href }) => (
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
                        )
                    )}
                </Slider>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    sliderClass: state.slides.sliderClass,
    ButtonClose: state.slides.ButtonClose,
    clicked: state.slides.clicked,
    Sliders: getSlides(state),
});

export default connect(mapStateToProps, { OnSliderClose, OnSliderOpen })(
    ReactSlider
);
