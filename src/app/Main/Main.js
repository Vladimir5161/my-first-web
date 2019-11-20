import React from "react";

import "./Main.css";

import FirstPage from "./pages/firstPage/FirstPage.js";

const Main = ({ OnLike, OnLiked, stateImage, stateContent }) => {
  return (
    <main className="main">
      <FirstPage
        OnLike={OnLike}
        OnLiked={OnLiked}
        stateImage={stateImage}
        stateContent={stateContent}
      />
      {/* <LastProjects />
      <Video />
      <LastPage /> */}
    </main>
  );
};

export default Main;
