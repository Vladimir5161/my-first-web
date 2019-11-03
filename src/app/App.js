import React from "react";

import "../common/reset.css";
import "../common/base.css";

import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";

class App extends React.Component {
  state = {
    countLike: 0,
    like: "likedNo"
  };
  OnLikeClick = () => {
    this.setState(prevState => ({ like: (prevState.like = "liked") }));
    this.setState(prevState => ({ countLike: prevState.countLike + 1 }));
  };

  OnLikedClick = () => {
    this.setState(prevState => ({ like: (prevState.like = "likedNo") }));
  };

  render() {
    return (
      <div>
        <Header countLike={this.state.countLike} />
        <Main
          OnLikeClick={this.OnLikeClick}
          OnLikedClick={this.OnLikedClick}
          like={this.state.like}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
