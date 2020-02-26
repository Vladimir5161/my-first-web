import React from "react";
import { Link } from "react-router-dom";
import ContentListItem from "../ContentListItem.js";


const ContentListStory = ({ stories,
  firstContent, onComponentChange }) => {
  let additionalCount = 2
  return (
    <div className={stories}>
      <div className="contentBlockName">Stories</div>
      <div className="ContentList">
        {firstContent
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
                  id={id}
                />
                <Link to={`/content/${id}`}>
                  <button className="Add-content Know-more">Know More</button>
                </Link>
              </div>
            )
          )}
      </div>
      <button className="Add-content Show-more" onClick={() => { onComponentChange(additionalCount) }}>Show more</button>
    </div>
  );
}

export default ContentListStory;
