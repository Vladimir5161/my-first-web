import React from "react";

import PropTypes from "prop-types";
import ContentListItem from "../ContentListItem.js";
import contentVideo from "./contentVideo.js";

class ContentListVideo extends React.Component {
  render() {
    const { OnLike, OnLiked } = this.props;

    return (
      <div>
        <div className="contentBlockName">Videos</div>
        <div className="ContentList">
          {contentVideo.map(
            ({ name, description, video, text, id, image, story }) => (
              <div className="Content" key={id}>
                <ContentListItem
                  image={image}
                  story={story}
                  video={video}
                  name={name}
                  text={text}
                  description={description}
                  OnLike={OnLike}
                  OnLiked={OnLiked}
                />
                <button className="Add-content Know-more">Know More</button>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}
ContentListVideo.propTypes = {
  video: PropTypes.string.isRequired
};
export default ContentListVideo;
