import React from "react";
import "./News.css";
import NewsListItem from "./NewsListItem";
import { connect } from "react-redux";
import {
    getNews,
    showAddNews,
    hideAddNews,
    deleteNewsThunk
} from "../../../../store/newsDataReducer";
import Preloader from "../../CommonComonents/Preloader";
import { Auth } from "../../../../store/AuthReducer";
import AddNews from "../mainPage/addContent/AddNews";

class NewsList extends React.Component {
    rerender() {
        this.props.getNews();
        this.props.Auth();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.newsData.length !== prevProps.newsData.length) {
            debugger;
            this.rerender();
        }
    }

    render() {
        let { newsData, editModeNews } = this.props;
        console.log(this.props.newsData);
        if (newsData.length === 0) {
            return <Preloader />;
        }
        return (
            <div className="containerMain">
                <h1 className="h1">News</h1>
                {this.props.isAuth ? (
                    <button
                        className="filterButton"
                        onClick={() => {
                            this.props.clickedNewsButton
                                ? this.props.hideAddNews()
                                : this.props.showAddNews();
                        }}
                    >
                        Add News
                    </button>
                ) : null}
                {this.props.clickedNewsButton ? (
                    <AddNews onComponentChange={this.onComponentChange} />
                ) : null}
                {newsData.map(
                    ({
                        newsImage,
                        newsText,
                        id,
                        newsName,
                        data,
                        time,
                        keyFirebase
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
                                deleteNews={this.props.deleteNewsThunk}
                                keyFirebase={keyFirebase}
                                editModeClass="ButtonCloseImage-clickedEditBlack"
                            />
                        </div>
                    )
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    newsData: state.newsData.NewsData,
    clickedNewsButton: state.newsData.clickedNewsButton,
    editModeNews: state.newsData.editModeNews,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {
    getNews,
    Auth,
    showAddNews,
    hideAddNews,
    deleteNewsThunk
})(NewsList);
