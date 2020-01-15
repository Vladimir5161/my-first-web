import React from "react";
import LikedContentPage from "./LikedContentPage";
import { connect } from "react-redux"
import "./LikedContent.css";

class LikedPage extends React.Component {
  render() {
    const {
      OnCloseButtonClick,
      OnClearAllClick,
      OnLikedContentClear,
    } = this.props;
    return (
      <div className="containerMain">
        <div className="LikedPage">
          <LikedContentPage
            OnCloseButtonClick={OnCloseButtonClick}
          />
        </div>
        <div className="buttonClearAll">
          <button className="Add-content" onClick={() => {OnClearAllClick(); OnLikedContentClear();}}>
            Clear All
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps=(dispatch)=>({
  OnClearAllClick: ()=>dispatch({
    type: "ONCLEARALLCLICK"
  }),
  OnLikedContentClear: ()=>dispatch({
    type: "ONLIKEDCONTENTCLEAR"
  })
})
export default connect(null, mapDispatchToProps)(LikedPage);
