import React from "react";

import "../common/reset.css";
import "../common/base.css";
import state from "../redux/state";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";

class App extends React.Component {
  state = {
    countLike: 0,
    stateVideo: state.vikings.season1.contentVideo,
    stateImage: state.vikings.season1.contentImage,
    stateStory: state.vikings.season1.contentStory,
    logo: "../../images/logo.png",
    stateSlides: state.slides.vikingsSlides,
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
    this.setState({ stateSlides: state.slides.GOTSlides });
    this.setState({ logo: "../../images/got.png" });
    this.setState({ stateVideo: state.GOT.season1.contentVideo });
    this.setState({ stateImage: state.GOT.season1.contentImage });
    this.setState({ stateStory: state.GOT.season1.contentStory });
  };
  MovieChoseClick2 = () => {
    this.setState({ chosen: false });
    this.setState({ stateSlides: state.slides.vikingsSlides });
    this.setState({ logo: "../../images/logo.png" });
    this.setState({ stateVideo: state.vikings.season1.contentVideo });
    this.setState({ stateImage: state.vikings.season1.contentImage });
    this.setState({ stateStory: state.vikings.season1.contentStory });
  };
  OnVikingsSeasonS1ClickChange = () => {
    this.setState({ stateVideo: state.vikings.season1.contentVideo });
    this.setState({ stateImage: state.vikings.season1.contentImage });
    this.setState({ stateStory: state.vikings.season1.contentStory });
  };
  OnVikingsSeasonS2ClickChange = () => {
    this.setState({ stateVideo: state.vikings.season2.contentVideo });
    this.setState({ stateImage: state.vikings.season2.contentImage });
    this.setState({ stateStory: state.vikings.season2.contentStory });
  };
  OnGOTSeasonS1ClickChange = () => {
    this.setState({ stateVideo: state.GOT.season1.contentVideo });
    this.setState({ stateImage: state.GOT.season1.contentImage });
    this.setState({ stateStory: state.GOT.season1.contentStory });
  };
  OnGOTSeasonS2ClickChange = () => {
    this.setState({ stateVideo: state.GOT.season2.contentVideo });
    this.setState({ stateImage: state.GOT.season2.contentImage });
    this.setState({ stateStory: state.GOT.season2.contentStory });
  };
  render() {
    const {} = this.props;
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
          stateVideo={this.state.stateVideo}
          stateImage={this.state.stateImage}
          stateStory={this.state.stateStory}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
