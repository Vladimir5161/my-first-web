import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ContentListItem from "../itemComponents/ContentListItem";
import { compose } from "redux";
import { ControlButtonHoc } from "../../../../hoc/ControlButtonHoc";
import { ContentContext } from "../ContentContext.js";

const ContentListStory = ({ firstContent, onComponentChange, ...props }) => {
    let additionalCount = 2;
    let [buttonName, changeButtonName] = useState("Show All");
    let { season, movie, DataArrey, stories } = useContext(ContentContext);
    let on = (type, contentType, additionalCount) => {
        props.funcControlButtonName(type, contentType, additionalCount)
            ? changeButtonName("Close All")
            : changeButtonName("Show All");
    };
    let contentType = props.getContentType("story", movie, season, DataArrey);
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
                        keyFirebase,
                    }) => (
                            <div className="Content" key={id}>
                                <ContentListItem
                                    video={video}
                                    image={imageContent}
                                    name={name}
                                    text={text}
                                    description={description}
                                    story={story}
                                    keyFirebase={keyFirebase}
                                    id={id}
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
