import React from "react";
import { reduxForm } from "redux-form";
import Textarea, { Input, createField } from "./FormContrlos";
import { correctLink, required } from "../validators/validators";

const addContentForm = ({ contentType, ...props }) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.error && <div className="inputError">{props.error}</div>}
            {contentType === "image" ? (
                <div className="addContentInput">
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
                        }
                    )}
                    <button
                        className="addContentButton"
                        disabled={props.isFetching.some(
                            (item) => item === "addContent"
                        )}
                    >
                        Add
                    </button>
                </div>
            ) : contentType === "video" ? (
                <div>
                    <div className="addContentInput">
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
                            }
                        )}
                    </div>
                    <div className="addContentInput">
                        {createField(
                            "add video name",
                            "addVideoName",
                            [],
                            Input,
                            {
                                type: "text",
                                inputField: "inputField",
                                inputFieldError: "inputFieldError",
                            }
                        )}
                    </div>
                    <button
                        className="addContentButton"
                        disabled={props.isFetching.some(
                            (item) => item === "addContent"
                        )}
                    >
                        Add
                    </button>
                </div>
            ) : contentType === "story" ? (
                <div>
                    <div className="addContentInput">
                        {createField("add story name", "addStory", [], Input, {
                            type: "text",
                            inputField: "inputField",
                            inputFieldError: "inputFieldError",
                        })}
                    </div>
                    <div className="addContentInputText">
                        {createField(
                            "add story text",
                            "addStoryText",
                            [],
                            Textarea,
                            {
                                type: "text",
                                inputField: "inputField",
                                inputFieldError: "inputFieldError",
                            }
                        )}
                    </div>
                    <div className="addContentInput">
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
                            }
                        )}
                    </div>
                    <button
                        className="addContentButton"
                        disabled={props.isFetching.some(
                            (item) => item === "addContent"
                        )}
                    >
                        Add
                    </button>
                </div>
            ) : null}
        </form>
    );
};

const addContentReduxForm = reduxForm({ form: "addContent" })(addContentForm);
export default addContentReduxForm;
