import React from "react";
import { Link } from "react-router-dom";

const NewsListItem = ({
  newsImage, 
  newsText, 
  newsName, 
  data, 
  time, 
  id
}) => {
    return (
      <div className="newsState">
        <div className="newsTimeData">
          <div>{data}</div>
          <div>{time}</div>
        </div>
        <h3 className="newsName">{newsName}</h3>
        <div className="news">
          <div className="row">
            <img className="newsImage" src={newsImage} alt=""/>
            <div className="newsText">{newsText}</div>
          </div>
        </div>
        <Link to={`/news/${id}`}>
          <button className="readMore">Read More</button>
        </Link>
      </div>
    );
  }

export default NewsListItem;
