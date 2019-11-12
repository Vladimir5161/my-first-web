import React from "react";

import ContentListImagesItem from "./ContentListImagesItem.js";
import contentImage from "./contentImage.js";

class ContentListImage extends React.Component {
  render() {
    const { OnLike, OnLiked, images } = this.props;

    return (
      <div className={images}>
        <div className="contentBlockName">Images</div>
        <div className="ContentList-images">
          {contentImage.map(({ image, id }) => (
            <div className="Content-images" key={id}>
              <ContentListImagesItem
                image={image}
                OnLike={OnLike}
                OnLiked={OnLiked}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default ContentListImage;
