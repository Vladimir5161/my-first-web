import React from "react";
import { Link } from "react-router-dom";
import ContentListItem from "../ContentListItem.js";


const ContentListVideo = ({ videos,
  firstContent, onComponentChangeVideo }) => {
  let additionalCount = 2
  return (
    <div className={videos}>
      <div className="contentBlockName ">Videos</div>
      <div className="ContentList">
        {firstContent.map(({ name, description, video, id }) => (
          <div className="Content" key={id}>
            <ContentListItem
              video={video}
              name={name}
              description={description}
              id={id}
            />
            <Link to={`/content/${id}`}>
              <button className="Add-content Know-more">Know More</button>
            </Link>
          </div>
        ))}
      </div>
      <button className="Add-content Show-more" onClick={() => { onComponentChangeVideo(additionalCount) }}>Show more</button>
    </div>
  );
}

export default ContentListVideo;
