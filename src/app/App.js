import React from "react";

import "../common/reset.css";
import "../common/base.css";

import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";

class App extends React.Component {
  state = {
    countLike: 0
  };
  OnLiked = () => {
    this.setState(prevState => ({ countLike: prevState.countLike - 1 }));
  };
  OnLike = () => {
    this.setState(prevState => ({ countLike: prevState.countLike + 1 }));
  };
  render() {
    return (
      <div>
        <Header countLike={this.state.countLike} />
        <Main OnLike={this.OnLike} OnLiked={this.OnLiked} />
        <Footer />
      </div>
    );
  }
}

export default App;
