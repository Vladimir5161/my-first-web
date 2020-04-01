import React from "react";
import "./AddContent.css";
import { connect } from "react-redux";
import AddContentFilter from "./AddContentFilter";
import AddContentReduxForm from "../../../../Form-Controls/AddContentReduxForm";
import {
    onDeClickFilterButton,
    onClickFilterButton,
    onFilterImageClick,
    onFilterVideoClick,
    onFilterStoryClick
} from "../../../../../store/AddContentReducer";
import { addContent } from "../../../../../store/DataReducer";

const AddContent = ({
    addContentClassName,
    onClickFilterButton,
    onDeClickFilterButton,
    clicked,
    filterContentClassName,
    movie,
    season,
    contentType,
    onFilterImageClick,
    onFilterVideoClick,
    onFilterStoryClick,
    addContent,
    arrey,
    addContentSecondText,
    isAuth,
    isFetching
}) => {
    let onSubmit = formData => {
        addContent(
            movie,
            season,
            formData.addImage,
            formData.addVideo,
            formData.addVideoName,
            formData.addStory,
            formData.addStoryText,
            formData.addStoryImage,
            contentType
        );
    };
    return (
        <div className="filterAddContent">
            <AddContentFilter
                addContentClassName={addContentClassName}
                onClickFilterButton={onClickFilterButton}
                onDeClickFilterButton={onDeClickFilterButton}
                clicked={clicked}
                filterContentClassName={filterContentClassName}
                onFilterImageClick={onFilterImageClick}
                onFilterVideoClick={onFilterVideoClick}
                onFilterStoryClick={onFilterStoryClick}
                addContentSecondText={addContentSecondText}
                isAuth={isAuth}
            />
            <AddContentReduxForm
                contentType={contentType}
                onSubmit={onSubmit}
                arrey={arrey}
                isFetching={isFetching}
            />
        </div>
    );
};

const mapStateToProps = state => ({
    arrey: state.Data.Data,
    contentType: state.AddContent.contentType,
    isAuth: state.auth.isAuth,
    addContentClassName: state.AddContent.addContentClassName,
    clicked: state.AddContent.clicked,
    filterContentClassName: state.AddContent.filterContentClassName,
    movie: state.movieChose1.movie,
    season: state.movieChose1.season,
    addContentSecondText: state.AddContent.addContentSecondText,
    isFetching: state.Data.isFetching
});

export default connect(mapStateToProps, {
    addContent,
    onClickFilterButton,
    onDeClickFilterButton,
    onFilterImageClick,
    onFilterVideoClick,
    onFilterStoryClick
})(AddContent);
