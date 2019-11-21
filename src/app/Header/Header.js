import React from "react";

import "./Header.css";
import UpperHeader from "./Menu/UpperHeader.js";
import SearchField from "./SearchField.js";

class Header extends React.Component {
  state = {
    searchField: "searchField",
    clicked: false,
    sliderDiv: "sliderDiv"
  };

  render() {
    const {
      countLike,
      OnGOTSeasonS2ClickChange,
      OnVikingsSeasonS2ClickChange,
      MovieChoseClick1,
      MovieChoseClick2,
      OnGOTSeasonS1ClickChange,
      OnVikingsSeasonS1ClickChange,
      OnSearchClick,
      OnSearchDeClick,
      logo,
      chosen,
      clicked,
      searchField
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
            OnSearchDeClick={OnSearchDeClick}
            OnSearchClick={OnSearchClick}
            MovieChoseClick1={MovieChoseClick1}
            MovieChoseClick2={MovieChoseClick2}
            logo={logo}
            chosen={chosen}
            clicked={clicked}
          />
          <SearchField searchField={searchField} />
        </div>
      </header>
    );
  }
}

export default Header;
