import React from "react";

import ContentListItem from "./ContentListItem.js";
import contentImage from "./contentImage/contentImage.js";
import contentVideo from "./contentVideo/contentVideo.js";
import contentStory from "./contentStory/contentStory.js";

class ContentListAll extends React.Component {
  render() {
    const { OnLike, OnLiked } = this.props;

    return (
      <div className="ContentList">
        {contentVideo.map(
          ({ image, video, story, name, description, text, id }) => (
            <div className="Content" key={id}>
              <ContentListItem
                video={video}
                story={story}
                image={image}
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
        {contentImage.map(
          ({ image, video, story, name, description, text, id }) => (
            <div className="Content" key={id}>
              <ContentListItem
                video={video}
                story={story}
                image={image}
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
        {contentStory.map(
          ({ image, video, story, name, description, text, id }) => (
            <div className="Content" key={id}>
              <ContentListItem
                video={video}
                story={story}
                image={image}
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
    );
  }
}
export default ContentListAll;
