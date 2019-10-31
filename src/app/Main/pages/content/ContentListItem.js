import React from "react";

import Player from "../../../../common/Player.js";

const ContentListItem = ({ image, name, description, text, story, video }) => {
  return (
    <div className="content-list-item">
      <Player video={video} />
      <div className="content-image">
        <img src={image} alt="" />
      </div>
      <div className="content-text">{text} </div>
      <h2 className="content-name">{name}</h2>
      <p className="content-description">"{description}"</p>
      <p className="content-story">{story}</p>
    </div>
  );
};

export default ContentListItem;
