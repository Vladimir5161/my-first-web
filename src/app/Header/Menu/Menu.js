import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Menu.css";
import images from "../../../common/images.js";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { getCount } from "../../selectors/likedContentSelectors";
import {
    onDefaultOpenedContentCount,
    ErrorMessage,
} from "../../../store/DataReducer";
import {
    ContentChange,
    MovieGroup1Click,
    MovieGroup2Click,
} from "../../../store/movieChoseReduser";

const Menu = ({
    ContentChange,
    MovieGroup1Click,
    MovieGroup2Click,
    logo,
    chosen,
    Season,
    onDefaultOpenedContentCount,
    keyAuth,
    isAuth,
    countLike,
    LogOut,
}) => {
    let [colorArrow, changeColorArrow] = useState("");
    let [clicked, changeClick] = useState(false);
    let [clickedSeason, changeClickedSeason] = useState(false);

    useEffect(() => {
        let listener = () => {
            if (window.scrollY < 100 || window.scrollY > 3000) {
                changeColorArrow("");
            } else changeColorArrow(images[5].arrowScroll);
        };
        window.addEventListener("scroll", listener);
    }, [colorArrow]);
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
                        <div
                            className="headerBtn"
                            onClick={() =>
                                clicked
                                    ? changeClick(false)
                                    : (changeClick(true),
                                      changeClickedSeason(false))
                            }
                        >
                            Movies
                        </div>
                        <ul
                            className={
                                clicked
                                    ? "MoviesSubMenuClicked"
                                    : "MoviesSubMenu"
                            }
                        >
                            <AnchorLink href="#content">
                                <li
                                    onClick={() => {
                                        MovieGroup1Click();
                                        onDefaultOpenedContentCount();
                                        changeClick(false);
                                    }}
                                    className="headerBtn"
                                >
                                    Game of Thrones
                                </li>
                            </AnchorLink>
                            <AnchorLink href="#content">
                                <li
                                    onClick={() => {
                                        MovieGroup2Click();
                                        onDefaultOpenedContentCount();
                                        changeClick(false);
                                    }}
                                    className="headerBtn"
                                >
                                    Vikings
                                </li>
                            </AnchorLink>
                        </ul>
                    </li>
                    <li className="menuPoints">
                        <div
                            className="headerBtn"
                            onClick={() =>
                                clickedSeason
                                    ? changeClickedSeason(false)
                                    : (changeClick(false),
                                      changeClickedSeason(true))
                            }
                        >
                            Content
                        </div>
                        <ul
                            className={
                                clickedSeason
                                    ? "contentSubMenuClicked"
                                    : "contentSubMenu"
                            }
                        >
                            {chosen ? (
                                <div>
                                    <AnchorLink href="#content">
                                        <Link to="/">
                                            <li
                                                onClick={() => {
                                                    ContentChange("got", 1);
                                                    onDefaultOpenedContentCount();
                                                    changeClickedSeason(false);
                                                }}
                                                className="headerBtn"
                                            >
                                                Season 1-4
                                            </li>
                                            <li
                                                onClick={() => {
                                                    ContentChange("got", 2);
                                                    onDefaultOpenedContentCount();
                                                    changeClickedSeason(false);
                                                }}
                                                className="headerBtn"
                                            >
                                                {Season}
                                            </li>
                                        </Link>
                                    </AnchorLink>
                                </div>
                            ) : (
                                <div>
                                    <AnchorLink href="#content">
                                        <Link to="/">
                                            <li
                                                onClick={() => {
                                                    ContentChange("vikings", 1);
                                                    onDefaultOpenedContentCount();
                                                    changeClickedSeason(false);
                                                }}
                                                className="headerBtn"
                                            >
                                                Season 1-4
                                            </li>
                                            <li
                                                onClick={() => {
                                                    ContentChange("vikings", 2);
                                                    onDefaultOpenedContentCount();
                                                    changeClickedSeason(false);
                                                }}
                                                className="headerBtn"
                                            >
                                                {Season}
                                            </li>
                                        </Link>
                                    </AnchorLink>
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
                        <Link to="/info" className="menuPointsLinks">
                            <button className="menuPointsLinks">
                                About the page
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="loginArea">
                {isAuth ? (
                    <button
                        className="headerBtn"
                        onClick={() => {
                            LogOut(keyAuth);
                        }}
                    >
                        Log Out
                    </button>
                ) : (
                    <div className="loginBlock">
                        <Link to="/login">
                            <button className="headerBtn"> Login </button>
                        </Link>
                        <Link to="/createAccount">
                            <button className="headerBtn">
                                Create Account
                            </button>
                        </Link>
                    </div>
                )}
                <button className="cart">
                    <Link to="/likedContentPage">
                        <div className="countLike">{countLike}</div>
                    </Link>
                </button>
            </div>
            {window.scrollY > 0 ? (
                <div className="scroll">
                    <AnchorLink className="arrowScroll" href="#home">
                        <img src={colorArrow} alt="" />
                    </AnchorLink>
                </div>
            ) : null}
        </div>
    );
};
const mapStateToProps = (state) => ({
    logo: state.movieChose1.logo,
    chosen: state.movieChose1.chosen,
    Season: state.movieChose1.Season,
    countLike: getCount(state),
});

export default connect(mapStateToProps, {
    ContentChange,
    MovieGroup1Click,
    MovieGroup2Click,
    onDefaultOpenedContentCount,
    ErrorMessage,
})(Menu);
