import React from "react";

import "./UpperHeader.css";
import images from "../../../common/images.js";

class UpperHeader extends React.Component {
  state = {
    searchField: "searchField",
    clicked: false
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
  render() {
    const { countLike } = this.props;
    return (
      <div className="upperheader">
        <div className="logo">
          <img src={images[0].logo} alt="" className="logoImage" />
        </div>
        <nav className="menu">
          <ul className="navigationMenu">
            <li className="menuPoints">
              <a href="#">Home</a>
            </li>
            <li className="menuPoints">
              <a href="#">About Us</a>
            </li>
            <li className="menuPoints">
              <a href="#">Photos</a>
            </li>
            <li className="menuPoints">
              <a href="#">Vikings History</a>
            </li>
            <li className="menuPoints">
              <a href="#">Vikings Characters</a>
            </li>
            <li className="menuPoints">
              <a href="#">Contacts</a>
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
      </div>
    );
  }
}

export default UpperHeader;
