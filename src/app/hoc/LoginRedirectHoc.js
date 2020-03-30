import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
    onPassCheckClick,
    CreateAccount,
    CreatedOnDefault
} from "../../store/AuthReducer";

let mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    isCreated: state.auth.isCreated,
    inputField: state.auth.inputField
});

export const LoggedInRedirect = Component => {
    class RedirectComponent extends React.Component {
        state = {
            shouldRedirect: false
        };
        Redirects = () => {
            this.setState({ shouldRedirect: true });
        };
        render() {
            return this.state.shouldRedirect ? (
                <Redirect to={"/"} />
            ) : (
                <Component {...this.props} Redirects={this.Redirects} />
            );
        }
    }

    let connectedRedirectedComponent = connect(mapStateToProps, {
        onPassCheckClick,
        CreateAccount,
        CreatedOnDefault
    })(RedirectComponent);

    return connectedRedirectedComponent;
};
