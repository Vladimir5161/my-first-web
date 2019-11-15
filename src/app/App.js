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
    stateVideo: state.mainContent.season6.contentVideo,
    stateImage: state.mainContent.season6.contentImage,
    stateStory: state.mainContent.season6.contentStory
  };
  OnLiked = () => {
    this.setState(prevState => ({ countLike: prevState.countLike - 1 }));
  };
  OnLike = () => {
    this.setState(prevState => ({ countLike: prevState.countLike + 1 }));
  };
  OnSeasonS1ClickChange = () => {
    this.setState({ stateVideo: state.mainContent.season1.contentVideo });
    this.setState({ stateImage: state.mainContent.season1.contentImage });
    this.setState({ stateStory: state.mainContent.season1.contentStory });
  };
  OnSeasonS2ClickChange = () => {
    this.setState({ stateVideo: state.mainContent.season2.contentVideo });
    this.setState({ stateImage: state.mainContent.season2.contentImage });
    this.setState({ stateStory: state.mainContent.season2.contentStory });
  };
  OnSeasonS3ClickChange = () => {
    this.setState({ stateVideo: state.mainContent.season3.contentVideo });
    this.setState({ stateImage: state.mainContent.season3.contentImage });
    this.setState({ stateStory: state.mainContent.season3.contentStory });
  };
  OnSeasonS4ClickChange = () => {
    this.setState({ stateVideo: state.mainContent.season4.contentVideo });
    this.setState({ stateImage: state.mainContent.season4.contentImage });
    this.setState({ stateStory: state.mainContent.season4.contentStory });
  };
  OnSeasonS5ClickChange = () => {
    this.setState({ stateVideo: state.mainContent.season5.contentVideo });
    this.setState({ stateImage: state.mainContent.season5.contentImage });
    this.setState({ stateStory: state.mainContent.season5.contentStory });
  };
  OnSeasonS6ClickChange = () => {
    this.setState({ stateVideo: state.mainContent.season6.contentVideo });
    this.setState({ stateImage: state.mainContent.season6.contentImage });
    this.setState({ stateStory: state.mainContent.season6.contentStory });
  };
  render() {
    const { state } = this.props;
    return (
      <div>
        <Header
          countLike={this.state.countLike}
          state={state}
          OnSeasonS6ClickChange={this.OnSeasonS6ClickChange}
          OnSeasonS5ClickChange={this.OnSeasonS5ClickChange}
          OnSeasonS4ClickChange={this.OnSeasonS4ClickChange}
          OnSeasonS3ClickChange={this.OnSeasonS3ClickChange}
          OnSeasonS2ClickChange={this.OnSeasonS2ClickChange}
          OnSeasonS1ClickChange={this.OnSeasonS1ClickChange}
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
