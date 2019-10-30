import React from "react";

import Player from "./Video.js";
const ContentListItem = ({ image, name, description, video, text }) => {
  return (
    <div className="content-list-item">
      <div className="content-image">
        <img src={image} alt="" />
      </div>
      <div className="content-video">
        <Player />
      </div>
      <div className="content-text">{text} </div>
      <div className="content-name">{name}</div>
      <div className="content-description">{description}</div>
      <button className="knowMore fighterButton">Know More</button>
    </div>
  );
};

export default ContentListItem;
