import React from "react";
import "./forms.css";
import { reduxForm } from "redux-form";
import Textarea, { Input, createField } from "./FormContrlos";
import { correctLink, required } from "../validators/validators";
import Alerterror from "../Main/CommonComonents/Alerterror";

const addContentForm = ({ contentType, ...props }) => {
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
                {contentType === "image" ? (
                    <div>
                        {createField(
                            "add image link",
                            "addImage",
                            [correctLink, required],
                            Input,
                            {
                                error: props.error,
                                type: "text",
                                inputField: "inputField",
                                inputFieldError: "inputFieldError",
                                class: "alert alert-danger alertError",
                            }
                        )}
                        <button
                            className="addContentButton"
                            disabled={props.isFetching.some(
                                (id) => id === "addContent"
                            )}
                        >
                            Add
                        </button>
                    </div>
                ) : contentType === "video" ? (
                    <div>
                        {createField(
                            "add video link",
                            "addVideo",
                            [correctLink, required],
                            Input,
                            {
                                error: props.error,
                                type: "text",
                                inputField: "inputField",
                                inputFieldError: "inputFieldError",
                                class: "alert alert-danger alertError",
                            }
                        )}
                        {createField(
                            "add video name",
                            "addVideoName",
                            [],
                            Input,
                            {
                                type: "text",
                                inputField: "inputField",
                                inputFieldError: "inputFieldError",
                                class: "alert alert-danger alertError",
                            }
                        )}
                        <button
                            className="addContentButton"
                            disabled={props.isFetching.some(
                                (id) => id === "addContent"
                            )}
                        >
                            Add
                        </button>
                    </div>
                ) : contentType === "story" ? (
                    <div>
                        {createField(
                            "add story name",
                            "addStory",
                            [required],
                            Input,
                            {
                                type: "text",
                                inputField: "inputField",
                                inputFieldError: "inputFieldError",
                                class: "alert alert-danger alertError",
                            }
                        )}
                        {createField(
                            "add story text",
                            "addStoryText",
                            [required],
                            Textarea,
                            {
                                type: "text",
                                inputField: "inputField",
                                inputFieldError: "inputFieldError",
                                class: "alert alert-danger alertTextareaError",
                            }
                        )}
                        {createField(
                            "add story image",
                            "addStoryImage",
                            [correctLink, required],
                            Input,
                            {
                                error: props.error,
                                type: "text",
                                inputField: "inputField",
                                inputFieldError: "inputFieldError",
                                class: "alert alert-danger alertError",
                            }
                        )}
                        <button
                            className="addContentButton"
                            disabled={props.isFetching.some(
                                (id) => id === "addContent"
                            )}
                        >
                            Add
                        </button>
                    </div>
                ) : null}
            </div>
        </form>
    );
};

const addContentReduxForm = reduxForm({ form: "addContent" })(addContentForm);
export default addContentReduxForm;
