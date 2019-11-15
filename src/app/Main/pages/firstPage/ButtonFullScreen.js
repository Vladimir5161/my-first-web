import React from "react";

class ButtonFullScreen extends React.Component {
  state = {
    fullScreen: "ButtonFullScreen"
  };
  render() {
    const { OnClickedImage, OnClickImage } = this.props;
    return (
      <button
        className={this.state.fullScreen}
        onClick={() => {
          OnClickImage();
          OnClickedImage();
        }}
      ></button>
    );
  }
}
export default ButtonFullScreen;
