import React from "react";

import ContentListItem from "../ContentListItem.js";

class ContentListStory extends React.Component {
  render() {
    const { OnLike, OnLiked, stories, stateContent } = this.props;

    return (
      <div className={stories}>
        <div className="contentBlockName">Stories</div>
        <div className="ContentList">
          {stateContent
            .filter(item => item.story)
            .map(
              ({ name, description, text, story, id, imageContent, video }) => (
                <div className="Content" key={id}>
                  <ContentListItem
                    video={video}
                    image={imageContent}
                    name={name}
                    text={text}
                    description={description}
                    story={story}
                    OnLike={OnLike}
                    OnLiked={OnLiked}
                    id={id}
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
