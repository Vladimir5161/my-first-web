import React from "react";
import { keys } from "lodash";
import "./News.css";
import NewsListItem from "./NewsListItem";
import newsData from "../../../../redux/newsData.js";
import ExactNewsPage from "./ExactNewsPage";

class NewsList extends React.Component {
  render() {
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
              newsData={newsData}
            />
          </div>
        ))}
      </div>
    );
  }
}
export default NewsList;
