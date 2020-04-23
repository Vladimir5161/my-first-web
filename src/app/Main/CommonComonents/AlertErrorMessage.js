import React from "react";
import "./Alert.css";

const AlertErrorMessage = ({ AlertText, ClearErrorMessage }) => {
    return (
        <div
            className="modal"
            tabindex="-1"
            role="dialog"
            style={{ display: "block", textAlign: "center", zIndex: "100" }}
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" style={{ color: "red" }}>
                            Alert!
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={() => {
                                ClearErrorMessage();
                            }}
                        >
                            <span aria-hidden="false">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" style={{ color: "red" }}>
                        <p>{AlertText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlertErrorMessage;
