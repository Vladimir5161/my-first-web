import React from "react";
import "./forms.css";
import { reduxForm } from "redux-form";
import { Input, createField } from "./FormContrlos";
import { required } from "../validators/validators";
import Alerterror from "../Main/CommonComonents/Alerterror";

const PasswordForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="addContentInput">
                {props.error && (
                    <div style={{ position: "relative" }}>
                        <Alerterror
                            text={props.error}
                            class="alert alert-danger alertLoginError"
                        />
                    </div>
                )}
                <div className="loginName">Your Login</div>
                <div className={props.inputField}>
                    {createField("Input Login", "addLogin", [required], Input, {
                        error: props.error,
                        type: "text",
                        inputField: "inputField",
                        inputFieldError: "inputFieldError",
                        class: "alert alert-danger alertLoginError",
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
                            class: "alert alert-danger alertLoginError",
                        }
                    )}
                </div>
                <button className="addContentButton">Send</button>
            </div>
        </form>
    );
};

const PasswordReduxForm = reduxForm({ form: "inputPassword" })(PasswordForm);
export default PasswordReduxForm;
