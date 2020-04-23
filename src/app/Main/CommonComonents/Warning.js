import React from "react";
import "./Alert.css";

const Warning = ({ WarningText, ClearWarningMessage }) => {
    return (
        <div
            className="modal"
            tabindex="-1"
            role="dialog"
            style={{ display: "block", textAlign: "center" }}
        >
            <div className="modal-dialog" role="document">
                <div
                    className="modal-content"
                    style={{ border: "2px solid yellow" }}
                >
                    <div className="modal-header">
                        <h5
                            className="modal-title"
                            style={{ color: "#b7d435" }}
                        >
                            Alert!
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={() => {
                                ClearWarningMessage();
                            }}
                        >
                            <span aria-hidden="false">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" style={{ color: "#b7d435" }}>
                        <p>{WarningText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Warning;
