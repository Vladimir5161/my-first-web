import React from "react";
import "./Main.css";
import { Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage.js";
import LikedPage from "./pages/LikedContentPage/LikedPage";
import ReactSlider from "./pages/slider/ReactSlider.js";
import NewsList from "./pages/news/NewsList";
import ExactNewsPage from "./pages/news/ExactNewsPage";
import ExactContentPage from "./pages/mainPage/ExactContentPage";
import MyAlert from "./pages/myAlert"

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <ReactSlider  />
              <MainPage   />
            </div>
          )}
        />
        <Route path="/news" exact render={() => <NewsList />} />
        <Route
          path="/likedContentPage"
          exact
          render={() => (
            <LikedPage/>
          )}
        />
        <Route path="/news/:id" exact component={ExactNewsPage} />
        <Route path="/content/:id" exact component={ExactContentPage} />
        <MyAlert />
      </div>
    </main>
  );
};



export default Main;
