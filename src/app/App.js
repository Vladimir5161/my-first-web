import React from "react";
import { omit } from "lodash";
import "../common/reset.css";
import "../common/base.css";
import Data from "../redux/vikingsData";
import {
  addImage,
  addVideo,
  addStory,
  newTextImage,
  newTextVideo,
  newTextVideoName,
  newTextVideoDescription,
  newTextStoryText,
  newTextStoryImage,
  newTextStoryName
} from "../redux/vikingsData";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";

class App extends React.Component {
  state = {
    countLike: 0,
    stateContent: Data.vikingsData,
    logo: "../../images/logo.png",
    stateSlides: Data.vikingsSlides,
    chosen: false,
    searchField: "searchField",
    sliderDiv: "sliderDiv",
    wayVIdeo: item => item.filter,
    wayImage: item => item.movieVikingsSeason1Image,
    wayStory: item => item.movieVikingsSeason1Story,
    filterWay: true,
    filterWay1: false,
    filterWay2: false,
    filterWay3: false
  };
  OnSearchClick = () => {
    this.setState(prevState => ({
      searchField: (prevState.searchField = "searchFieldActive")
    }));
  };
  OnSearchDeClick = () => {
    this.setState(prevState => ({
      searchField: (prevState.searchField = "searchField")
    }));
  };
  OnLike = contentId => {
    this.setState(prevState => ({ countLike: prevState.countLike + 1 }));
  };
  OnLiked = contentId => {
    this.setState(prevState => ({ countLike: prevState.countLike - 1 }));
  };
  OnClearAllClick = () => {
    this.setState({ countLike: 0 });
    this.setState({
      likedContent: [],
      likedContentState: []
    });
  };
  OnCloseButtonClick = contentId => {
    this.setState(prevState => ({ countLike: prevState.countLike - 1 }));
    // this.setState(prevState => {
    //   let prevLikedContent = { ...prevState.likedContent };
    //   return {
    //     likedContent: omit(prevLikedContent, [contentId])
    //   };
    // });
    // this.setState(prevState => {
    //   let prevlikedContentState = { ...prevState.likedContentState };
    //   return {
    //     likedContentState: omit(prevlikedContentState, [contentId])
    //   };
    // });
  };
  MovieChoseClick1 = () => {
    this.setState({ chosen: true });
    this.setState({ stateSlides: Data.GOTSlides });
    this.setState({ logo: "../../images/got.png" });
    this.setState({ stateContent: Data.vikingsData });
    this.setState({ wayStory: item => item.movieGoTSeason1Story });
    this.setState({ wayVIdeo: item => item.movieGoTSeason1Video });
    this.setState({ wayImage: item => item.movieGoTSeason1Image });
    this.setState({ filterWay: true });
    this.setState({ filterWay1: false });
    this.setState({ filterWay2: false });
    this.setState({ filterWay3: false });
  };
  MovieChoseClick2 = () => {
    this.setState({ chosen: false });
    this.setState({ stateSlides: Data.vikingsSlides });
    this.setState({ logo: "../../images/logo.png" });
    this.setState({ stateContent: Data.vikingsData });
    this.setState({ wayStory: item => item.movieVikingsSeason1Story });
    this.setState({ wayVIdeo: item => item.movieVikingsSeason1Video });
    this.setState({ wayImage: item => item.movieVikingsSeason1Image });
    this.setState({ filterWay: false });
    this.setState({ filterWay1: false });
    this.setState({ filterWay2: true });
    this.setState({ filterWay3: false });
  };
  OnVikingsSeasonS1ClickChange = () => {
    this.setState({ stateContent: Data.vikingsData });
    this.setState({ stateImage: Data.vikingsData });
    this.setState({ wayStory: item => item.movieVikingsSeason1Story });
    this.setState({ wayVIdeo: item => item.movieVikingsSeason1Video });
    this.setState({ wayImage: item => item.movieVikingsSeason1Image });
    this.setState({ filterWay: true });
    this.setState({ filterWay1: false });
    this.setState({ filterWay2: false });
    this.setState({ filterWay3: false });
  };
  OnVikingsSeasonS2ClickChange = () => {
    this.setState({ stateContent: Data.vikingsData });
    this.setState({ wayStory: item => item.movieVikingsSeason2Story });
    this.setState({ wayVIdeo: item => item.movieVikingsSeason2Video });
    this.setState({ wayImage: item => item.movieVikingsSeason2Image });
    this.setState({ filterWay: false });
    this.setState({ filterWay1: true });
    this.setState({ filterWay2: false });
    this.setState({ filterWay3: false });
  };
  OnGOTSeasonS1ClickChange = () => {
    this.setState({ stateContent: Data.vikingsData });
    this.setState({ wayStory: item => item.movieGoTSeason1Story });
    this.setState({ wayVIdeo: item => item.movieGoTSeason1Video });
    this.setState({ wayImage: item => item.movieGoTSeason1Image });
    this.setState({ filterWay: false });
    this.setState({ filterWay1: false });
    this.setState({ filterWay2: true });
    this.setState({ filterWay3: false });
  };
  OnGOTSeasonS2ClickChange = () => {
    this.setState({ stateContent: Data.vikingsData });
    this.setState({ wayStory: item => item.movieGoTSeason2Story });
    this.setState({ wayVIdeo: item => item.movieGoTSeason2Video });
    this.setState({ wayImage: item => item.movieGoTSeason2Image });
    this.setState({ filterWay: false });
    this.setState({ filterWay1: false });
    this.setState({ filterWay2: false });
    this.setState({ filterWay3: true });
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
          searchField={this.state.searchField}
        />
        <Main
          OnLike={this.OnLike}
          OnLiked={this.OnLiked}
          stateSlides={this.state.stateSlides}
          stateContent={this.state.stateContent}
          sliderDiv={this.state.sliderDiv}
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
          OnCloseButtonClick={this.OnCloseButtonClick}
          OnClearAllClick={this.OnClearAllClick}
          chosen={this.state.chosen}
          wayVIdeo={this.state.wayVIdeo}
          wayImage={this.state.wayImage}
          wayStory={this.state.wayStory}
          filterWay={this.state.filterWay}
          filterWay1={this.state.filterWay1}
          filterWay2={this.state.filterWay2}
          filterWay3={this.state.filterWay3}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
