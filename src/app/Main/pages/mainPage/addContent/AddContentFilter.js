import React from "react"
import PasswordAddContent from "./PasswordAddContent"

const AddContentFilter = (props) => {
    return (
        <div className="filterButtonHover">
            {props.clicked ? (
                <button
                    className="filterButton"
                    onClick={() => {
                        props.onDeClickFilterButton();
                    }}
                >
                    {" "}
                    {props.addContentClassName}
                </button>
            ) : (
                    <button
                        className="filterButton"
                        onClick={() => {
                            props.onClickFilterButton();
                        }}
                    >
                        {" "}
                        {props.addContentClassName}
                    </button>
                )}
            <PasswordAddContent
                passwordWindow={props.passwordWindow}
                onPassCheckClick={props.onPassCheckClick}
                userName={props.userName}
                userPass={props.userPass}
            />
            <ul className={props.filterContentClassName}>
                <li
                    onClick={() => {
                        props.onFilterImageClick();
                    }}
                >
                    Add Image
                </li>
                <li
                    onClick={() => {
                        props.onFilterVideoClick();
                    }}
                >
                    Add Video
                 </li>
                <li
                    onClick={() => {
                        props.onFilterStoryClick();
                    }}
                >
                    Add Story
                 </li>
            </ul>
        </div>
    )
}

export default AddContentFilter