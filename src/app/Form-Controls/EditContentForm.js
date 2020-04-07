import React from "react";
import Textarea, { Input, createField } from "./FormContrlos";
import { required } from "../validators/validators";
import { reduxForm } from "redux-form";
import { correctLink } from "../validators/validators";
import Player from "../../common/Player";

const EditContentForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="ExactContentInfo">
                {Object.keys(props.Data[props.match.params.id]).some(
                    (n) => n === "story"
                ) ? (
                    <div>
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
                                    inputField: "inputFieldEditStory",
                                    inputFieldError: "inputFieldErrorEdit",
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
                ) : null}
                {Object.keys(props.Data[props.match.params.id]).some(
                    (n) => n === "video"
                ) ? (
                    <div>
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
                                    inputField: "inputFieldEditStory",
                                    inputFieldError: "inputFieldErrorEdit",
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
                            {createField("Video", "video", [required], Input, {
                                error: props.error,
                                type: "text",
                                inputField: "inputFieldEditStory",
                                inputFieldError: "inputFieldErrorEdit",
                            })}{" "}
                        </div>
                    </div>
                ) : null}
            </div>
        </form>
    );
};

const EditContentReduxForm = reduxForm({ form: "editStory" })(EditContentForm);

export default EditContentReduxForm;
