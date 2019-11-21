import React from "react";

import "../common/reset.css";
import "../common/base.css";
import vikingsData from "../redux/vikingsData";
import gotData from "../redux/gotData";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";

class App extends React.Component {
  state = {
    countLike: 0,
    stateImage: vikingsData.season1.contentImage,
    stateContent: vikingsData.season1.content,
    logo: "../../images/logo.png",
    stateSlides: vikingsData.slides.vikingsSlides,
    chosen: false,
    searchField: "searchField",
    clicked: false,
    sliderDiv: "sliderDiv",
    likedContent: ""
  };
  OnClickLikesDefaultCount = () => {
    this.setState({ countLike: 0 });
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
  OnLiked = () => {
    this.setState(prevState => ({ countLike: prevState.countLike - 1 }));
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
  MovieChoseClick1 = () => {
    this.setState({ chosen: true });
    this.setState({ stateSlides: gotData.slides.GOTSlides });
    this.setState({ logo: "../../images/got.png" });
    this.setState({ stateContent: gotData.season1.content });
    this.setState({ stateImage: gotData.season1.contentImage });
  };
  MovieChoseClick2 = () => {
    this.setState({ chosen: false });
    this.setState({ stateSlides: vikingsData.slides.vikingsSlides });
    this.setState({ logo: "../../images/logo.png" });
    this.setState({ stateContent: vikingsData.season1.content });
    this.setState({ stateImage: vikingsData.season1.contentImage });
  };
  OnVikingsSeasonS1ClickChange = () => {
    this.setState({ stateContent: vikingsData.season1.content });
    this.setState({ stateImage: vikingsData.season1.contentImage });
  };
  OnVikingsSeasonS2ClickChange = () => {
    this.setState({ stateContent: vikingsData.season2.content });
    this.setState({ stateImage: vikingsData.season2.contentImage });
  };
  OnGOTSeasonS1ClickChange = () => {
    this.setState({ stateContent: gotData.season1.content });
    this.setState({ stateImage: gotData.season1.contentImage });
  };
  OnGOTSeasonS2ClickChange = () => {
    this.setState({ stateContent: gotData.season2.content });
    this.setState({ stateImage: gotData.season2.contentImage });
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
          stateImage={this.state.stateImage}
          sliderDiv={this.state.sliderDiv}
          OnClickLikesDefaultCount={this.OnClickLikesDefaultCount}
          likedContent={this.state.likedContent}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
