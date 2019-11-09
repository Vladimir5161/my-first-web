import React from "react";

import ButtonLike from "../ButtonLike.js";

class ContentListImagesItem extends React.Component {
  render() {
    const { image, OnLiked, OnLike } = this.props;
    return (
      <div className="content-list-item-images">
        <div className="content-image">
          <img className="imageContent" src={image} alt="" />
        </div>
        <ButtonLike OnLike={OnLike} OnLiked={OnLiked} />
      </div>
    );
  }
}

export default ContentListImagesItem;
