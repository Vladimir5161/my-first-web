import React from "react";

import "./Main.css";
import { Route } from "react-router-dom";
<<<<<<< HEAD
import MainPage from "./pages/mainPage/MainPage.js";
import LikedPage from "./pages/LikedContentPage/LikedPage";
import ReactSlider from "./pages/slider/ReactSlider.js";
import NewsList from "./pages/news/NewsList";
import ExactNewsPage from "./pages/news/ExactNewsPage";
import ExactContentPage from "./pages/mainPage/ExactContentPage";
import Data from "../../redux/vikingsData";
=======
import FirstPage from "./pages/firstPage/FirstPage.js";
import LikedPage from "./pages/likedContentPage/LikedPage";
import ReactSlider from "./pages/slider/ReactSlider.js";
import NewsList from "./pages/news/NewsList";
>>>>>>> e73566af505b08d7f54fe3c6b1b0db15f3abe7d2

const Main = ({
  OnLike,
  OnLiked,
  stateContent,
  stateSlides,
  sliderDiv,
<<<<<<< HEAD
  addImage,
  addVideo,
  addStory,
  newTextImage,
  newTextVideo,
  newTextVideoName,
  newTextVideoDescription,
  newTextStoryText,
  newTextStoryImage,
  newTextStoryName,
  OnCloseButtonClick,
  OnClearAllClick,
  OnLikeClick,
  OnLikedClick,
  chosen,
  wayImage,
  wayVIdeo,
  wayStory,
  filterWay,
  filterWay1,
  filterWay2,
  filterWay3
=======
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
>>>>>>> e73566af505b08d7f54fe3c6b1b0db15f3abe7d2
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
              <MainPage
                OnLike={OnLike}
                OnLiked={OnLiked}
                stateContent={stateContent}
                addImage={addImage}
                addVideo={addVideo}
                addStory={addStory}
                newTextImage={newTextImage}
                newTextVideo={newTextVideo}
                newTextVideoName={newTextVideoName}
                newTextVideoDescription={newTextVideoDescription}
                newTextStoryText={newTextStoryText}
                newTextStoryImage={newTextStoryImage}
                newTextStoryName={newTextStoryName}
                OnLikeClick={OnLikeClick}
                OnLikedClick={OnLikedClick}
                wayVIdeo={wayVIdeo}
                wayImage={wayImage}
                wayStory={wayStory}
                filterWay={filterWay}
                filterWay1={filterWay1}
                filterWay2={filterWay2}
                filterWay3={filterWay3}
              />
            </div>
          )}
        />

        <Route path="/news" exact render={() => <NewsList />} />
        <Route
          path="/likedContentPage"
          exact
          render={() => (
            <LikedPage
              OnCloseButtonClick={OnCloseButtonClick}
              OnClearAllClick={OnClearAllClick}
              chosen={chosen}
            />
          )}
        />
        <Route path="/news/:id" exact component={ExactNewsPage} />
        <Route path="/content/:id" exact component={ExactContentPage} />
      </div>
    </main>
  );
};

export default Main;
