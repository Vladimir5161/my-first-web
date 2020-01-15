import React from "react";
import { connect } from "react-redux"
import "./Header.css";
import UpperHeader from "./Menu/UpperHeader.js";
import SearchField from "./SearchField.js";

class Header extends React.Component{

  render() {
    const {
      countLike,
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
  countLike: store.isLiked.countLike
})
const mapDispatchToProps = dispatch => ({
  OnClickedOn: ()=>dispatch({
    type: "SEARCHON",
  }),
  OnClickedOff: ()=>dispatch({
    type: "SEARCHOFF",
  }),
  OnClicked: ()=>dispatch({
    type: "CLICKEDON"
  }),
  OnDeClicked: ()=>dispatch({
    type: "CLIKEDOFF"
  }),
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
