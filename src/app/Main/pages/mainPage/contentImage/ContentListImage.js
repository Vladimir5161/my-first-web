import React from "react";
import { connect } from "react-redux"
import ContentListImagesItem from "./ContentListImagesItem.js";

const ContentListImage = ({
  images,
  DataArrey,
  wayImage
}) => {
    return (
      <div className={images}>
        <div className="contentBlockName">Images</div>
        <div className="ContentList-images">
          {DataArrey.filter(wayImage).map(({ image, id }) => (
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
  const mapStateToProps = state => ({
    DataArrey: state.Data.Data
  })
  
  export default connect(mapStateToProps)(ContentListImage);
