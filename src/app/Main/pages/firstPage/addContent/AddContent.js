import React from "react";
import "./AddContent.css";

const AddContent = ({ addImage }) => {
  let newImage = React.createRef();
  let addNewImage = () => {
    let newImageAdd = newImage.current.value;
    addImage(newImageAdd);
    newImage.current.value = "";
  };
  return (
    <div className="addContentTable">
      <div className="addContentH1">Input your link</div>
      <textarea type="text" className="inputImage" ref={newImage}></textarea>
      <button className="Add-content" onClick={addNewImage}>
        Add Content
      </button>
    </div>
  );
};
export default AddContent;
