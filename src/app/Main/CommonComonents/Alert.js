import React from "react";
import "./Alert.css";

const Alert = (props) => {
    return (
        <div
            class="alert alert-success"
            role="alert"
            style={{
                margin: "0 auto",
                left: "0",
                right: "0",
                color: "blue",
                position: "absolute",
                width: "500px",
                top: "-70px",
                zIndex: "25",
            }}
        >
            {props.text}
        </div>
    );
};

export default Alert;
