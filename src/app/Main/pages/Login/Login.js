import React, { useState } from "react";
import PasswordAddContent from "./PasswordAddContent";
import { LoggedInRedirect } from "../../../HOC/LoginRedirectHoc";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Alert from "../../CommonComonents/Alert";
import "./login.css";

const Login = (props) => {
    let [alertText, changeAlertText] = useState(
        "you are successfully logged in"
    );
    return (
        <div>
            {props.isAuth ? (
                <div styl e={{ position: "relative" }}>
                    <Alert text={alertText} {...props} />
                    <div className="timer">
                        {setTimeout(() => {
                            props.Redirects();
                            props.CreatedOnDefault();
                        }, 3000)}
                    </div>
                </div>
            ) : null}
            <PasswordAddContent
                onPassCheckClick={props.onPassCheckClick}
                {...props}
            />
        </div>
    );
};

export default compose(LoggedInRedirect, withRouter)(Login);
