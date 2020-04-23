import React from "react";
import "./forms.css";
import { reduxForm } from "redux-form";
import Textarea, { Input, createField } from "./FormContrlos";
import { correctLink, required, minLength } from "../validators/validators";
import Alerterror from "../../app/Main/CommonComonents/Alerterror";

const addNewsForm = ({ ...props }) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="addContentInput">
                {props.error && (
                    <div style={{ position: "relative" }}>
                        <Alerterror
                            text={props.error}
                            class="alert alert-danger alertError"
                        />
                    </div>
                )}
                <div>
                    {createField(
                        "add you new's Name",
                        "addNewsName",
                        [required],
                        Input,
                        {
                            error: props.error,
                            type: "text",
                            inputField: "inputField",
                            class: "alert alert-danger alertError",
                            inputFieldError: "inputFieldError",
                        }
                    )}
                    {createField(
                        "add your new's main text",
                        "addNewsText",
                        [required, minLength],
                        Textarea,
                        {
                            error: props.error,
                            type: "text",
                            inputField: "inputField",
                            inputFieldError: "inputFieldError",
                            class: "alert alert-danger alertTextareaError",
                        }
                    )}
                    {createField(
                        "add your image",
                        "addNewsImage",
                        [correctLink],
                        Input,
                        {
                            error: props.error,
                            type: "text",
                            inputField: "inputField",
                            inputFieldError: "inputFieldError",
                            class: "alert alert-danger alertError",
                        }
                    )}
                </div>
            </div>
            <button
                className="addContentButton"
                disabled={props.isFetching.some((id) => id === "addNews")}
            >
                Add
            </button>
        </form>
    );
};

const addContentReduxForm = reduxForm({ form: "addNews" })(addNewsForm);
export default addContentReduxForm;
