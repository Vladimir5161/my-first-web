import React from "react";
import Textarea, { Input, createField } from "./FormContrlos";
import { required } from "../validators/validators";
import { reduxForm } from "redux-form";
import { correctLink } from "../validators/validators";

const EditStoryForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="ExactContentNameForm">
                <div
                    style={{
                        textAlign: "center",
                        position: "relative",
                        left: "-300px",
                        top: "40px",
                        fontSize: "20px",
                    }}
                >
                    Edit story name
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
                <img
                    className="ExactContentImage"
                    src={props.Data[props.match.params.id].imageContent}
                    alt=""
                />
                <div className="ExactContentText">
                    <div style={{ textAlign: "center" }}>Edit your text</div>
                    {createField("Story Text", "story", [required], Textarea, {
                        error: props.error,
                        type: "text",
                        inputField: "textareaFieldEditStory",
                        inputFieldError: "textareaFieldErrorEdit",
                    })}
                </div>
            </div>
        </form>
    );
};

const EditStoryReduxForm = reduxForm({ form: "editStory" })(EditStoryForm);

export default EditStoryReduxForm;
