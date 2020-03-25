import React, {useState} from "react";
import ContentListImagesItem from "./ContentListImagesItem.js";
import { compose } from "redux"
import  {ControlButtonHoc } from "../../../../hoc/ControlButtonHoc"


const ContentListImage = ({ firstContent,
  images, onComponentChange, ...props}) => {
  let additionalCount = 3
  let [buttonName, changeButtonName] =useState("Show All")
  let on = (type, contentType, additionalCount) => {
    props.funcControlButtonName(type, contentType, additionalCount) ? changeButtonName("Close All") : changeButtonName("Show All")
  }
  let contentType = props.getContentType("image", props.movie, props.season, props.DataArrey)
  if(firstContent.length === 0) {
    return null
  }
  return (
    <div className={images}>
      <div className="contentBlockName">Images</div>
      <div className="ContentList-images">
        {firstContent.map(({ image, id, keyFirebase }) => (
          <div className="Content-images" key={id}>
            <ContentListImagesItem
              image={image}
              id={id}
              keyFirebase ={keyFirebase}
              deleteContent={props.deleteContent}
              DataArrey={props.DataArrey}
              editMode={props.editMode}
              editModeClass="ButtonCloseImage-clickedEdit"
              contentType={'image'}
            />
          </div>
        ))}
      </div>
        {contentType.length <= additionalCount ? null : <button className="Add-content Show-more" onClick={() => { onComponentChange(additionalCount); on('image', additionalCount); }}>{buttonName}</button>}
    </div>
  );
}

export default compose(ControlButtonHoc)(ContentListImage);

