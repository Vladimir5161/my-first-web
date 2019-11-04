import React from "react";

import "./FirstPage.css";
import ContentList from "./content/ContentList";

const FirstPage = ({ OnLike, OnLiked }) => {
  return (
    <div className="containerMain">
      <div className="wrapper">
        <div className="introPage">
          <h2>Our Content</h2>
          <p>
            Here you can find photo, video, story or you can add your own
            content by clicking the button below
          </p>
        </div>
        <div className="addContent">
          <button className="Add-content">Add Content</button>
          <div className="filter">
            <ul>
              <li>
                <button className="buttonFilter">Photo</button>
              </li>
              <li>
                <button className="buttonFilter">Video</button>
              </li>
              <li>
                <button className="buttonFilter">Stories</button>
              </li>
              <li>
                <button className="buttonFilter">All</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="Products">
          <ContentList OnLike={OnLike} OnLiked={OnLiked} />
          <button className="Add-content LoadMore">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
