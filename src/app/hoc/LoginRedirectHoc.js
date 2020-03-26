import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import {onPassCheckClick} from "../../store/AddContentReducer"

let mapStateToProps = state => ({
    isAuth: state.AddContent.isAuth,
    userName: state.AddContent.userName,
    userPass: state.AddContent.userPass,
})

export const LoggedInRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            console.log(this.props.isAuth)
            return (
            this.props.isAuth ? <Redirect  to={"/"}/> :
            <Component {...this.props}/>
            )
        }
    }

    let connectedRedirectedComponent = connect(mapStateToProps, {onPassCheckClick})(RedirectComponent)
    
    return connectedRedirectedComponent
}