import React from "react";
import { connect } from "react-redux"
import "./Header.css";
import UpperHeader from "./Menu/UpperHeader.js";
import SearchField from "./SearchField.js";

class Header extends React.Component{

  render() {
    const {
      countLike,
      OnGOTSeasonS2ClickChange,
      OnVikingsSeasonS2ClickChange,
      MovieChoseClick1,
      MovieChoseClick2,
      OnGOTSeasonS1ClickChange,
      OnVikingsSeasonS1ClickChange,
      OnClicked,
      OnDeClicked,
      logo,
      clicked,
      chosen,
      searchField,
      OnClickedOn,
      OnClickedOff,
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
            MovieChoseClick1={MovieChoseClick1}
            MovieChoseClick2={MovieChoseClick2}
            logo={logo}
            chosen={chosen}
            clicked={clicked}
            OnClicked={OnClicked}
            OnDeClicked={OnDeClicked}
            OnClickedOn={OnClickedOn}
            OnClickedOff={OnClickedOff}
          />
          <SearchField  searchField={searchField}/>
        </div>
      </header>
    );
  }
}
const mapStateToProps = (store)=>({
  searchField: store.searchField.search,
  clicked: store.isClicked.clicked,
})
const mapDispatchToProps = dispatch => ({
  OnClicked: ()=>dispatch({
    type: "SEARCHON",
  }),
  OnDeClicked: ()=>dispatch({
    type: "SEARCHOFF",
  }),
  OnClickedOn: ()=>dispatch({
    type: "CLICKEDON",
  }),
  OnClickedOff: ()=>dispatch({
    type: "CLICKEDOFF",
  }),
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
