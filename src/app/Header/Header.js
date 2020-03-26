import React from "react";
import { connect } from "react-redux"
import "./Header.css";
import UpperHeader from "./Menu/UpperHeader.js";
import {LogOut} from '../.././store/AddContentReducer'

const Header = ({
  countLike,
  logo,
  clicked,
  chosen,
  OnClickedOn,
  OnClickedOff,
  isAuth,
  LogOut
}) => {
  return (
    <header className="header">
      <div className="container">
        <UpperHeader
          countLike={countLike}
          logo={logo}
          chosen={chosen}
          clicked={clicked}
          OnClickedOn={OnClickedOn}
          OnClickedOff={OnClickedOff}
          isAuth={isAuth}
          LogOut={LogOut}
        />
      </div>
    </header>
  );
}

const mapStateToProps = (store) => ({
  countLike: store.isLiked.countLike,
  isAuth: store.AddContent.isAuth
})

export default connect(mapStateToProps, {LogOut})(Header);
