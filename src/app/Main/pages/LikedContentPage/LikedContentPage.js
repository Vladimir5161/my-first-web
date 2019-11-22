import React from "react";
import { keys } from "lodash";
import vikingsData from "../../../../redux/vikingsData";

const productsMap = vikingsData.season1.content.reduce(
  (map, product) => ({
    ...map,
    [vikingsData.season1.content]: product
  }),
  {}
);

class LikedContentPage extends React.Component {
  render() {
    const { OnClickLikesDefaultCount, likedContent } = this.props;
    return (
      <div className="containerMain">
        {keys(likedContent).map(contentId => (
          <div key={contentId}>{productsMap[contentId]}</div>
        ))}
        <button
          className="Add-content"
          onClick={() => OnClickLikesDefaultCount()}
        >
          Clear Likes
        </button>
      </div>
    );
  }
}
export default LikedContentPage;
