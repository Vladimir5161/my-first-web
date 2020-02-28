import React from "react"
import PasswordReduxForm from "../../../../Form-Controls/PasswordReduxFrom"


const PasswordAddContent = ({
    passwordWindow,
    onPassCheckClick,
    userName,
    userPass
}) => {

    let onSubmit = (formData) => {

        onPassCheckClick(formData.addLogin, formData.addPassword, userName, userPass)
    }
    return (
        <div className={passwordWindow}>
            <PasswordReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default PasswordAddContent;