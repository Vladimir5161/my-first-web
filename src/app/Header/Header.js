import React from "react";
import { connect } from "react-redux";
import "./Header.css";
import Menu from "./Menu/Menu";
import { LogOut } from "../.././store/AuthReducer";
import AlertErrorMessage from "../Main/CommonComonents/AlertErrorMessage";
import {
    ClearErrorMessage,
    ClearWarningMessage,
} from "../../store/DataReducer";
import Warining from "../Main/CommonComonents/Warning";

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
    ClearWarningMessage,
    WarningText,
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
                {!WarningText ? null : (
                    <Warining
                        WarningText={WarningText}
                        ClearWarningMessage={ClearWarningMessage}
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
    WarningText: store.Data.WarningText,
});

export default connect(mapStateToProps, {
    LogOut,
    ClearErrorMessage,
    ClearWarningMessage,
})(Header);
