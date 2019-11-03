import React from "react";

import "./Main.css";

import FirstPage from "./pages/firstPage/FirstPage.js";

const Main = ({ OnLikeClick, OnLikedClick, like, countLike }) => {
  return (
    <main className="main">
      <FirstPage
        OnLikeClick={OnLikeClick}
        OnLikedClick={OnLikedClick}
        like={like}
        countLike={countLike}
      />
      {/* <LastProjects />
      <Video />
      <LastPage /> */}
    </main>
  );
};

export default Main;
