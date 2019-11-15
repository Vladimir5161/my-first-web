import React from "react";

import "./Header.css";
import UpperHeader from "./Menu/UpperHeader.js";
import ReactSlider from "./slider/ReactSlider.js";
import SearchField from "./SearchField.js";

class Header extends React.Component {
  state = {
    searchField: "searchField",
    clicked: false,
    sliderDiv: "sliderDiv"
  };
  OnSearchClick = () => {
    this.setState({ clicked: true });
    this.setState(prevState => ({
      searchField: (prevState.searchField = "searchFieldActive")
    }));
    this.setState(prevState => ({
      sliderDiv: (prevState.sliderDiv = "sliderDivNo")
    }));
  };
  OnSearchDeClick = () => {
    this.setState({ clicked: false });
    this.setState(prevState => ({
      searchField: (prevState.searchField = "searchField")
    }));
    this.setState(prevState => ({
      sliderDiv: (prevState.sliderDiv = "sliderDiv")
    }));
  };
  render() {
    const {
      countLike,
      stateSlides,
      OnGOTSeasonS2ClickChange,
      OnVikingsSeasonS2ClickChange,
      MovieChoseClick1,
      MovieChoseClick2,
      OnGOTSeasonS1ClickChange,
      OnVikingsSeasonS1ClickChange,
      logo,
      chosen
    } = this.props;
    return (
      <header className="header">
        <div className="container">
          <UpperHeader
            countLike={countLike}
            OnGOTSeasonS1ClickChange={OnGOTSeasonS1ClickChange}
            OnVikingsSeasonS1ClickChange={OnVikingsSeasonS1ClickChange}
            OnGOTSeasonS2ClickChange={OnGOTSeasonS2ClickChange}
            OnVikingsSeasonS2ClickChange={OnVikingsSeasonS2ClickChange}
            OnSearchDeClick={this.OnSearchDeClick}
            OnSearchClick={this.OnSearchClick}
            MovieChoseClick1={MovieChoseClick1}
            MovieChoseClick2={MovieChoseClick2}
            clicked={this.state.clicked}
            logo={logo}
            chosen={chosen}
          />
          <SearchField searchField={this.state.searchField} />
          <ReactSlider
            stateSlides={stateSlides}
            sliderDiv={this.state.sliderDiv}
          />
        </div>
      </header>
    );
  }
}

export default Header;
