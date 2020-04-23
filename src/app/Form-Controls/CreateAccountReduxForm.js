import React from "react";
import "./forms.css";
import { reduxForm } from "redux-form";
import { Input, createField } from "./FormContrlos";
import { required, maxPassLength } from "../validators/validators";
import Alerterror from "../Main/CommonComonents/Alerterror";

const max6Login = maxPassLength(6, "login");
const max6pass = maxPassLength(6, "password");

const CreateAccount = (props) => {
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
                <div className="loginName">Create Your Login</div>
                <div className={props.inputField}>
                    {createField(
                        "Input Login",
                        "addLogin",
                        [required, max6Login],
                        Input,
                        {
                            error: props.error,
                            type: "text",
                            inputField: "inputField",
                            inputFieldError: "inputFieldError",
                            class: "alert alert-danger alertLoginError",
                        }
                    )}
                </div>
                <div className="loginName">Create Your Password</div>
                <div className={props.inputField}>
                    {createField(
                        "Input Password",
                        "addPassword",
                        [required, max6pass],
                        Input,
                        {
                            error: props.error,
                            type: "text",
                            inputField: "inputField",
                            inputFieldError: "inputFieldError",
                            class:
                                "alert alert-danger alertLoginError passwordError",
                        }
                    )}
                </div>
                <button className="Add-content Show-more">
                    Create Account
                </button>
            </div>
        </form>
    );
};

const CreateAccountReduxForm = reduxForm({ form: "create account" })(
    CreateAccount
);
export default CreateAccountReduxForm;
