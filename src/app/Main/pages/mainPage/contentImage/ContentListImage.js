import React from "react";
import ContentListImagesItem from "./ContentListImagesItem.js";


const ContentListImage = ({ firstContent,
  images, onComponentChange }) => {
  let additionalCount = 3


  return (
    <div className={images}>
      <div className="contentBlockName">Images</div>
      <div className="ContentList-images">
        {firstContent.map(({ image, id }) => (
          <div className="Content-images" key={id}>
            <ContentListImagesItem
              image={image}
              id={id}
            />
          </div>
        ))}
      </div>
      <button className="Add-content Show-more" onClick={() => { onComponentChange(additionalCount) }}>Show more</button>
    </div>
  );
}

export default ContentListImage;
