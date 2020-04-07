import React from "react";
import Textarea, { Input, createField } from "./FormContrlos";
import { required } from "../validators/validators";
import { reduxForm } from "redux-form";
import { correctLink } from "../validators/validators";

const EditNewsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="ExactNewsName">
                {createField("News Name", "newsName", [required], Input, {
                    error: props.error,
                    type: "text",
                    inputField: "",
                    inputFieldError: "",
                })}
            </div>
            <div className="newsTimeData">
                {createField("News data", "data", [required], Input, {
                    error: props.error,
                    type: "text",
                    inputField: "",
                    inputFieldError: "",
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
                            inputField: "",
                            inputFieldError: "",
                        }
                    )}
                </div>
            </div>
            <button className="saveContentButton">Save</button>
            <div className="ExactNews">
                <div>
                    <img
                        className="ExactNewsImage"
                        src={props.newsData[props.match.params.id].newsImage}
                        alt=""
                    />
                    <div className="ExactNewsText">
                        {createField(
                            "News Text",
                            "newsText",
                            [required],
                            Textarea,
                            {
                                error: props.error,
                                type: "text",
                                inputField: "",
                                inputFieldError: "",
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
