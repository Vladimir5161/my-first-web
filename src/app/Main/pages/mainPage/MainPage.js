import React, { useEffect, useContext } from "react";
import "./MainPage.css";
import "./contentImage/contentImages.css";
import AddContent from "./addContent/AddContent";
import Filter from "./Filter";
import ContentImageContainer from "./contentImage/ContentImageContainer";
import ContentVideoContainer from "./contentVideo/ContentVideoContainer";
import ContentStoryContainer from "./contentStory/ContentStoryContainer";
import Preloader from "../../CommonComonents/Preloader";
import { ContentContext } from "./ContentContext";

const FirstPage = ({ getSlides }) => {
    let { movie, initialized } = useContext(ContentContext);
    useEffect(() => {
        const reloadSlides = () => {
            getSlides();
        };
        reloadSlides();
    }, [movie]);
    if (initialized === false) {
        return <Preloader />;
    }
    return (
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
    );
};

export default FirstPage;
