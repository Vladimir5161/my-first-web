import React from "react";
import "./forms.css";
import { reduxForm } from "redux-form";
import { Input, createField } from "./FormContrlos";
import { required } from "../validators/validators";

const CreateAccount = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="loginName">Create Your Login</div>
            <div className={props.inputField}>
                {createField("Input Login", "addLogin", [required], Input, {
                    error: props.error,
                    type: "text",
                    inputField: "inputField",
                    inputFieldError: "inputFieldError",
                })}
            </div>
            <div className="loginName">Create Your Password</div>
            <div className={props.inputField}>
                {createField(
                    "Input Password",
                    "addPassword",
                    [required],
                    Input,
                    {
                        error: props.error,
                        type: "text",
                        inputField: "inputField",
                        inputFieldError: "inputFieldError",
                    }
                )}
            </div>
            <button className="Add-content Show-more">Create Account</button>
            {props.error && <div className="inputError">{props.error}</div>}
        </form>
    );
};

const CreateAccountReduxForm = reduxForm({ form: "create account" })(
    CreateAccount
);
export default CreateAccountReduxForm;
