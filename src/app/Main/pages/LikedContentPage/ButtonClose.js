import React from "react";

class ButtonClose extends React.Component {
  render() {
    const { OnCloseButtonClick, contentId } = this.props;
    return (
      <button
        className="ButtonClose"
        onClick={() => {
          OnCloseButtonClick(contentId);
        }}
      ></button>
    );
  }
}
export default ButtonClose;
