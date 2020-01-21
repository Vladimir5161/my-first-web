import React from "react";

import { getContentMap } from "../../../../redux/Data";
import { Link } from "react-router-dom";
import { connect } from "react-redux"

class ExactNewsPage extends React.Component {
  render() {
    const { match, newsData, contentMap = getContentMap(newsData) } = this.props;
    return (
      <div className="containerMain">
        <div className="newsState">
          <h3 className="ExactNewsName">
            {contentMap[match.params.id].newsName}
          </h3>
          <div className="ButtonGoBackDiv">
            <Link to="/news">
              <button className="ButtonGoBack"></button>
            </Link>
          </div>
          <div className="newsTimeData">
            <div>{contentMap[match.params.id].data}</div>
            <div>{contentMap[match.params.id].time}</div>
          </div>

          <div className="ExactNews">
            <div className="row">
              <img
                className="ExactNewsImage"
                src={contentMap[match.params.id].newsImage} alt=""
              />
              <div className="ExactNewsText">
                {contentMap[match.params.id].newsText}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  newsData: state.newsData
})

export default connect(mapStateToProps)( ExactNewsPage);
