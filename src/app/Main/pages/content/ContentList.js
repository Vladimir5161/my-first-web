import React from "react";

import content from "./content";
import ContentListItem from "./ContentListItem";

const ContentList = () => {
  return (
    <div className="content">
      {content.map(({ image, name, description, video, text, id }) => (
        <div className="Content" key={id}>
          <ContentListItem
            image={image}
            video={video}
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
