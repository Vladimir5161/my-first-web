import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ContentListItem from "../itemComponents/ContentListItem";
import { compose } from "redux";
import { ControlButtonHoc } from "../../../../hoc/ControlButtonHoc";
import { ContentContext } from "../ContentContext.js";

const ContentListVideo = ({ firstContent, onComponentChange, ...props }) => {
    let additionalCount = 2;
    let [buttonName, changeButtonName] = useState("Show All");
    let { season, movie, DataArrey, videos } = useContext(ContentContext);
    let on = (type, contentType, additionalCount) => {
        props.funcControlButtonName(type, contentType, additionalCount)
            ? changeButtonName("Close All")
            : changeButtonName("Show All");
    };
    let contentType = props.getContentType("video", movie, season, DataArrey);
    if (firstContent.length === 0) {
        return null;
    }
    return (
        <div className={videos}>
            <div className="contentBlockName ">Videos</div>
            <div className="ContentList">
                {firstContent.map(
                    ({ name, description, video, id, keyFirebase }) => (
                        <div className="Content" key={id}>
                            <ContentListItem
                                video={video}
                                name={name}
                                description={description}
                                id={id}
                                keyFirebase={keyFirebase}
                                editModeClass="ButtonCloseImage-clickedEdit"
                                contentType={`video`}
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
                        on("video", additionalCount);
                    }}
                >
                    {buttonName}
                </button>
            )}
        </div>
    );
};

export default compose(ControlButtonHoc)(ContentListVideo);
