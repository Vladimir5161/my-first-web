import React from "react";

import Player from "../../../../common/Player.js";
import ButtonLike from "./ButtonLike.js";

class ContentListItem extends React.Component {
  render() {
    const {
      image,
      name,
      description,
      text,
      story,
      video,
      OnLiked,
      OnLike
    } = this.props;
    return (
      <div className="content-list-item">
        <Player video={video} />
        <div className="content-text">{text} </div>
        <h2 className="content-name">{name}</h2>
        <p className="content-description">"{description}"</p>
        <div className="content-image">
          <img src={image} alt="" />
        </div>
        <p className="content-story">{story}</p>
        <ButtonLike OnLike={OnLike} OnLiked={OnLiked} />
      </div>
    );
  }
}

export default ContentListItem;
