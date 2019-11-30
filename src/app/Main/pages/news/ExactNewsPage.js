import React from "react";

class ExactNewsPage extends React.Component {
  render() {
    const { newsImage, newsText, newsName, data, time, id } = this.props;
    return (
      <div className="containerMain">
        <div className="newsState">
          <div className="newsTimeData">
            <div>{data}</div>
            <div>{time}</div>
          </div>
          <h3 className="newsName">{newsName}</h3>
          <div className="news">
            <div className="row">
              <img className="newsImage" src={newsImage} />
              <div className="newsText">{newsText}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ExactNewsPage;
