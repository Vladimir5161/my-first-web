import React from "react";

class FilterNews extends React.Component {
  render() {
    return (
      <div>
        <div className="filter">Filter</div>
        <ul classname="filterNewsList">
          <li className="filterPoint">Last News</li>
          <li className="filterPoint">Seasons</li>
          <li className="filterPoint"></li>
          <li className="filterPoint"></li>
        </ul>
      </div>
    );
  }
}
export default FilterNews;
