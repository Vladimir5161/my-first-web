import React from "react";

import ButtonLike from "../ButtonLike.js";
import ButtonCloseImage from "../ButtonCloseImage";

class ContentListImagesItem extends React.Component {
  state = {
    contentImageItem: "content-list-item-images",
    imageContent: "imageContent-full",
    fullScreenBlock: "fullScreenBlock",
    ButtonCloseImage: "ButtonCloseImage",
    fullScreenImageFixedBlock: "fullScreenImageFixedBlock"
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
    const { image, OnLiked, OnLike } = this.props;
    return (
      <div>
        <div className={this.state.contentImageItem}>
          <img
            className="imageContent"
            src={image}
            alt=""
            onClick={() => {
              this.OnClickedImage();
            }}
          />
          <div
            className={this.state.fullScreenBlock}
            onClick={() => {
              this.OnClickImage();
            }}
          ></div>
          <div className={this.state.fullScreenImageFixedBlock}>
            <img className={this.state.imageContent} src={image} alt="" />
            <ButtonCloseImage
              OnClickImage={this.OnClickImage}
              ButtonCloseImage={this.state.ButtonCloseImage}
            />
          </div>
          <ButtonLike OnLike={OnLike} OnLiked={OnLiked} />
        </div>
      </div>
    );
  }
}

export default ContentListImagesItem;
