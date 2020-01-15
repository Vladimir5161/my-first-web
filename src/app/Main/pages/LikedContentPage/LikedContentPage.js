import React from "react";
import { keys } from "lodash";
import Data, { getContentMap } from "../../../../redux/vikingsData";
import LikedContentPageItem from "./LikedContentPageItem";
import { connect } from "react-redux";
import "./LikedContent.css";

class LikedContentPage extends React.Component {
  render() {
    const {
      likedContentItems,
      contentMapVikings = getContentMap(Data.vikingsData),
      OnCloseButtonClick,
      OnLikedCount,
    } = this.props;
    return (
      <div>
        <h1 className="h1">Liked Content</h1>
        <div className="likedContentPage">
          {keys(likedContentItems).map(contentId => (
            <div className="contentLikedArea" key={contentId}>
              <LikedContentPageItem
                contentId={contentId}
                product={contentMapVikings[contentId]}
                OnCloseButtonClick={OnCloseButtonClick}
                OnLikedCount={OnLikedCount}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store=> ({
  likedContentItems: store.likedContentItems
})

const mapDispatchToProps = dispatch => ({
  OnCloseButtonClick: (id) =>dispatch({
    type: "ONCLIKED",
    contentId: id,
  }),
  OnLikedCount: (id) =>dispatch({
    type: "ONLIKEDCOUNT",
    contentId: id,
  }),
})
export default connect(mapStateToProps, mapDispatchToProps)(LikedContentPage);

