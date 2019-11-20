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
    chosen: false
  };
  OnLiked = () => {
    this.setState(prevState => ({ countLike: prevState.countLike - 1 }));
  };
  OnLike = () => {
    this.setState(prevState => ({ countLike: prevState.countLike + 1 }));
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
          stateSlides={this.state.stateSlides}
          OnVikingsSeasonS2ClickChange={this.OnVikingsSeasonS2ClickChange}
          OnVikingsSeasonS1ClickChange={this.OnVikingsSeasonS1ClickChange}
          OnGOTSeasonS2ClickChange={this.OnGOTSeasonS2ClickChange}
          OnGOTSeasonS1ClickChange={this.OnGOTSeasonS1ClickChange}
          MovieChoseClick1={this.MovieChoseClick1}
          MovieChoseClick2={this.MovieChoseClick2}
          logo={this.state.logo}
          chosen={this.state.chosen}
        />
        <Main
          OnLike={this.OnLike}
          OnLiked={this.OnLiked}
          stateContent={this.state.stateContent}
          stateImage={this.state.stateImage}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
