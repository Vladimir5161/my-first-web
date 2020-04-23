import React from "react";
import "./forms.css";
import Textarea, { Input, createField } from "./FormContrlos";
import { required, minLength } from "../validators/validators";
import { reduxForm } from "redux-form";
import { correctLink } from "../validators/validators";

const EditNewsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="addContentInput">
                <div className="ExactNewsName">
                    {createField("News Name", "newsName", [required], Input, {
                        error: props.error,
                        type: "text",
                        inputField: "inputField",
                        inputFieldError: "inputFieldError",
                        class: "alert alert-danger alertErrorNewsEdit",
                    })}
                </div>
                <div className="newsTimeData">
                    {createField("News data", "data", [required], Input, {
                        error: props.error,
                        type: "text",
                        inputField: "inputField",
                        inputFieldError: "inputFieldError",
                        class: "alert alert-danger alertErrorNewsEdit",
                    })}
                    <div className="ExactNewsImageInput">
                        {createField(
                            "News Image",
                            "newsImage",
                            [correctLink],
                            Input,
                            {
                                error: props.error,
                                type: "text",
                                inputField: "inputField",
                                inputFieldError: "inputFieldError",
                                class: "alert alert-danger alertErrorNewsEdit",
                            }
                        )}
                    </div>
                </div>
                <button className="saveContentButton">Save</button>
                <div className="ExactNews">
                    <div>
                        <img
                            className="ExactNewsImage"
                            src={
                                props.newsData[props.match.params.id].newsImage
                            }
                            alt=""
                        />
                        <div className="ExactNewsText">
                            {createField(
                                "News Text",
                                "newsText",
                                [minLength, required],
                                Textarea,
                                {
                                    error: props.error,
                                    type: "text",
                                    inputField: "",
                                    inputFieldError: "",
                                    class:
                                        "alert alert-danger alertTextareaError",
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

const EditNewsReduxForm = reduxForm({ form: "editNews" })(EditNewsForm);

export default EditNewsReduxForm;
