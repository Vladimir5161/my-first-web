import React from "react";
import ContentListImagesItem from "./ContentListImagesItem.js";

const ContentListImage = ({firstImagePage,
  ShowMoreImages, images}) => {
    return (
      <div className={images}>
        <div className="contentBlockName">Images</div>
        <div className="ContentList-images">
          {firstImagePage.map(({ image, id }) => (
            <div className="Content-images" key={id}>
              <ContentListImagesItem
                image={image}
                id={id}
              />
            </div>
          ))}
        </div>
        <button className="Add-content Show-more" onClick={()=>{ShowMoreImages()}}>Show more</button>
      </div>
    );
  }

  export default ContentListImage;
