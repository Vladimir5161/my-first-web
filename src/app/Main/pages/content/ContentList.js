import React from "react";

import ContentListItem from "./ContentListItem.js";
import content from "./content.js";
import Player from "./Player.js";
const ContentList = () => {
  return (
    <div className="ContentList">
      {content.map(({ image, name, description, video, text, id }) => (
        <div className="Content" key={id}>
          <Player video={video} />
          <ContentListItem
            image={image}
            name={name}
            text={text}
            description={description}
          />
        </div>
      ))}
    </div>
  );
};

export default ContentList;
