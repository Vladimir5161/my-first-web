import React from "react"
import { reduxForm } from "redux-form"
import { Input, createField } from './FormContrlos'

const PasswordForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div className="addContentInput">{createField("Input Login", "addLogin", [], Input)}</div>
            <div className="addContentInput">{createField("Input Password", "addPassword", [], Input)}</div>
            <button className="addContentButton">Send</button>
        </form>
    )
}

const PasswordReduxForm = reduxForm({ form: "inputPassword" })(PasswordForm)
export default PasswordReduxForm