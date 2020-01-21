import React from "react";
import  { getContentMap } from "../../../../redux/Data.js";
import { Link } from "react-router-dom";
import Player from "../../../../common/Player.js";
import { connect } from "react-redux"

const ExactContentPage = ({
  match, 
  DataArrey,
  contentMap = getContentMap(DataArrey), 
  playerStyle = "react-player2"
}) => {
    return (
      <div className="containerMain">
        <div className="ExactContent">
          <h3 className="ExactContentName">
            {contentMap[match.params.id].name}
          </h3>
          <Player video={contentMap[match.params.id].video} playerStyle={playerStyle}/>
          <div className="ButtonGoBackDiv">
            <Link to="/">
              <button className="ButtonGoBack"></button>
            </Link>
          </div>
          <div className="ExactContentInfo">
            <img
              className="ExactContentImage"
              src={contentMap[match.params.id].imageContent}
              alt=""
            />
            <div className="ExactContentText">
              {contentMap[match.params.id].story}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const mapStateToProps = state => ({
    DataArrey: state.Data.Data
  })

export default connect(mapStateToProps)(ExactContentPage);
