import React from "react";

class ButtonCloseImage extends React.Component {
  render() {
    const { OnClickImage, ButtonCloseImage } = this.props;
    return (
      <button
        className={ButtonCloseImage}
        onClick={() => {
          OnClickImage();
        }}
      ></button>
    );
  }
}
export default ButtonCloseImage;
