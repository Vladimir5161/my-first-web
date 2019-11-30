import React from "react";
import { omit } from "lodash";
import "../common/reset.css";
import "../common/base.css";
import Data from "../redux/vikingsData";

import {
  addImage,
  addVideo,
  addStory,
  newTextInTextAreaImage,
  newTextInTextAreaVideo,
  newTextInTextAreaName,
  newTextInTextAreaDescription,
  newTextInTextAreaStory
} from "../redux/vikingsData";

import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";

class App extends React.Component {
  state = {
    countLike: 0,
    stateContent: Data.vikingsData.season1.content,
    logo: "../../images/logo.png",
    stateSlides: Data.vikingsData.slides.vikingsSlides,
    chosen: false,
    searchField: "searchField",
    clicked: false,
    sliderDiv: "sliderDiv",
    likedContent: {},
    arreyPass: Data.vikingsData.season1
  };
  OnSearchClick = () => {
    this.setState({ clicked: true });
    this.setState(prevState => ({
      searchField: (prevState.searchField = "searchFieldActive")
    }));
    this.setState(prevState => ({
      sliderDiv: (prevState.sliderDiv = "sliderDivNo")
    }));
  };
  OnSearchDeClick = () => {
    this.setState({ clicked: false });
    this.setState(prevState => ({
      searchField: (prevState.searchField = "searchField")
    }));
    this.setState(prevState => ({
      sliderDiv: (prevState.sliderDiv = "sliderDiv")
    }));
  };
  OnLiked = contentId => {
    this.setState(prevState => ({ countLike: prevState.countLike - 1 }));
    this.setState(prevState => {
      let prevLikedContent = { ...prevState.likedContent };
      return {
        likedContent: omit(prevLikedContent, [contentId])
      };
    });
  };
  OnLike = contentId => {
    this.setState(prevState => ({ countLike: prevState.countLike + 1 }));
    this.setState(prevState => ({
      likedContent: {
        ...prevState.likedContent,
        [contentId]: prevState.likedContent[contentId] || 0
      }
    }));
  };
  OnClearAllClick = () => {
    this.setState({ countLike: 0 });
    this.setState({
      likedContent: []
    });
  };
  OnCloseButtonClick = contentId => {
    this.setState(prevState => ({ countLike: prevState.countLike - 1 }));
    this.setState(prevState => {
      let prevLikedContent = { ...prevState.likedContent };
      return {
        likedContent: omit(prevLikedContent, [contentId])
      };
    });
  };
  MovieChoseClick1 = () => {
    this.setState({ chosen: true });
    this.setState({ stateSlides: Data.gotData.slides.GOTSlides });
    this.setState({ logo: "../../images/got.png" });
    this.setState({ stateContent: Data.gotData.season1.content });
    this.setState({ arreyPass: Data.gotData.season1 });
  };
  MovieChoseClick2 = () => {
    this.setState({ chosen: false });
    this.setState({ stateSlides: Data.vikingsData.slides.vikingsSlides });
    this.setState({ logo: "../../images/logo.png" });
    this.setState({ stateContent: Data.vikingsData.season1.content });
    this.setState({ arreyPass: Data.vikingsData.season1 });
  };
  OnVikingsSeasonS1ClickChange = () => {
    this.setState({ stateContent: Data.vikingsData.season1.content });
    this.setState({ stateImage: Data.vikingsData.season1.contentImage });
    this.setState({ arreyPass: Data.vikingsData.season1 });
  };
  OnVikingsSeasonS2ClickChange = () => {
    this.setState({ stateContent: Data.vikingsData.season2.content });
    this.setState({ arreyPass: Data.vikingsData.season2 });
  };
  OnGOTSeasonS1ClickChange = () => {
    this.setState({ stateContent: Data.gotData.season1.content });
    this.setState({ arreyPass: Data.gotData.season1 });
  };
  OnGOTSeasonS2ClickChange = () => {
    this.setState({ stateContent: Data.gotData.season2.content });
    this.setState({ arreyPass: Data.gotData.season2 });
  };
  render() {
    return (
      <div className="app">
        <Header
          countLike={this.state.countLike}
          OnVikingsSeasonS2ClickChange={this.OnVikingsSeasonS2ClickChange}
          OnVikingsSeasonS1ClickChange={this.OnVikingsSeasonS1ClickChange}
          OnSearchClick={this.OnSearchClick}
          OnSearchDeClick={this.OnSearchDeClick}
          OnGOTSeasonS2ClickChange={this.OnGOTSeasonS2ClickChange}
          OnGOTSeasonS1ClickChange={this.OnGOTSeasonS1ClickChange}
          MovieChoseClick1={this.MovieChoseClick1}
          MovieChoseClick2={this.MovieChoseClick2}
          logo={this.state.logo}
          chosen={this.state.chosen}
          clicked={this.state.clicked}
          searchField={this.state.searchField}
        />
        <Main
          OnLike={this.OnLike}
          OnLiked={this.OnLiked}
          stateSlides={this.state.stateSlides}
          stateContent={this.state.stateContent}
          sliderDiv={this.state.sliderDiv}
          likedContent={this.state.likedContent}
          addImage={addImage}
          addVideo={addVideo}
          addStory={addStory}
          newTextInTextAreaImage={newTextInTextAreaImage}
          newTextInTextAreaVideo={newTextInTextAreaVideo}
          newTextInTextAreaName={newTextInTextAreaName}
          newTextInTextAreaDescription={newTextInTextAreaDescription}
          newTextInTextAreaStory={newTextInTextAreaStory}
          OnCloseButtonClick={this.OnCloseButtonClick}
          arreyPass={this.state.arreyPass}
          OnClearAllClick={this.OnClearAllClick}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
