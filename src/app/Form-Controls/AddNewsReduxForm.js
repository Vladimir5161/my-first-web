import React from "react";
import { reduxForm } from "redux-form";
import Textarea, { Input, createField } from "./FormContrlos";
import { correctLink, required } from "../validators/validators";

const addNewsForm = ({ ...props }) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.error && <div className="inputError">{props.error}</div>}
            <div className="addContentInput">
                {createField(
                    "add you new's Name",
                    "addNewsName",
                    [required],
                    Input,
                    { error: props.error, type: "text" }
                )}
            </div>
            <div className="addContentInputText">
                {createField(
                    "add your new's main text",
                    "addNewsText",
                    [required],
                    Textarea,
                    { error: props.error, type: "text" }
                )}
            </div>
            <div className="addContentInput">
                {createField(
                    "add your image",
                    "addNewsImage",
                    [correctLink],
                    Input,
                    { error: props.error, type: "text" }
                )}
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
