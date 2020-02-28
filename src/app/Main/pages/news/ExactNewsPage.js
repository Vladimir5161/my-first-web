import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { newsDataIdSelector } from "../../../selectors/exactContent-selectors"


const ExactNewsPage = ({ match, newsData }) => {
  return (
    <div className="containerMain">
      <div className="newsState">
        <h3 className="ExactNewsName">
          {newsData[match.params.id].newsName}
        </h3>
        <div className="ButtonGoBackDiv">
          <Link to="/news">
            <button className="ButtonGoBack"></button>
          </Link>
        </div>
        <div className="newsTimeData">
          <div>{newsData[match.params.id].data}</div>
          <div>{newsData[match.params.id].time}</div>
        </div>

        <div className="ExactNews">
          <div className="row">
            <img
              className="ExactNewsImage"
              src={newsData[match.params.id].newsImage} alt=""
            />
            <div className="ExactNewsText">
              {newsData[match.params.id].newsText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  newsData: newsDataIdSelector(state)
})

export default connect(mapStateToProps)(ExactNewsPage);
