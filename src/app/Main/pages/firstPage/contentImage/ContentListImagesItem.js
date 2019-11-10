import React from "react";

import ButtonLike from "../ButtonLike.js";

class ContentListImagesItem extends React.Component {
  render() {
    const { image, OnLiked, OnLike } = this.props;
    return (
      <div className="content-list-images-item">
        <img className="imageContent" src={image} alt="" />
        <ButtonLike OnLike={OnLike} OnLiked={OnLiked} />
      </div>
    );
  }
}

export default ContentListImagesItem;
