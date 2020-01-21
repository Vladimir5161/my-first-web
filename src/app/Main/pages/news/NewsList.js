import React from "react";
import "./News.css";
import NewsListItem from "./NewsListItem";
import { connect } from "react-redux"


const NewsList = ({newsData}) => {
    return (
      <div className="containerMain">
        <h1 className="h1">News</h1>
        {newsData.map(({ newsImage, newsText, id, newsName, data, time }) => (
          <div key={id}>
            <NewsListItem
              newsImage={newsImage}
              newsText={newsText}
              newsName={newsName}
              data={data}
              time={time}
              id={id}
            />
          </div>
        ))}
      </div>
    );
  }

  const mapStateToProps = (state) => ({
    newsData: state.newsData
  })

export default connect(mapStateToProps)(NewsList);
