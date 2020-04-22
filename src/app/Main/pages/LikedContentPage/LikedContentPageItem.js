import React, { useState } from "react";
import Player from "./../../CommonComonents/Player";
import ButtonClose from "./ButtonClose";
import ButtonCloseImage from "../../CommonComonents/ButtonCloseImage";
import { Link } from "react-router-dom";

const LikedContentPageItem = ({
    product,
    playerStyle = "react-player3",
    keyForDelete,
    id,
}) => {
    let [state, changeState] = useState({
        imageContent: "imageContent-full",
        fullScreenBlock: "fullScreenBlock",
        ButtonCloseImage: "ButtonCloseImage",
        fullScreenImageFixedBlock: "fullScreenImageFixedBlock",
    });
    const OnClickedImage = () => {
        changeState({
            imageContent: "imageContent-full-clicked",
            fullScreenBlock: "fullScreenBlock-clicked",
            ButtonCloseImage: "ButtonCloseImage-clicked",
            fullScreenImageFixedBlock: "fullScreenImageFixedBlock-clicked",
        });
    };
    const OnClickImage = () => {
        changeState({
            imageContent: "imageContent-full",
            fullScreenBlock: "fullScreenBlock",
            ButtonCloseImage: "ButtonCloseImage",
            fullScreenImageFixedBlock: "fullScreenImageFixedBlock",
        });
    };
    return (
        <div>
            <ButtonClose keyForDelete={keyForDelete} id={id} />
            <div className="content-list-item-images-liked">
                {!product.image ? (
                    <div style={{ marginTop: "40px" }}></div>
                ) : (
                    <img
                        className="likedImageContent"
                        src={product.image}
                        alt=""
                        onClick={() => {
                            OnClickedImage();
                        }}
                    />
                )}

                <div className={state.fullScreenImageFixedBlock}>
                    <img
                        className={state.imageContent}
                        src={product.image}
                        alt=""
                    />
                    <ButtonCloseImage
                        OnClickImage={OnClickImage}
                        ButtonCloseImage={state.ButtonCloseImage}
                    />
                </div>
            </div>
            <div className="likedContent">
                <h2 className="likedContent-name">{product.name}</h2>
                <Player video={product.video} playerStyle={playerStyle} />
                {!product.imageContent ? null : (
                    <div className="likedContent-image">
                        <img src={product.imageContent} alt="" />
                    </div>
                )}
            </div>
            <Link to={`/content/${product.id}`} className="likedContent-button">
                {product.hasOwnProperty("story") ? (
                    <button className="Add-content Know-more Read-Story">
                        Read the Story
                    </button>
                ) : null}
            </Link>
        </div>
    );
};
export default LikedContentPageItem;
