import React from "react";
import Player from "./../../../../common/Player.js";
import ButtonClose from "./ButtonClose";
import ButtonCloseImage from "../firstPage/ButtonCloseImage";

class LikedContentPageItem extends React.Component {
  state = {
    ButtonCloseImage: "ButtonCloseImage-clicked",
    contentImageItem: "content-list-item-images",
    imageContent: "imageContent-full",
    fullScreenBlock: "fullScreenBlock",
    ButtonCloseImage: "ButtonCloseImage",
    fullScreenImageFixedBlock: "fullScreenImageFixedBlock",
    ButtonCloseImage: "ButtonCloseImage-clicked"
  };
  OnClickedImage = () => {
    this.setState(prevState => ({
      contentImageItem: (prevState.contentImageItem =
        "content-list-item-images-clicked")
    }));
    this.setState(prevState => ({
      imageContent: (prevState.imageContent = "imageContent-full-clicked")
    }));
    this.setState({ fullScreenBlock: "fullScreenBlock-clicked" });
    this.setState({ ButtonCloseImage: "ButtonCloseImage-clicked" });
    this.setState({
      fullScreenImageFixedBlock: "fullScreenImageFixedBlock-clicked"
    });
  };
  OnClickImage = () => {
    this.setState(prevState => ({
      contentImageItem: (prevState.contentImageItem =
        "content-list-item-images")
    }));
    this.setState(prevState => ({
      imageContent: (prevState.imageContent = "imageContent-full")
    }));
    this.setState({ fullScreenBlock: "fullScreenBlock" });
    this.setState({ ButtonCloseImage: "ButtonCloseImage" });
    this.setState({ fullScreenImageFixedBlock: "fullScreenImageFixedBlock" });
  };
  render() {
    const { product, OnCloseButtonClick, contentId } = this.props;
    return (
      <div>
        <ButtonClose
          ButtonCloseImage={this.state.ButtonCloseImage}
          OnCloseButtonClick={OnCloseButtonClick}
          contentId={contentId}
        />
        <div className={this.state.contentImageItem}>
          <img
            className="likedImageContent"
            src={product.image}
            alt=""
            onClick={() => {
              this.OnClickedImage();
            }}
          />

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
          <Player video={product.video} />
          <div className="likedContent-image">
            <img src={product.imageContent} alt="" />
          </div>
          <p className="likedContent-story">{product.story}</p>
        </div>
      </div>
    );
  }
}
export default LikedContentPageItem;
