import React from "react"
import PasswordAddContent from "./PasswordAddContent"
import {LoggedInRedirect} from "../../../hoc/LoginRedirectHoc"
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import "./login.css"

const Login = (props) => {
    return (
            <PasswordAddContent 
                onPassCheckClick={props.onPassCheckClick}
                userName={props.userName}
                userPass={props.userPass}
            />
    )
}

export default compose(LoggedInRedirect, withRouter)(Login)