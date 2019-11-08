import React from "react";

import "./FirstPage.css";
import ContentListVideo from "./contentVideo/ContentListVideo";
import ContentListImage from "./contentImage/ContentListImage";
import ContentListStory from "./contentStory/ContentListStory";
import ContentListAll from "./ContentListAll";
import { BrowserRouter, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

const FirstPage = ({ OnLike, OnLiked }) => {
  return (
    <div className="containerMain">
      <BrowserRouter>
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
                  <NavLink to="/contentlistimage" className="buttonFilter">
                    Photo
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contentlistvideo" className="buttonFilter">
                    Video
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contentliststory" className="buttonFilter">
                    Stories
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contentlistall" className="buttonFilter">
                    All
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="Products">
            <Route
              path="/ContentListVideo"
              render={props => (
                <ContentListVideo
                  {...props}
                  OnLike={OnLike}
                  OnLiked={OnLiked}
                />
              )}
            />
            <Route
              path="/ContentListImage"
              render={props => (
                <ContentListImage
                  {...props}
                  OnLike={OnLike}
                  OnLiked={OnLiked}
                />
              )}
            />
            <Route
              path="/ContentListStory"
              render={props => (
                <ContentListStory
                  {...props}
                  OnLike={OnLike}
                  OnLiked={OnLiked}
                />
              )}
            />
            <Route
              path="/ContentListAll"
              render={props => (
                <ContentListAll {...props} OnLike={OnLike} OnLiked={OnLiked} />
              )}
            />
            <button className="Add-content LoadMore">Load More</button>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default FirstPage;
