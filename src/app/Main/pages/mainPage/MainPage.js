import React from "react";
import "./MainPage.css";
import "./contentImage/contentImages.css";
import AddContent from "./addContent/AddContent";
import Filter from "./Filter";
import { ContentContext } from "./ContentContext";
import { connect } from "react-redux";
import {
    ShowMore,
    getContents,
    deleteContent
} from "../../../../store/DataReducer";
import ContentImageContainer from "./contentImage/ContentImageContainer";
import ContentVideoContainer from "./contentVideo/ContentVideoContainer";
import ContentStoryContainer from "./contentStory/ContentStoryContainer";
import Preloader from "../../CommonComonents/Preloader";

const FirstPage = ({
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
    deleteContent
}) => {
    if (initialized === false) {
        return <Preloader />;
    }
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
                deleteContent
            }}
        >
            <div className="containerMain">
                <div className="wrapper">
                    <div className="introPage">
                        <h2>Our Content</h2>
                    </div>
                    <div className="addContent">
                        <AddContent />
                        <Filter />
                    </div>
                    <div className="Products" id="content">
                        <ContentImageContainer />
                        <ContentVideoContainer />
                        <ContentStoryContainer />
                    </div>
                </div>
            </div>
        </ContentContext.Provider>
    );
};

const mapStateToProps = state => ({
    images: state.filter.images,
    stories: state.filter.stories,
    DataArrey: state.Data,
    initialized: state.initializeApp.initialized,
    editMode: state.AddContent.editMode,
    isFetching: state.Data.isFetching,
    season: state.movieChose1.season,
    videos: state.filter.videos,
    movie: state.movieChose1.movie
});

export default connect(mapStateToProps, {
    ShowMore,
    getContents,
    deleteContent
})(FirstPage);
