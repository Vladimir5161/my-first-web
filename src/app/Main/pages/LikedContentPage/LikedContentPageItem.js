import React from "react";
import Player from "./../../CommonComonents/Player";
import ButtonClose from "./ButtonClose";
import ButtonCloseImage from "../../CommonComonents/ButtonCloseImage";
import { Link } from "react-router-dom";

class LikedContentPageItem extends React.Component {
    state = {
        imageContent: "imageContent-full",
        fullScreenBlock: "fullScreenBlock",
        ButtonCloseImage: "ButtonCloseImage",
        fullScreenImageFixedBlock: "fullScreenImageFixedBlock",
    };
    OnClickedImage = () => {
        this.setState((prevState) => ({
            imageContent: (prevState.imageContent =
                "imageContent-full-clicked"),
        }));
        this.setState({ fullScreenBlock: "fullScreenBlock-clicked" });
        this.setState({ ButtonCloseImage: "ButtonCloseImage-clicked" });
        this.setState({
            fullScreenImageFixedBlock: "fullScreenImageFixedBlock-clicked",
        });
    };
    OnClickImage = () => {
        this.setState((prevState) => ({
            imageContent: (prevState.imageContent = "imageContent-full"),
        }));
        this.setState({ fullScreenBlock: "fullScreenBlock" });
        this.setState({ ButtonCloseImage: "ButtonCloseImage" });
        this.setState({
            fullScreenImageFixedBlock: "fullScreenImageFixedBlock",
        });
    };
    render() {
        const {
            product,
            playerStyle = "react-player3",
            keyForDelete,
            id,
        } = this.props;
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
                                this.OnClickedImage();
                            }}
                        />
                    )}

                    <div className={this.state.fullScreenImageFixedBlock}>
                        <img
                            className={this.state.imageContent}
                            src={product.image}
                            alt=""
                        />
                        <ButtonCloseImage
                            OnClickImage={this.OnClickImage}
                            ButtonCloseImage={this.state.ButtonCloseImage}
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
                <Link
                    to={`/content/${product.id}`}
                    className="likedContent-button"
                >
                    {product.hasOwnProperty("story") ? (
                        <button className="Add-content Know-more Read-Story">
                            Read the Story
                        </button>
                    ) : null}
                </Link>
            </div>
        );
    }
}
export default LikedContentPageItem;
