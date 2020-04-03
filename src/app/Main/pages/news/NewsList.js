import React, { useEffect } from "react";
import "./News.css";
import NewsListItem from "./NewsListItem";
import { NewsContext } from "./NewsContext";
import { connect } from "react-redux";
import {
    getNews,
    showAddNews,
    hideAddNews,
    deleteNewsThunk,
} from "../../../../store/newsDataReducer";
import Preloader from "../../CommonComonents/Preloader";
import { Auth } from "../../../../store/AuthReducer";
import AddNews from "../mainPage/addContent/AddNews";

const NewsList = ({ newsData, editModeNews, getNews, Auth, ...props }) => {
    let newsL = newsData.length;
    useEffect(() => {
        const rerender = () => {
            getNews();
            Auth();
        };
        rerender();
        console.log(1);
    }, [newsL, getNews, Auth]);

    if (newsData.length === 0) {
        return <Preloader />;
    }
    return (
        <NewsContext.Provider
            value={{
                deleteNews: props.deleteNewsThunk,
                isFetching: props.isFetching,
            }}
        >
            <div className="containerMain">
                <h1 className="h1">News</h1>
                {props.isAuth ? (
                    <button
                        className="filterButton"
                        onClick={() => {
                            props.clickedNewsButton
                                ? props.hideAddNews()
                                : props.showAddNews();
                        }}
                    >
                        Add News
                    </button>
                ) : null}
                {props.clickedNewsButton ? <AddNews /> : null}
                {newsData.map(
                    ({
                        newsImage,
                        newsText,
                        id,
                        newsName,
                        data,
                        time,
                        keyFirebase,
                    }) => (
                        <div key={id}>
                            <NewsListItem
                                newsImage={newsImage}
                                newsText={newsText}
                                newsName={newsName}
                                data={data}
                                time={time}
                                id={id}
                                editModeNews={editModeNews}
                                keyFirebase={keyFirebase}
                                editModeClass="ButtonCloseImage-clickedEditBlack"
                            />
                        </div>
                    )
                )}
            </div>
        </NewsContext.Provider>
    );
};

const mapStateToProps = (state) => ({
    newsData: state.newsData.NewsData,
    clickedNewsButton: state.newsData.clickedNewsButton,
    editModeNews: state.newsData.editModeNews,
    isAuth: state.auth.isAuth,
    isFetching: state.newsData.isFetching,
});

export default connect(mapStateToProps, {
    getNews,
    Auth,
    showAddNews,
    hideAddNews,
    deleteNewsThunk,
})(NewsList);
