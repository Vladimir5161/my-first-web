import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { newsDataIdSelector } from "../../../selectors/exactContent-selectors";
import Preloader from "../../CommonComonents/Preloader";
import { updateNewsThunk } from "../../../../store/newsDataReducer";
import EditNewsReduxForm from "../../../Form-Controls/EditNewsReduxForm";
import { initializeNewsThunk } from "../../../../store/InitializeReducer";

const ExactNewsPage = ({
    match,
    newsData,
    initializedNews,
    isAuth,
    updateNewsThunk,
    movie,
    initializeNewsThunk,
}) => {
    let [editnews, changeEditnews] = useState(false);
    let EditNews = () => {
        changeEditnews(true);
    };
    useEffect(() => {
        const render = () => {
            initializeNewsThunk();
        };
        render();
    }, [initializeNewsThunk]);
    const onSubmit = (formData) => {
        updateNewsThunk(
            formData.data,
            formData.newsName,
            formData.newsText,
            formData.newsImage,
            match.params.id,
            newsData[match.params.id].keyFirebase,
            movie
        ).then(() => changeEditnews(false));
    };
    return initializedNews ? (
        <div className="containerMain">
            <div className="newsStateExact">
                {editnews ? (
                    <EditNewsReduxForm
                        initialValues={newsData[match.params.id]}
                        match={match}
                        newsData={newsData}
                        onSubmit={onSubmit}
                    />
                ) : (
                    <ExactNews
                        match={match}
                        newsData={newsData}
                        isAuth={isAuth}
                        EditNews={EditNews}
                    />
                )}
            </div>
        </div>
    ) : (
        <Preloader />
    );
};

const ExactNewsFr = ({ match, newsData, isAuth, EditNews, ...props }) => {
    return (
        <div>
            <h3 className="ExactNewsName">
                {newsData[match.params.id].newsName}
            </h3>
            <div className="ButtonGoBackDiv">
                <button
                    className="ButtonGoBack"
                    onClick={() => props.history.goBack()}
                ></button>
            </div>
            <div className="newsTimeData">
                <div>{newsData[match.params.id].data}</div>
            </div>
            {isAuth ? (
                <button
                    className="saveContentButton"
                    onClick={() => {
                        EditNews();
                    }}
                >
                    Edit
                </button>
            ) : null}
            <div className="ExactNews">
                <img
                    className="ExactNewsImage"
                    src={newsData[match.params.id].newsImage}
                    alt=""
                />
                <div className="ExactNewsText">
                    {newsData[match.params.id].newsText}
                </div>
            </div>
        </div>
    );
};
const ExactNews = withRouter(ExactNewsFr);

const mapStateToProps = (state) => ({
    newsData: newsDataIdSelector(state),
    initializedNews: state.initializeApp.initializedNews,
    isAuth: state.auth.isAuth,
    movie: state.movieChose1.movie,
});

export default connect(mapStateToProps, {
    updateNewsThunk,
    initializeNewsThunk,
})(ExactNewsPage);
