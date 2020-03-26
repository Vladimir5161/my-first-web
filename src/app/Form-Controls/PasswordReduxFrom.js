import React from "react"
import { reduxForm } from "redux-form"
import { Input, createField } from './FormContrlos'
import { required } from "../validators/validators"


const PasswordForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div className="loginName">Your Login</div>
            <div className="loginInput">{createField("Input Login", "addLogin", [required], Input, { error: props.error, type: "text" })}</div>
            <div className="loginName">Your Password</div>
            <div className="loginInput">{createField("Input Password", "addPassword", [required], Input, { error: props.error, type: "password" })}</div>
            <button className="addContentButton">Send</button>
            {props.error && <div className="inputError">{props.error}</div>}
        </form>
    )
}

const PasswordReduxForm = reduxForm({ form: "inputPassword" })(PasswordForm)
export default PasswordReduxForm