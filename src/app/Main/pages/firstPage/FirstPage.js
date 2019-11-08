import React from "react";

import "./FirstPage.css";
import ContentListVideo from "./contentVideo/ContentListVideo";
import ContentListImage from "./contentImage/ContentListImage";
import ContentListStory from "./contentStory/ContentListStory";
import ContentListAll from "./ContentListAll";
import { BrowserRouter, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

class FirstPage extends React.Component {
  state = {
    loadpath: "/"
  };
  OnClickPathChange = () => {
    this.setState(prevState => ({
      loadpath: (prevState.loadpath = "/ContentListAll")
    }));
  };
  render() {
    const { OnLike, OnLiked } = this.props;
    return (
      <div className="containerMain">
        <BrowserRouter>
          <div className="wrapper">
            <div className="introPage">
              <h2>Our Content</h2>
              <p>
                Here you can find photo, video, story or you can add your own
                content by clicking the button below
              </p>
            </div>
            <div className="addContent">
              <button className="Add-content">Add Content</button>
              <div className="filter">
                <ul>
                  <li>
                    <NavLink
                      to="/contentlistimage"
                      className="buttonFilter"
                      onClick={() => {
                        this.OnClickPathChange();
                      }}
                    >
                      Photo
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contentlistvideo"
                      className="buttonFilter"
                      onClick={() => {
                        this.OnClickPathChange();
                      }}
                    >
                      Video
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contentliststory"
                      className="buttonFilter"
                      onClick={() => {
                        this.OnClickPathChange();
                      }}
                    >
                      Stories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/ContentListAll"
                      className="buttonFilter"
                    >
                      All
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Products">
              <Route
                path="/ContentListVideo"
                render={props => (
                  <ContentListVideo
                    {...props}
                    OnLike={OnLike}
                    OnLiked={OnLiked}
                  />
                )}
              />
              <Route
                path="/ContentListImage"
                render={props => (
                  <ContentListImage
                    {...props}
                    OnLike={OnLike}
                    OnLiked={OnLiked}
                  />
                )}
              />
              <Route
                path="/ContentListStory"
                render={props => (
                  <ContentListStory
                    {...props}
                    OnLike={OnLike}
                    OnLiked={OnLiked}
                  />
                )}
              />
              <Route
                path="/ContentListAll"
                isExact
                path={this.state.loadpath}
                render={props => (
                  <ContentListAll
                    {...props}
                    OnLike={OnLike}
                    OnLiked={OnLiked}
                  />
                )}
              />
              <button className="Add-content LoadMore">Load More</button>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default FirstPage;
