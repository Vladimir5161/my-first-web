import React from "react";

import PropTypes from "prop-types";
import ContentListItem from "../ContentListItem.js";
import contentImage from "./contentImage.js";

class ContentListImage extends React.Component {
  render() {
    const { OnLike, OnLiked } = this.props;

    return (
      <div className="ContentList">
        {contentImage.map(({ image, name, description, text, id }) => (
          <div className="Content" key={id}>
            <ContentListItem
              image={image}
              name={name}
              text={text}
              description={description}
              OnLike={OnLike}
              OnLiked={OnLiked}
            />
            <button className="Add-content Know-more">Know More</button>
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
