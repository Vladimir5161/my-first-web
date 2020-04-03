import React, { useContext } from "react";
import Player from "../../../../common/Player.js";
import ButtonLike from "./ButtonLike.js";
import { ContentContext } from "./ContentContext.js";

const ContentListItem = ({
    image,
    name,
    text,
    story,
    video,
    id,
    editModeClass,
    keyFirebase,
    contentType,
    playerStyle = "react-player"
}) => {
    let { editMode, deleteContent, isFetching } = useContext(ContentContext);
    return (
        <div className="content-list-item">
            {editMode ? (
                <button
                    disabled={isFetching.some(item => item === id)}
                    className={editModeClass}
                    onClick={() => {
                        deleteContent(id, keyFirebase, contentType);
                    }}
                ></button>
            ) : null}
            <Player video={video} playerStyle={playerStyle} />
            <div className="content-text">{text} </div>
            <h2 className="content-name">{name}</h2>
            <div className="content-image">
                <img src={image} alt="" />
            </div>
            <p className="content-story">{story}</p>
            <ButtonLike id={id} />
        </div>
    );
};
export default ContentListItem;
