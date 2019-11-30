import React from "react";
import { keys } from "lodash";
import { getContentMap } from "../../../../redux/vikingsData";
import LikedContentPageItem from "./LikedContentPageItem";
import "./LikedContent.css";

class LikedContentPage extends React.Component {
  render() {
    const {
      likedContent,
      arreyPass,
      contentMap = getContentMap(arreyPass.content),
      OnCloseButtonClick
    } = this.props;
    return (
      <div>
        <h1 className="h1">Liked Content</h1>
        <div className="likedContentPage">
          {keys(likedContent).map(contentId => (
            <div className="contentLikedArea" key={contentId}>
              <LikedContentPageItem
                contentId={contentId}
                product={contentMap[contentId]}
                OnCloseButtonClick={OnCloseButtonClick}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default LikedContentPage;
