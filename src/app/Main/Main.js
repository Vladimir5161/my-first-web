import React from "react";

import "./Main.css";
import { Route } from "react-router-dom";
import FirstPage from "./pages/firstPage/FirstPage.js";
import LikedContentPage from "./pages/likedContentPage/LikedContentPage";
import ReactSlider from "./pages/slider/ReactSlider.js";

const Main = ({
  OnLike,
  OnLiked,
  stateImage,
  stateContent,
  stateSlides,
  sliderDiv,
  OnClickLikesDefaultCount,
  likedContent
}) => {
  return (
    <main className="main">
      <div className="container">
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <ReactSlider stateSlides={stateSlides} sliderDiv={sliderDiv} />
              <FirstPage
                OnLike={OnLike}
                OnLiked={OnLiked}
                stateImage={stateImage}
                stateContent={stateContent}
              />
            </div>
          )}
        />
        <Route
          path="/likedContentPage"
          render={() => (
            <LikedContentPage
              OnClickLikesDefaultCount={OnClickLikesDefaultCount}
              likedContent={likedContent}
            />
          )}
        />
      </div>
    </main>
  );
};

export default Main;
