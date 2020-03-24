import React from "react";
import { connect } from "react-redux"
import "./Header.css";
import UpperHeader from "./Menu/UpperHeader.js";

const Header = ({
  countLike,
  OnClicked,
  OnDeClicked,
  logo,
  clicked,
  chosen,
  searchField,
  OnClickedOn,
  OnClickedOff,
}) => {
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
      </div>
    </header>
  );
}

const mapStateToProps = (store) => ({
  countLike: store.isLiked.countLike
})
const mapDispatchToProps = dispatch => ({
  OnClicked: () => dispatch({
    type: "CLICKEDON"
  }),
  OnDeClicked: () => dispatch({
    type: "CLIKEDOFF"
  }),
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
