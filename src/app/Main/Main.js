import React from "react";

import "./Main.css";

import FirstPage from "./pages/firstPage/FirstPage.js";

const Main = ({ OnLike, OnLiked, stateVideo, stateImage, stateStory }) => {
  return (
    <main className="main">
      <FirstPage
        OnLike={OnLike}
        OnLiked={OnLiked}
        stateImage={stateImage}
        stateVideo={stateVideo}
        stateStory={stateStory}
      />
      {/* <LastProjects />
      <Video />
      <LastPage /> */}
    </main>
  );
};

export default Main;
