import React from "react";

import ContentListItem from "./ContentListItem.js";
import content from "./content.js";

class ContentList extends React.Component {
  render() {
    const { OnLikeClick, OnLikedClick, like, countLike } = this.props;

    return (
      <div className="ContentList">
        {content.map(({ image, name, description, video, text, story, id }) => (
          <div className="Content" key={id}>
            <ContentListItem
              video={video}
              image={image}
              name={name}
              text={text}
              description={description}
              story={story}
              OnLikeClick={OnLikeClick}
              OnLikedClick={OnLikedClick}
              like={like}
              countLike={countLike}
            />
            <button className="Add-content Know-more">Know More</button>
          </div>
        ))}
      </div>
    );
  }
}

export default ContentList;
