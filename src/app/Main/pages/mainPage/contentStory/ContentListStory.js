import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContentListItem from "../ContentListItem.js";
import { compose } from "redux";
import { ControlButtonHoc } from "../../../../hoc/ControlButtonHoc";

const ContentListStory = ({
    stories,
    firstContent,
    onComponentChange,
    ...props
}) => {
    let additionalCount = 2;
    let [buttonName, changeButtonName] = useState("Show All");
    let on = (type, contentType, additionalCount) => {
        props.funcControlButtonName(type, contentType, additionalCount)
            ? changeButtonName("Close All")
            : changeButtonName("Show All");
    };
    let contentType = props.getContentType(
        "story",
        props.movie,
        props.season,
        props.DataArrey
    );
    if (firstContent.length === 0) {
        return null;
    }
    return (
        <div className={stories}>
            <div className="contentBlockName">Stories</div>
            <div className="ContentList">
                {firstContent.map(
                    ({
                        name,
                        description,
                        text,
                        story,
                        id,
                        imageContent,
                        video,
                        keyFirebase
                    }) => (
                        <div className="Content" key={keyFirebase}>
                            <ContentListItem
                                video={video}
                                image={imageContent}
                                name={name}
                                text={text}
                                description={description}
                                story={story}
                                id={id}
                                keyFirebase={keyFirebase}
                                deleteContent={props.deleteContent}
                                editMode={props.editMode}
                                editModeClass="ButtonCloseImage-clickedEditBlack"
                                contentType={`story`}
                            />
                            <Link to={`/content/${id}`}>
                                <button className="Add-content Know-more">
                                    Know More
                                </button>
                            </Link>
                        </div>
                    )
                )}
            </div>
            {contentType.length <= additionalCount ? null : (
                <button
                    className="Add-content Show-more"
                    onClick={() => {
                        onComponentChange(additionalCount);
                        on("story", additionalCount);
                    }}
                >
                    {buttonName}
                </button>
            )}
        </div>
    );
};

export default compose(ControlButtonHoc)(ContentListStory);
