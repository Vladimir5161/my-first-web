import React from "react";
import Data, { getContentMap } from "../../../../redux/vikingsData.js";
import { Link } from "react-router-dom";
import Player from "../../../../common/Player.js";

class ExactContentPage extends React.Component {
  render() {
    const { match, contentMap = getContentMap(Data.vikingsData) } = this.props;
    return (
      <div className="containerMain">
        <div className="ExactContent">
          <h3 className="ExactContentName">
            {contentMap[match.params.id].name}
          </h3>
          <Player video={contentMap[match.params.id].video} />

          <div className="ButtonGoBackDiv">
            <Link to="/">
              <button className="ButtonGoBack"></button>
            </Link>
          </div>
          <div className="ExactContentInfo">
            <img
              className="ExactContentImage"
              src={contentMap[match.params.id].imageContent}
            />
            <div className="ExactContentText">
              {contentMap[match.params.id].story}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ExactContentPage;
