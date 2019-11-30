import React from "react";

import ContentListImagesItem from "./ContentListImagesItem.js";

class ContentListImage extends React.Component {
  render() {
    const { OnLike, OnLiked, images, stateContent } = this.props;
    return (
      <div className={images}>
        <div className="contentBlockName">Images</div>
        <div className="ContentList-images">
          {stateContent
            .filter(item => item.image)
            .map(({ image, id }) => (
              <div className="Content-images" key={id}>
                <ContentListImagesItem
                  image={image}
                  OnLike={OnLike}
                  OnLiked={OnLiked}
                  id={id}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}
export default ContentListImage;
