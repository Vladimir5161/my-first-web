import React from "react"
import { reduxForm } from "redux-form"
import { Input, createField } from './FormContrlos'
import { correctLink, required } from "../validators/validators"

const addContentForm = ({ contentType, ...props }) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {contentType === "image" ? <div className="addContentInput">{createField("add image link", "addImage", [correctLink, required], Input)}
                <button className="addContentButton">Add</button></div>
                :
                contentType === "video" ? <div>
                    <div className="addContentInput">{createField("add video link", "addVideo", [correctLink, required], Input)}</div>
                    <div className="addContentInput">{createField("add video name", "addVideoName", [], Input)}</div>
                    <div className="addContentInput">{createField("add video description", "addVideoDescription", [], Input)}</div>
                    <button className="addContentButton">Add</button>
                </div> :
                    contentType === "story" ? <div>
                        <div className="addContentInput">{createField("add story ", "addStory", [], Input)}</div>
                        <div className="addContentInput">{createField("add story text", "addStoryText", [], Input)}</div>
                        <div className="addContentInput">{createField("add image image", "addStoryImage", [correctLink, required], Input)}</div>
                        <button className="addContentButton">Add</button>
                    </div> : null
            }
        </form>
    )
}

const addContentReduxForm = reduxForm({ form: "addContent" })(addContentForm)
export default addContentReduxForm