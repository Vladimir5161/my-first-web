import React from "react";
import Textarea, { Input, createField } from "./FormContrlos";
import { required } from "../validators/validators";
import { reduxForm } from "redux-form";
import { correctLink } from "../validators/validators";

const EditNewsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="ExactContentNameForm">
                <div
                    style={{
                        textAlign: "center",
                        position: "relative",
                        left: "-300px",
                        top: "50px",
                        fontSize: "20px",
                        fontWeight: 900,
                    }}
                >
                    Edit name
                </div>
                {createField("Story Name", "name", [required], Input, {
                    error: props.error,
                    type: "text",
                    inputField: "inputFieldEditStory",
                    inputFieldError: "inputFieldErrorEdit",
                })}
            </div>
            <button className="saveContentButton">Save</button>
            <div className="ExactContentInfo">
                <div>
                    <div
                        style={{
                            textAlign: "center",
                            position: "relative",
                            left: "-400px",
                            top: "40px",
                            fontSize: "20px",
                        }}
                    >
                        Input the link for a new image if you want
                    </div>
                    <div className="ExactContentImageInput">
                        {createField(
                            "StoryImage",
                            "imageContent",
                            [required, correctLink],
                            Input,
                            {
                                error: props.error,
                                type: "text",
                                inputField: "inputFieldEditStoryImage",
                                inputFieldError: "inputFieldErrorEditImage",
                            }
                        )}
                    </div>
                    <div className="ExactContentText">
                        <div style={{ textAlign: "center" }}>
                            Edit your text
                        </div>
                        {createField(
                            "Story Text",
                            "story",
                            [required],
                            Textarea,
                            {
                                error: props.error,
                                type: "text",
                                inputField: "textareaFieldEditStory",
                                inputFieldError: "textareaFieldErrorEdit",
                            }
                        )}
                    </div>
                </div>
            </div>
        </form>
    );
};

const EditNewsReduxForm = reduxForm({ form: "editNews" })(EditNewsForm);

export default EditNewsReduxForm;
