import React from "react";
import "./forms.css";
import Textarea, { Input, createField } from "./FormContrlos";
import { required, minLength } from "../validators/validators";
import { reduxForm } from "redux-form";
import { correctLink } from "../validators/validators";
import Player from "../Main/CommonComonents/Player";

const EditContentForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="ExactContentInfo">
                {Object.keys(props.Data[props.match.params.id]).some(
                    (n) => n === "story"
                ) ? (
                    <div>
                        <div className="addContentInput">
                            <div className="ExactContentNameForm">
                                <div
                                    style={{
                                        textAlign: "center",
                                        fontSize: "20px",
                                        fontWeight: 900,
                                    }}
                                >
                                    Edit name
                                </div>
                                {createField(
                                    "Story Name",
                                    "name",
                                    [required],
                                    Input,
                                    {
                                        error: props.error,
                                        type: "text",
                                        inputField: "inputField",
                                        inputFieldError: "inputFieldError",
                                        class:
                                            "alert alert-danger alertEditContentError",
                                    }
                                )}
                            </div>
                            <button className="saveContentButton">Save</button>
                            <div className="ExactContentLink">
                                <div
                                    style={{
                                        textAlign: "center",
                                        fontSize: "20px",
                                        fontWeight: 900,
                                    }}
                                >
                                    Input the link for a new image if you want
                                </div>
                                {createField(
                                    "StoryImage",
                                    "imageContent",
                                    [correctLink],
                                    Input,
                                    {
                                        error: props.error,
                                        type: "text",
                                        inputField: "inputField",
                                        inputFieldError: "inputFieldError",
                                        class:
                                            "alert alert-danger alertEditContentError",
                                    }
                                )}
                            </div>
                            <img
                                className="ExactContentImage"
                                src={
                                    props.Data[props.match.params.id]
                                        .imageContent
                                }
                                alt=""
                            />
                            <div className="ExactContentText">
                                <div style={{ textAlign: "center" }}>
                                    Edit your text
                                </div>
                                {createField(
                                    "Story Text",
                                    "story",
                                    [required, minLength],
                                    Textarea,
                                    {
                                        error: props.error,
                                        type: "text",
                                        inputField: "textareaFieldEdit",
                                        inputFieldError:
                                            "textareaFieldErrorEdit",
                                        class:
                                            "alert alert-danger alertEditContentError",
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                ) : null}
                {Object.keys(props.Data[props.match.params.id]).some(
                    (n) => n === "video"
                ) ? (
                    <div>
                        <div className="addContentInput">
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
                                {createField(
                                    "Story Name",
                                    "name",
                                    [required],
                                    Input,
                                    {
                                        error: props.error,
                                        type: "text",
                                        inputField: "inputField",
                                        inputFieldError: "inputFieldError",
                                        class:
                                            "alert alert-danger alertEditContentError",
                                    }
                                )}
                            </div>
                            <button className="saveContentButton">Save</button>
                            <Player
                                video={props.Data[props.match.params.id].video}
                                playerStyle={"react-player2"}
                            />
                            <div className="ExactContentLink">
                                <div>
                                    Input the link for a new video if you want
                                </div>
                                {createField(
                                    "Video",
                                    "video",
                                    [required],
                                    Input,
                                    {
                                        error: props.error,
                                        type: "text",
                                        inputField: "inputField",
                                        class:
                                            "alert alert-danger alertEditContentError",

                                        inputFieldError: "inputFieldError",
                                    }
                                )}{" "}
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </form>
    );
};

const EditContentReduxForm = reduxForm({ form: "editStory" })(EditContentForm);

export default EditContentReduxForm;
