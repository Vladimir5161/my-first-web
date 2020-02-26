import React from "react";

import Player from "../../../../common/Player.js";
import ButtonLike from "./ButtonLike.js";

const ContentListItem =({image,
  name,
  text,
  story,
  video,
  id,
  playerStyle = "react-player"})=> {
    return (
      <div className="content-list-item">
        <Player video={video} playerStyle={playerStyle}/>
        <div className="content-text">{text} </div>
        <h2 className="content-name">{name}</h2>
        <div className="content-image">
          <img src={image} alt="" />
        </div>
        <p className="content-story">{story}</p>
        <ButtonLike
          id={id}
        />
      </div>
    );
  }
export default ContentListItem;
