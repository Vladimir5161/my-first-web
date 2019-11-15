import React from "react";

import ContentListItem from "../ContentListItem.js";

class ContentListVideo extends React.Component {
  render() {
    const { OnLike, OnLiked, videos, stateVideo } = this.props;

    return (
      <div className={videos}>
        <div className="contentBlockName ">Videos</div>
        <div className="ContentList">
          {stateVideo.map(
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

export default ContentListVideo;
