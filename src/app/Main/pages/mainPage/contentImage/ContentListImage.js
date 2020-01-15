import React from "react";

import ContentListImagesItem from "./ContentListImagesItem.js";

class ContentListImage extends React.Component {
  render() {
    const {
      images,
      stateContent,
      wayImage
    } = this.props;
    return (
      <div className={images}>
        <div className="contentBlockName">Images</div>
        <div className="ContentList-images">
          {stateContent.filter(wayImage).map(({ image, id }) => (
            <div className="Content-images" key={id}>
              <ContentListImagesItem
                image={image}
                id={id}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default ContentListImage;
