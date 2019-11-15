import React from "react";

import ButtonLike from "../ButtonLike.js";
import ButtonFullScreen from "../ButtonFullScreen.js";

class ContentListImagesItem extends React.Component {
  state = {
    contentImageItem: "content-list-item-images",
    imageContent: "imageContent-full"
  };
  OnClickedImage = () => {
    this.setState(prevState => ({
      contentImageItem: (prevState.contentImageItem =
        "content-list-item-images-clicked")
    }));
    this.setState(prevState => ({
      imageContent: (prevState.imageContent = "imageContent-full-clicked")
    }));
  };
  OnClickImage = () => {
    this.setState(prevState => ({
      contentImageItem: (prevState.contentImageItem =
        "content-list-item-images")
    }));
    this.setState(prevState => ({
      imageContent: (prevState.imageContent = "imageContent-full")
    }));
  };
  render() {
    const { image, OnLiked, OnLike } = this.props;
    return (
      <div>
        <div className={this.state.contentImageItem}>
          <img className="imageContent" src={image} alt="" />
          <div className="fullScreenBlock">
            <img
              className={this.state.imageContent}
              src={image}
              alt=""
              onClick={() => {
                this.OnClickImage();
              }}
            />
          </div>
          <ButtonFullScreen
            OnClickedImage={this.OnClickedImage}
            OnClickImage={this.OnClickImage}
          />
          <ButtonLike OnLike={OnLike} OnLiked={OnLiked} />
        </div>
      </div>
    );
  }
}

export default ContentListImagesItem;
