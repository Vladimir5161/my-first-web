import React from "react";

import "./FirstPage.css";

const FirstPage = () => {
  return (
    <div className="wrapper">
      <div className="App-body">
        <div className="pageIntro mainPageIntro">
          <h1 className="Intro mainIntro">
            <span>Our</span> Menu
          </h1>
          <p className="textIntro">
            Her you can find and choose the way of cooperation you need
          </p>
        </div>
        <div className="pageboxes">
          <div className="box">
            <div className="picture">
              <img src="" alt="" />
            </div>
            <h3>Support</h3>
            <p>Lorem ipsum is dummy lorem very dumy</p>
            <button className="knowMore">Know More</button>
          </div>
          <div className="box">
            <div className="picture">
              <img src="" alt="" />
            </div>
            <h3>Web security</h3>
            <p>Lorem ipsum is dummy you lorem very dumyL is </p>
            <button className="knowMore">Know More</button>
          </div>
          <div className="box">
            <div className="picture">
              <img src="" alt="" />
            </div>
            <h3>Tecnical support</h3>
            <p>Lorem ipsum is dummy lorem very yLorem ipsus </p>
            <button className="knowMore">Know More</button>
          </div>
          <div className="box">
            <div className="picture">
              <img src="" alt="" />
            </div>
            <h3>Web design</h3>
            <p>Lorem ipsum is dummy ry dumyLorem ipsum is </p>
            <button className="knowMore">Know More</button>
          </div>
        </div>
      </div>
      <div className="App-body2">
        <div className="mainPositions">
          <div className="pageIntro mainPageIntro">
            <h1 className="Intro mainIntro">
              <span>UFC Best</span> Fighters
            </h1>
            <p className="textIntro">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Maiores
              fuga provident Libero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
