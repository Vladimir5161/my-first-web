import React from "react";
import { connect } from "react-redux";
import "./Header.css";
import UpperHeader from "./Menu/UpperHeader.js";
import { LogOut } from "../.././store/AuthReducer";

const Header = ({
    logo,
    clicked,
    chosen,
    OnClickedOn,
    OnClickedOff,
    isAuth,
    LogOut,
    keyAuth,
}) => {
    return (
        <header className="header">
            <div className="container">
                <UpperHeader
                    logo={logo}
                    chosen={chosen}
                    clicked={clicked}
                    OnClickedOn={OnClickedOn}
                    OnClickedOff={OnClickedOff}
                    isAuth={isAuth}
                    LogOut={LogOut}
                    keyAuth={keyAuth}
                />
            </div>
        </header>
    );
};

const mapStateToProps = (store) => ({
    isAuth: store.auth.isAuth,
    keyAuth: store.auth.keyAuth,
});

export default connect(mapStateToProps, { LogOut })(Header);
