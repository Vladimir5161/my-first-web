import React, { useState } from "react";
import { compose } from "redux";
import { LoggedInRedirect } from "../../../hoc/LoginRedirectHoc";
import CreateAccountReduxForm from "../../../Form-Controls/CreateAccountReduxForm";
import Alert from "../../CommonComonents/Alert";
import "./login.css";

const CreateAccount = (props) => {
    let [alertText, changeAlertText] = useState(
        "your account has been created"
    );
    const onSubmit = (formData) => {
        props.CreateAccount(formData.addLogin, formData.addPassword);
    };
    return (
        <div>
            {props.isCreated ? (
                <div style={{ position: "relative" }}>
                    <Alert text={alertText} {...props} />
                    <div className="timer">
                        {setTimeout(() => {
                            props.Redirects();
                            props.CreatedOnDefault();
                        }, 3000)}
                    </div>
                </div>
            ) : null}
            <div className="passwordWindow">
                <CreateAccountReduxForm
                    onSubmit={onSubmit}
                    inputField={props.inputField}
                />
            </div>
        </div>
    );
};

export default compose(LoggedInRedirect)(CreateAccount);
