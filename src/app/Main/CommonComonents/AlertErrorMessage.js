import React from "react";

const AlertErrorMessage = ({ AlertText, ClearErrorMessage }) => {
    return (
        <div
            class="modal"
            tabindex="-1"
            role="dialog"
            style={{ display: "block", textAlign: "center" }}
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" style={{ color: "red" }}>
                            Alert!
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={() => {
                                ClearErrorMessage();
                            }}
                        >
                            <span aria-hidden="false">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" style={{ color: "red" }}>
                        <p>{AlertText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlertErrorMessage;
