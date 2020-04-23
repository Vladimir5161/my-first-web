import React from "react";
import "./Main.css";
import { Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage.js";
import LikedPage from "./pages/LikedContentPage/LikedPage";
import ReactSlider from "./pages/slider/ReactSlider.js";
import NewsList from "./pages/news/NewsList";
import ExactNewsPage from "./pages/news/ExactNewsPage";
import ExactContentPage from "./pages/mainPage/itemComponents/ExactContentPage";
import { ContentContext } from "./pages/mainPage/ContentContext";
import {
    onClickFilterButton,
    onDeClickFilterButton,
} from "../../store/AddContentReducer";
import { getLikedContent } from "../../store/contentLikeReducer";
import Login from "./pages/Login/Login";
import CreateAccount from "./pages/Login/CreateAccount";
import { connect } from "react-redux";
import {
    ShowMore,
    getContents,
    deleteContent,
    getSlides,
} from "../../store/DataReducer";

const Main = ({
    images,
    stories,
    DataArrey,
    initialized,
    editMode,
    isFetching,
    season,
    videos,
    movie,
    ShowMore,
    getContents,
    deleteContent,
    getSlides,
    isAuth,
    itemsCountStory,
    clicked,
    addContentClassName,
    addContentSecondText,
    onDeClickFilterButton,
    onClickFilterButton,
    contentType,
    IdArrey,
    getLikedContent,
}) => {
    return (
        <ContentContext.Provider
            value={{
                images,
                stories,
                DataArrey,
                initialized,
                editMode,
                isFetching,
                season,
                videos,
                movie,
                ShowMore,
                getContents,
                deleteContent,
                isAuth,
                itemsCountStory,
                clicked,
                addContentClassName,
                addContentSecondText,
                onDeClickFilterButton,
                onClickFilterButton,
                contentType,
                getLikedContent,
                IdArrey,
            }}
        >
            <main className="main">
                <div className="container">
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <div>
                                <ReactSlider />
                                <MainPage getSlides={getSlides} />
                            </div>
                        )}
                    />
                    <Route path="/news" exact render={() => <NewsList />} />
                    <Route
                        path="/likedContentPage"
                        exact
                        render={() => <LikedPage />}
                    />
                    <Route path="/news/:id" exact component={ExactNewsPage} />
                    <Route
                        path="/content/:id"
                        exact
                        component={ExactContentPage}
                    />
                    <Route path="/login" exact component={Login} />
                    <Route
                        path="/createAccount"
                        exact
                        component={CreateAccount}
                    />
                </div>
            </main>
        </ContentContext.Provider>
    );
};

const mapStateToProps = (state) => ({
    IdArrey: state.likedContent.IdArrey,
    images: state.filter.images,
    stories: state.filter.stories,
    DataArrey: state.Data,
    initialized: state.initializeApp.initialized,
    editMode: state.AddContent.editMode,
    isFetching: state.Data.isFetching,
    season: state.movieChose1.season,
    videos: state.filter.videos,
    movie: state.movieChose1.movie,
    isAuth: state.auth.isAuth,
    addContentSecondText: state.AddContent.addContentSecondText,
    itemsCountStory: state.Data.storiesCount,
    clicked: state.AddContent.clicked,
    addContentClassName: state.AddContent.addContentClassName,
    contentType: state.AddContent.contentType,
});

export default connect(mapStateToProps, {
    ShowMore,
    getContents,
    deleteContent,
    getSlides,
    onClickFilterButton,
    onDeClickFilterButton,
    getLikedContent,
})(Main);
