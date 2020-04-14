import React from "react";
import "./Alert.css";

const Alert = (props) => {
    return (
        <div className={props.class} role="alert">
            {props.text}
        </div>
    );
};

export default Alert;
