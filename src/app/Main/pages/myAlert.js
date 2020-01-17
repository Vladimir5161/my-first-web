import React from "react"
import "./myAlert.css"
import { connect } from "react-redux"

const myAlert = ({alertClass, OnAlertDeClick}) => {
    return (
            <div className={alertClass}>
                <div className="myAlertBox">
                    <p>Не написано еще</p>
                    <button className="Add-content CloseAlert" onClick={()=>{OnAlertDeClick();}}>Жми и закрой нахрен окно</button>
                </div>

            </div>
    )
}

const mapStateToProps = state => ({
    alertClass: state.Rules.alertClass
})
const mapDispatchToProps = dispatch => ({
    OnAlertDeClick: ()=>dispatch({
        type: "ONRULESDECLICK",
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(myAlert)