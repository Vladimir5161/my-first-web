import React from "react";

import PropTypes from "prop-types";
import ContentListItem from "../ContentListItem.js";
import contentStory from "./contentStory.js";

class ContentListStory extends React.Component {
  render() {
    const { OnLike, OnLiked } = this.props;

    return (
      <div className="ContentList">
        {contentStory.map(
          ({ name, description, text, story, id, image, video }) => (
            <div className="Content" key={id}>
              <ContentListItem
                video={video}
                image={image}
                name={name}
                text={text}
                description={description}
                story={story}
                OnLike={OnLike}
                OnLiked={OnLiked}
              />
              <button className="Add-content Know-more">Know More</button>
            </div>
          )
        )}
      </div>
    );
  }
}
ContentListStory.propTypes = {
  story: PropTypes.string.isRequired
};
export default ContentListStory;
