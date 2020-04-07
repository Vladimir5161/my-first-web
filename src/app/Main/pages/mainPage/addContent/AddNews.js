import React from "react";
import "./AddContent.css";
import { connect } from "react-redux";
import AddNewsReduxFrom from "../../../../Form-Controls/AddNewsReduxForm";
import { addNews } from "../../../../../store/newsDataReducer";

const AddNews = ({ addNews, isFetching, movie }) => {
    let onSubmit = (formData) => {
        addNews(
            formData.addNewsName,
            formData.addNewsText,
            formData.addNewsImage,
            movie
        );
    };
    return <AddNewsReduxFrom onSubmit={onSubmit} isFetching={isFetching} />;
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isFetching: state.newsData.isFetching,
});

export default connect(mapStateToProps, {
    addNews,
})(AddNews);
