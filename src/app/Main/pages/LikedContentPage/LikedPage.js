import React from "react";
import LikedContentPage from "./LikedContentPage";

import "./LikedContent.css";

class LikedPage extends React.Component {
  render() {
    const {
      likedContent,
      arreyPass,
      OnCloseButtonClick,
      OnClearAllClick
    } = this.props;
    return (
      <div className="containerMain">
        <div className="LikedPage">
          <LikedContentPage
            OnCloseButtonClick={OnCloseButtonClick}
            arreyPass={arreyPass}
            likedContent={likedContent}
          />
        </div>
        <div className="buttonClearAll">
          <button className="Add-content" onClick={() => OnClearAllClick()}>
            Clear All
          </button>
        </div>
      </div>
    );
  }
}
export default LikedPage;
