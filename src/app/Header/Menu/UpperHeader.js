import React from "react";

import "./UpperHeader.css";
import images from "../../../common/images.js";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

class UpperHeader extends React.Component {
  state = {
    colorArrow: images[5].arrowScroll
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
    const {
      countLike,
      OnVikingsSeasonS2ClickChange,
      OnGOTSeasonS1ClickChange,
      OnVikingsSeasonS1ClickChange,
      OnGOTSeasonS2ClickChange,
      OnSearchClick,
      OnSearchDeClick,
      MovieChoseClick1,
      MovieChoseClick2,
      clicked,
      logo,
      chosen
    } = this.props;
    return (
      <div className="upperheader" id="home">
        <div className="logo">
          <img src={logo} alt="" className="logoImage" />
        </div>
        <nav className="menu">
          <ul className="navigationMenu">
            <li className="menuPoints">
              <a className="menuPointsLinks" href="/">
                Home
              </a>
            </li>
            <li className="menuPoints">
              <Link to="/">
                <div className="contentMenu">Movies</div>
                <ul className="MoviesSubMenu">
                  <li
                    onClick={() => {
                      MovieChoseClick1();
                    }}
                    className="movie"
                  >
                    Game of Thrones
                  </li>
                  <li
                    onClick={() => {
                      MovieChoseClick2();
                    }}
                    className="movie"
                  >
                    Vikings
                  </li>
                </ul>
              </Link>
            </li>
            <li className="menuPoints">
              <div className="contentMenu">Content</div>
              <ul className="contentSubMenu">
                {chosen ? (
                  <div>
                    <Link to="/">
                      <li
                        onClick={() => {
                          OnGOTSeasonS1ClickChange();
                        }}
                        className="season"
                      >
                        Season 1
                      </li>
                      <li
                        onClick={() => {
                          OnGOTSeasonS2ClickChange();
                        }}
                        className="season"
                      >
                        Season 2
                      </li>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link to="/">
                      <li
                        onClick={() => {
                          OnVikingsSeasonS1ClickChange();
                        }}
                        className="season"
                      >
                        Season 1
                      </li>
                      <li
                        onClick={() => {
                          OnVikingsSeasonS2ClickChange();
                        }}
                        className="season"
                      >
                        Season 2
                      </li>
                    </Link>
                  </div>
                )}
              </ul>
            </li>
            <li className="menuPoints">
              <Link to="/news" className="menuPointsLinks">
                News
              </Link>
            </li>
            <li className="menuPoints">
              <AnchorLink className="menuPointsLinks" href="#info">
                Rules&FAQ
              </AnchorLink>
            </li>
          </ul>
        </nav>
        <div className="searcharea">
          <button className="cart">
            <Link to="/likedContentPage">
              <div className="countLike">{countLike}</div>
            </Link>
          </button>
          {clicked ? (
            <button
              className="search"
              onClick={() => {
                OnSearchDeClick();
              }}
            ></button>
          ) : (
            <button
              className="search"
              onClick={() => {
                OnSearchClick();
              }}
            ></button>
          )}
        </div>
        <div className="scroll">
          <AnchorLink className="arrowScroll" href="#home">
            <img src={this.state.colorArrow} alt="" />
          </AnchorLink>
        </div>
      </div>
    );
  }
}

export default UpperHeader;
