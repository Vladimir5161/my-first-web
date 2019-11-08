import React from "react";

import "./UpperHeader.css";
import images from "../../../common/images.js";
import { BrowserRouter, Route } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

class UpperHeader extends React.Component {
  state = {
    searchField: "searchField",
    clicked: false,
    colorArrow: images[5].arrowScroll
  };
  OnSearchClick = () => {
    this.setState({ clicked: true });
    this.setState(prevState => ({
      searchField: (prevState.searchField = "searchFieldActive")
    }));
  };
  OnSearchDeClick = () => {
    this.setState({ clicked: false });
    this.setState(prevState => ({
      searchField: (prevState.searchField = "searchField")
    }));
  };
  listenScrollEvent = () => {
    if (window.scrollY > 10) {
      this.setState({ colorArrow: images[6].arrowBlackScroll });
    } else {
      this.setState({ colorArrow: images[5].arrowScroll });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    const { countLike } = this.props;
    return (
      <div className="upperheader" id="home">
        <BrowserRouter>
          <div className="logo">
            <img src={images[0].logo} alt="" className="logoImage" />
          </div>
          <nav className="menu">
            <ul className="navigationMenu">
              <li className="menuPoints">
                <a className="menuPointsLinks" href="/">
                  Home
                </a>
              </li>
              <li className="menuPoints">
                <AnchorLink className="menuPointsLinks" href="#about">
                  About Us
                </AnchorLink>
              </li>
              <li className="menuPoints">
                <AnchorLink className="menuPointsLinks" href="#content">
                  Content
                </AnchorLink>
              </li>
              <li className="menuPoints">
                <AnchorLink className="menuPointsLinks" href="#partners">
                  Out Partners
                </AnchorLink>
              </li>
              <li className="menuPoints">
                <AnchorLink className="menuPointsLinks" href="#info">
                  Rules&FAQ
                </AnchorLink>
              </li>
            </ul>
            <div className={this.state.searchField}>
              <input type="text" />
              <button className="searchButton">Search</button>
            </div>
          </nav>

          <div className="searcharea">
            <button className="cart">
              <div className="countLike">{countLike}</div>
            </button>
            {this.state.clicked ? (
              <button
                className="search"
                onClick={() => {
                  this.OnSearchDeClick();
                }}
              ></button>
            ) : (
              <button
                className="search"
                onClick={() => {
                  this.OnSearchClick();
                }}
              ></button>
            )}
          </div>
          <div className="scroll">
            <AnchorLink className="arrowScroll" href="#home">
              <img src={this.state.colorArrow} alt="" />
            </AnchorLink>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default UpperHeader;
