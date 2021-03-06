import React, { useContext, useState } from "react";

import ButtonLike from "../../../CommonComonents/ButtonLike";
import ButtonCloseImage from "../../../CommonComonents/ButtonCloseImage";
import { ContentContext } from "../ContentContext.js";

const ContentListImagesItem = ({ image, id, contentType, keyFirebase }) => {
    let { editMode, deleteContent, isFetching } = useContext(ContentContext);
    let [contentListState, changeContentListState] = useState({
        contentImageItem: "content-list-item-images",
        imageContent: "imageContent-full",
        fullScreenBlock: "fullScreenBlock",
        ButtonCloseImage: "ButtonCloseImage",
        fullScreenImageFixedBlock: "fullScreenImageFixedBlock",
        value: true,
    });
    const OnClickedImage = () => {
        changeContentListState({
            contentImageItem: "content-list-item-images-clicked",
            imageContent: "imageContent-full-clicked",
            fullScreenBlock: "fullScreenBlock-clicked",
            ButtonCloseImage: "ButtonCloseImage-clicked",
            fullScreenImageFixedBlock: "fullScreenImageFixedBlock-clicked",
        });
    };
    const OnClickImage = () => {
        changeContentListState({
            contentImageItem: "content-list-item-images",
            imageContent: "imageContent-full",
            fullScreenBlock: "fullScreenBlock",
            ButtonCloseImage: "ButtonCloseImage",
            fullScreenImageFixedBlock: "fullScreenImageFixedBlock",
        });
    };
    let uId = id;
    return (
        <div>
            {editMode ? (
                <button
                    disabled={isFetching.some((id) => id === uId)}
                    className="ButtonCloseImage-clickedEdit"
                    onClick={() => {
                        deleteContent(id, keyFirebase, contentType);
                    }}
                ></button>
            ) : null}
            <div className={contentListState.contentImageItem}>
                <img
                    className="imageContent"
                    src={image}
                    alt=""
                    onClick={() => {
                        OnClickedImage();
                    }}
                />
                <div
                    className={contentListState.fullScreenBlock}
                    onClick={() => {
                        OnClickImage();
                    }}
                ></div>
                <div className={contentListState.fullScreenImageFixedBlock}>
                    <img
                        className={contentListState.imageContent}
                        src={image}
                        alt=""
                    />
                    <ButtonCloseImage
                        OnClickImage={OnClickImage}
                        ButtonCloseImage={contentListState.ButtonCloseImage}
                    />
                </div>
                <ButtonLike keyFirebase={keyFirebase} id={id} />
            </div>
        </div>
    );
};

export default ContentListImagesItem;
