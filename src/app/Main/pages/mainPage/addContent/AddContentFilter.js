import React from "react"


const AddContentFilter = (props) => {
    return (
        <div>
            {props.isAuth ?
                <div className="filterButtonHover">
                         <p>
                            Here you can find photo, video, story or you can add your own
                            content by clicking the button below
                        </p>
                        <button
                            className="filterButton"
                            onClick={() => {props.clicked ? 
                                props.onDeClickFilterButton() : 
                                props.onClickFilterButton()
                            }}
                        >
                            {!props.addContentSecondText ? props.addContentClassName : props.addContentSecondText }
                        </button>
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
            : null }
        </div>
    )
}

export default AddContentFilter