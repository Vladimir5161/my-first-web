import React from "react";

import PropTypes from "prop-types";
import ContentListImagesItem from "./ContentListImagesItem.js";
import contentImage from "./contentImage.js";

class ContentListImage extends React.Component {
  render() {
    const { OnLike, OnLiked } = this.props;

    return (
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
    );
  }
}

ContentListImage.propTypes = {
  image: PropTypes.string.isRequired
};
export default ContentListImage;
