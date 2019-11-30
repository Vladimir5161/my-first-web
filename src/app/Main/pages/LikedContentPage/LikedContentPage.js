import React from "react";
import { keys } from "lodash";
import { getContentMap } from "../../../../redux/vikingsData";
import LikedContentPageItem from "./LikedContentPageItem";
import "./LikedContent.css";

class LikedContentPage extends React.Component {
  render() {
    const {
      likedContent,
      arreyPassVikings,
      arreyPassGoT,
      contentMapVikings = getContentMap(arreyPassVikings.content),
      contentMapGoT = getContentMap(arreyPassGoT.content),
      chosen,
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
                product={
                  chosen
                    ? contentMapGoT[contentId]
                    : contentMapVikings[contentId]
                }
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
