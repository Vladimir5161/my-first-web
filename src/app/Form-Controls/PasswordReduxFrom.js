import React from "react";
import { reduxForm } from "redux-form";
import { Input, createField } from "./FormContrlos";
import { required } from "../validators/validators";

const PasswordForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="loginName">Your Login</div>
            <div className={props.inputField}>
                {createField("Input Login", "addLogin", [required], Input, {
                    error: props.error,
                    type: "text",
                    inputField: "inputField",
                    inputFieldError: "inputFieldError",
                })}
            </div>
            <div className="loginName">Your Password</div>
            <div className={props.inputField}>
                {createField(
                    "Input Password",
                    "addPassword",
                    [required],
                    Input,
                    {
                        error: props.error,
                        type: "password",
                        inputField: "inputField",
                        inputFieldError: "inputFieldError",
                    }
                )}
            </div>
            <button className="addContentButton">Send</button>
            {props.error && <div className="inputError">{props.error}</div>}
        </form>
    );
};

const PasswordReduxForm = reduxForm({ form: "inputPassword" })(PasswordForm);
export default PasswordReduxForm;
