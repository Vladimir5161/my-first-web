import React from "react";
import LikedContentPage from "./LikedContentPage";

import "./LikedContent.css";

class LikedPage extends React.Component {
  render() {
    const {
      likedContent,
      arreyPassVikings,
      arreyPassGoT,
      chosen,
      OnCloseButtonClick,
      OnClearAllClick
    } = this.props;
    return (
      <div className="containerMain">
        <div className="LikedPage">
          <LikedContentPage
            OnCloseButtonClick={OnCloseButtonClick}
            arreyPassVikings={arreyPassVikings}
            arreyPassGoT={arreyPassGoT}
            likedContent={likedContent}
            chosen={chosen}
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
