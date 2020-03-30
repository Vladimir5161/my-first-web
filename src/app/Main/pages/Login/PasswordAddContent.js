import React from "react";
import PasswordReduxForm from "../../../Form-Controls/PasswordReduxFrom";

const PasswordAddContent = ({ onPassCheckClick, ...props }) => {
    let onSubmit = formData => {
        onPassCheckClick(formData.addLogin, formData.addPassword);
    };
    return (
        <div className="passwordWindow">
            <PasswordReduxForm onSubmit={onSubmit} {...props} />
        </div>
    );
};

export default PasswordAddContent;
