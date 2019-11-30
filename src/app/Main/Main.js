import React from "react";

import "./Main.css";
import { Route } from "react-router-dom";
import FirstPage from "./pages/firstPage/FirstPage.js";
import LikedPage from "./pages/likedContentPage/LikedPage";
import ReactSlider from "./pages/slider/ReactSlider.js";
import NewsList from "./pages/news/NewsList";

const Main = ({
  OnLike,
  OnLiked,
  stateContent,
  stateSlides,
  sliderDiv,
  likedContent,
  addImage,
  addVideo,
  addStory,
  newTextInTextAreaImage,
  newTextInTextAreaVideo,
  newTextInTextAreaName,
  newTextInTextAreaDescription,
  newTextInTextAreaStory,
  OnCloseButtonClick,
  arreyPassVikings,
  arreyPassGoT,
  OnClearAllClick,
  likedContentState,
  OnLikeClick,
  OnLikedClick,
  chosen
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
                stateContent={stateContent}
                addImage={addImage}
                addVideo={addVideo}
                addStory={addStory}
                newTextInTextAreaImage={newTextInTextAreaImage}
                newTextInTextAreaVideo={newTextInTextAreaVideo}
                newTextInTextAreaName={newTextInTextAreaName}
                newTextInTextAreaDescription={newTextInTextAreaDescription}
                newTextInTextAreaStory={newTextInTextAreaStory}
                likedContentState={likedContentState}
                OnLikeClick={OnLikeClick}
                OnLikedClick={OnLikedClick}
              />
            </div>
          )}
        />
        <Route path="/news" render={() => <NewsList />} />
        <Route
          path="/likedContentPage"
          render={() => (
            <LikedPage
              likedContent={likedContent}
              OnCloseButtonClick={OnCloseButtonClick}
              arreyPassVikings={arreyPassVikings}
              arreyPassGoT={arreyPassGoT}
              OnClearAllClick={OnClearAllClick}
              chosen={chosen}
            />
          )}
        />
      </div>
    </main>
  );
};

export default Main;
