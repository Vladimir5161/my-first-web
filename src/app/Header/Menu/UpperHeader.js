import React from "react";
import { connect } from "react-redux";
import "./UpperHeader.css";
import images from "../../../common/images.js";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

class UpperHeader extends React.Component {
    state = {
        colorArrow: images[5].arrowScroll
    };

    listenScrollEvent = () => {
        if (window.scrollY > 100 || window.scrollY < 2100) {
            this.setState({ colorArrow: images[5].arrowScroll });
        }
    };
    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent);
    }
    render() {
        const {
            countLike,
            OnVikingsS1,
            OnVikingsS2,
            OnGOTS1,
            OnGOTS2,
            OnMovieChose1,
            OnMovieChose2,
            logo,
            chosen,
            OnRulesClick,
            Season,
            onDefaultOpenedContentCount,
            keyAuth
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
                                <div className="headerBtn">Movies</div>
                                <ul className="MoviesSubMenu">
                                    <li
                                        onClick={() => {
                                            OnMovieChose1();
                                            onDefaultOpenedContentCount();
                                        }}
                                        className="headerBtn"
                                    >
                                        Game of Thrones
                                    </li>
                                    <li
                                        onClick={() => {
                                            OnMovieChose2();
                                            onDefaultOpenedContentCount();
                                        }}
                                        className="headerBtn"
                                    >
                                        Vikings
                                    </li>
                                </ul>
                            </Link>
                        </li>
                        <li className="menuPoints">
                            <div className="headerBtn">Content</div>
                            <ul className="contentSubMenu">
                                {chosen ? (
                                    <div>
                                        <Link to="/">
                                            <li
                                                onClick={() => {
                                                    OnGOTS1();
                                                    onDefaultOpenedContentCount();
                                                }}
                                                className="headerBtn"
                                            >
                                                Season 1-4
                                            </li>
                                            <li
                                                onClick={() => {
                                                    OnGOTS2();
                                                    onDefaultOpenedContentCount();
                                                }}
                                                className="headerBtn"
                                            >
                                                {Season}
                                            </li>
                                        </Link>
                                    </div>
                                ) : (
                                    <div>
                                        <Link to="/">
                                            <li
                                                onClick={() => {
                                                    OnVikingsS1();
                                                    onDefaultOpenedContentCount();
                                                }}
                                                className="headerBtn"
                                            >
                                                Season 1-4
                                            </li>
                                            <li
                                                onClick={() => {
                                                    OnVikingsS2();
                                                    onDefaultOpenedContentCount();
                                                }}
                                                className="headerBtn"
                                            >
                                                {Season}
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
                        <li
                            className="menuPoints"
                            onClick={() => {
                                OnRulesClick();
                            }}
                        >
                            <AnchorLink className="menuPointsLinks" href="#">
                                Rules&FAQ
                            </AnchorLink>
                        </li>
                    </ul>
                </nav>
                <div className="loginArea">
                    {this.props.isAuth ? (
                        <button
                            className="headerBtn"
                            onClick={() => {
                                this.props.LogOut(keyAuth);
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
                {window.scrollY > 100 ? (
                    <div className="scroll">
                        <AnchorLink className="arrowScroll" href="#home">
                            <img src={this.state.colorArrow} alt="" />
                        </AnchorLink>
                    </div>
                ) : null}
            </div>
        );
    }
}
const mapStateToProps = store => ({
    logo: store.movieChose1.logo,
    chosen: store.movieChose1.chosen,
    Season: store.movieChose1.Season
});
const mapDispatchToProps = dispatch => ({
    OnMovieChose1: () =>
        dispatch({
            type: "MOVIEGROUP1CLICK"
        }),
    OnMovieChose2: () =>
        dispatch({
            type: "MOVIEGROUP2CLICK"
        }),
    OnVikingsS1: () =>
        dispatch({
            type: "VIKINGSSEASON1"
        }),
    OnVikingsS2: () =>
        dispatch({
            type: "VIKINGSSEASON2"
        }),
    OnGOTS1: () =>
        dispatch({
            type: "GOTSEASON1"
        }),
    OnGOTS2: () =>
        dispatch({
            type: "GOTSEASON2"
        }),
    OnRulesClick: () =>
        dispatch({
            type: "ONRULESCLICK"
        }),
    onDefaultOpenedContentCount: () =>
        dispatch({
            /* обнюляю колличество открытых фото, видео и т.д. до изначальных значений (3 фото, 2 видео, 2 истории)*/
            type: "ONDEFAULTCOUNTS"
        })
});

export default connect(mapStateToProps, mapDispatchToProps)(UpperHeader);
