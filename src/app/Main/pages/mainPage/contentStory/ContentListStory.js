import React, {useState} from "react";
import { Link } from "react-router-dom";
import ContentListItem from "../ContentListItem.js";
import { compose } from "redux"
import  {ControlButtonHoc} from "../../../../hoc/ControlButtonHoc"



const ContentListStory = ({ stories,
  firstContent, onComponentChange, ...props }) => {
  let additionalCount = 2
  let [buttonName, changeButtonName] =useState("Show All")
  let on = (type, contentType, additionalCount) => {
    props.funcControlButtonName(type, contentType, additionalCount) ? changeButtonName("Close All") : changeButtonName("Show All")
  }

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
      <button className="Add-content Show-more" onClick={() => { onComponentChange(additionalCount); on('stories', 'story', additionalCount) }}>{buttonName}</button>
    </div>
  );
}

export default compose(ControlButtonHoc)(ContentListStory)

