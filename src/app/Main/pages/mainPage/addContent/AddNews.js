import React from "react";
import "./AddContent.css";
import { connect } from "react-redux";
import AddNewsReduxFrom from "../../../../Form-Controls/AddNewsReduxForm";
import { addNews } from "../../../../../store/newsDataReducer";

const AddNews = ({ addNews }) => {
    let onSubmit = formData => {
        addNews(
            formData.addNewsName,
            formData.addNewsText,
            formData.addNewsImage
        );
    };
    return <AddNewsReduxFrom onSubmit={onSubmit} />;
};

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {
    addNews
})(AddNews);
