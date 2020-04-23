import React, { useEffect, useState } from "react";
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
import { initializeNewsThunk } from "../../../../store/InitializeReducer";
import Preloader from "../../CommonComonents/Preloader";
import { Auth } from "../../../../store/AuthReducer";
import AddNews from "../mainPage/addContent/AddNews";
import { getNewsArrey } from "../../../selectors/content-selectors";

const NewsList = React.memo(
    ({
        newsData,
        editModeNews,
        getNews,
        Auth,
        movie,
        getNewsArrey,
        initializeNewsThunk,
        initializedNews,
        ...props
    }) => {
        let newsLength = newsData.length;
        let [isData, changeisData] = useState(true);
        useEffect(() => {
            const rerender = () => {
                initializeNewsThunk();
            };
            rerender();
        }, [newsLength, initializeNewsThunk, initializedNews]);
        if (initializedNews === false) {
            return <Preloader />;
        } else if (newsLength === 0) {
            setTimeout(() => changeisData(false), 2000);
            return isData ? (
                <Preloader />
            ) : (
                <div>
                    <div
                        style={{
                            textAlign: "center",
                            fontSize: "30px",
                            color: "white",
                        }}
                    >
                        no data
                    </div>
                    {props.isAuth ? (
                        <div>
                            <h1 className="h1">News</h1>
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
                        </div>
                    ) : null}
                    {props.clickedNewsButton ? <AddNews movie={movie} /> : null}
                </div>
            );
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
                            onClick={
                                props.clickedNewsButton
                                    ? () => {
                                          props.hideAddNews();
                                      }
                                    : () => {
                                          props.showAddNews();
                                      }
                            }
                        >
                            {props.clickedNewsButton
                                ? "Close Edit Mode"
                                : "Edit Mode"}
                        </button>
                    ) : null}
                    {props.clickedNewsButton ? <AddNews movie={movie} /> : null}
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
    }
);

const mapStateToProps = (state) => ({
    newsData: getNewsArrey(state),
    clickedNewsButton: state.newsData.clickedNewsButton,
    editModeNews: state.newsData.editModeNews,
    isAuth: state.auth.isAuth,
    isFetching: state.newsData.isFetching,
    movie: state.movieChose1.movie,
    initializedNews: state.initializeApp.initializedNews,
});

export default connect(mapStateToProps, {
    getNews,
    Auth,
    showAddNews,
    hideAddNews,
    deleteNewsThunk,
    initializeNewsThunk,
})(NewsList);
