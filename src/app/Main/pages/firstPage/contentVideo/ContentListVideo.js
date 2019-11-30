import React from "react";

import ContentListItem from "../ContentListItem.js";

class ContentListVideo extends React.Component {
  render() {
    const {
      OnLike,
      OnLiked,
      videos,
      stateContent,
      likedContentState,
      OnLikeClick,
      OnLikedClick
    } = this.props;

    return (
      <div className={videos}>
        <div className="contentBlockName ">Videos</div>
        <div className="ContentList">
          {stateContent
            .filter(item => item.video)
            .map(({ name, description, video, id }) => (
              <div className="Content" key={id}>
                <ContentListItem
                  video={video}
                  name={name}
                  description={description}
                  OnLike={OnLike}
                  OnLiked={OnLiked}
                  id={id}
                  OnLikeClick={OnLikeClick}
                  OnLikedClick={OnLikedClick}
                  clicked={likedContentState[id]}
                />
                <button className="Add-content Know-more">Know More</button>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default ContentListVideo;
