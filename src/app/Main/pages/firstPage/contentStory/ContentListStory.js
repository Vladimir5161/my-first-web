import React from "react";

import ContentListItem from "../ContentListItem.js";

class ContentListStory extends React.Component {
  render() {
    const { OnLike, OnLiked, stories, stateStory } = this.props;

    return (
      <div className={stories}>
        <div className="contentBlockName">Stories</div>
        <div className="ContentList">
          {stateStory.map(
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
      </div>
    );
  }
}
export default ContentListStory;
