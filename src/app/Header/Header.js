import React from "react";
import { connect } from "react-redux";
import "./Header.css";
import Menu from "./Menu/Menu";
import { LogOut } from "../.././store/AuthReducer";
import AlertErrorMessage from "../Main/CommonComonents/AlertErrorMessage";
import { ClearErrorMessage } from "../../store/DataReducer";

const Header = ({
    logo,
    clicked,
    chosen,
    OnClickedOn,
    OnClickedOff,
    isAuth,
    LogOut,
    keyAuth,
    AlertText,
    ClearErrorMessage,
}) => {
    return (
        <header className="header">
            <div className="container">
                <Menu
                    logo={logo}
                    chosen={chosen}
                    clicked={clicked}
                    OnClickedOn={OnClickedOn}
                    OnClickedOff={OnClickedOff}
                    isAuth={isAuth}
                    LogOut={LogOut}
                    keyAuth={keyAuth}
                />
                {!AlertText ? null : (
                    <AlertErrorMessage
                        AlertText={AlertText}
                        ClearErrorMessage={ClearErrorMessage}
                    />
                )}
            </div>
        </header>
    );
};

const mapStateToProps = (store) => ({
    isAuth: store.auth.isAuth,
    keyAuth: store.auth.keyAuth,
    AlertText: store.Data.AlertText,
});

export default connect(mapStateToProps, { LogOut, ClearErrorMessage })(Header);
