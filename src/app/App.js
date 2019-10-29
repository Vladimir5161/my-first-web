import React from "react";

import "../common/reset.css";
import "../common/base.css";

import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
// import Footer from "/Footer/Footer.js";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
