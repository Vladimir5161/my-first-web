import React from "react";
import { reduxForm } from "redux-form";
import { Input, createField, Textarea } from "./FormContrlos";
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
                        { error: props.error, type: "text" }
                    )}
                    <button
                        className="addContentButton"
                        disabled={props.isFetching.some(
                            item => item === "addContent"
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
                            { error: props.error, type: "text" }
                        )}
                    </div>
                    <div className="addContentInput">
                        {createField(
                            "add video name",
                            "addVideoName",
                            [],
                            Input,
                            { type: "text" }
                        )}
                    </div>
                    <button
                        className="addContentButton"
                        disabled={props.isFetching.some(
                            item => item === "addContent"
                        )}
                    >
                        Add
                    </button>
                </div>
            ) : contentType === "story" ? (
                <div>
                    <div className="addContentInput">
                        {createField("add story name", "addStory", [], Input, {
                            type: "text"
                        })}
                    </div>
                    <div className="addContentInputText">
                        {createField(
                            "add story text",
                            "addStoryText",
                            [],
                            Textarea,
                            { type: "text" }
                        )}
                    </div>
                    <div className="addContentInput">
                        {createField(
                            "add story image",
                            "addStoryImage",
                            [correctLink, required],
                            Input,
                            { error: props.error, type: "text" }
                        )}
                    </div>
                    <button
                        className="addContentButton"
                        disabled={props.isFetching.some(
                            item => item === "addContent"
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
