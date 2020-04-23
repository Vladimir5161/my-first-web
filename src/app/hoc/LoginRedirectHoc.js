import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
    onPassCheckClick,
    CreateAccount,
    CreatedOnDefault,
} from "../../store/AuthReducer";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isCreated: state.auth.isCreated,
    inputField: state.auth.inputField,
});

export const LoggedInRedirect = (Component) => {
    const RedirectComponent = (props) => {
        let [shouldRedirect, changeShouldRedirect] = useState(false);
        const Redirects = () => {
            changeShouldRedirect(true);
        };
        return shouldRedirect ? (
            <Redirect to={"/"} />
        ) : (
            <Component {...props} Redirects={Redirects} />
        );
    };

    let connectedRedirectedComponent = connect(mapStateToProps, {
        onPassCheckClick,
        CreateAccount,
        CreatedOnDefault,
    })(RedirectComponent);

    return connectedRedirectedComponent;
};
