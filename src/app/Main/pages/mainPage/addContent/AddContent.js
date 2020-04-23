import React, { useContext } from "react";
import "./AddContent.css";
import { connect } from "react-redux";
import AddContentFilter from "./AddContentFilter";
import AddContentReduxForm from "../../../../Form-Controls/AddContentReduxForm";
import {
    onFilterImageClick,
    onFilterVideoClick,
    onFilterStoryClick,
} from "../../../../../store/AddContentReducer";
import { addContent } from "../../../../../store/DataReducer";
import { ContentContext } from "../ContentContext";

const AddContent = React.memo(
    ({
        filterContentClassName,
        onFilterImageClick,
        onFilterVideoClick,
        onFilterStoryClick,
        addContent,
    }) => {
        let {
            movie,
            season,
            DataArrey,
            isFetching,
            clicked,
            onDeClickFilterButton,
            onClickFilterButton,
            isAuth,
            addContentSecondText,
            addContentClassName,
            contentType,
        } = useContext(ContentContext);
        let onSubmit = (formData) => {
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
                    arrey={DataArrey}
                    isFetching={isFetching}
                />
            </div>
        );
    }
);

const mapStateToProps = (state) => ({
    filterContentClassName: state.AddContent.filterContentClassName,
});

export default connect(mapStateToProps, {
    addContent,
    onFilterImageClick,
    onFilterVideoClick,
    onFilterStoryClick,
})(AddContent);
