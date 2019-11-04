import React from "react";

import "./Main.css";

import FirstPage from "./pages/firstPage/FirstPage.js";

const Main = ({ OnLike, OnLiked }) => {
  return (
    <main className="main">
      <FirstPage OnLike={OnLike} OnLiked={OnLiked} />
      {/* <LastProjects />
      <Video />
      <LastPage /> */}
    </main>
  );
};

export default Main;
