import React from "react";

const ButtonCloseImage = ({OnClickImage, ButtonCloseImage}) => {
    return (
      <button
        className={ButtonCloseImage}
        onClick={() => {
          OnClickImage();
        }}
      ></button>
    );
  }

export default ButtonCloseImage;
