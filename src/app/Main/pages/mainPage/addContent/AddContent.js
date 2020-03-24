import React from "react";
import "./AddContent.css";
import { connect } from "react-redux"
import AddContentFilter from "./AddContentFilter"
import AddContentReduxForm from "../../../../Form-Controls/AddContentReduxForm";
import {
  onPassCheckClick,
  onDeClickFilterButton,
  onClickFilterButton,
  onFilterImageClick,
  onFilterVideoClick,
  onFilterStoryClick,
} from "../../../../../store/AddContentReducer"
import { addContent } from "../../../../../store/DataReducer"

const AddContent = ({
  addContentClassName,
  onClickFilterButton,
  onDeClickFilterButton,
  clicked,
  passwordWindow,
  filterContentClassName,
  onPassCheckClick,
  movie,
  season,
  contentType,
  onFilterImageClick,
  onFilterVideoClick,
  onFilterStoryClick,
  userName,
  userPass,
  addContent,
  arrey,
}) => {
  let onSubmit = (formData) => {
    addContent(

      movie,
      season,
      formData.addImage,
      formData.addVideo,
      formData.addVideoName,
      formData.addVideoDescription,
      formData.addStory,
      formData.addStoryText,
      formData.addStoryImage,
      contentType

    )
  }
  return (
    <div className="filterAddContent">
      <AddContentFilter
        addContentClassName={addContentClassName}
        onClickFilterButton={onClickFilterButton}
        onDeClickFilterButton={onDeClickFilterButton}
        clicked={clicked}
        filterContentClassName={filterContentClassName}
        onPassCheckClick={onPassCheckClick}
        passwordWindow={passwordWindow}
        onFilterImageClick={onFilterImageClick}
        onFilterVideoClick={onFilterVideoClick}
        onFilterStoryClick={onFilterStoryClick}
        userName={userName}
        userPass={userPass}
      />
      <AddContentReduxForm
        contentType={contentType}
        onSubmit={onSubmit}
        arrey={arrey}
      />
    </div >
  );
}

const mapStateToProps = state => ({
  arrey: state.Data.Data,
  contentType: state.AddContent.contentType,
  addContentClassName: state.AddContent.addContentClassName,
  clicked: state.AddContent.clicked,
  filterContentClassName: state.AddContent.filterContentClassName,
  passwordWindow: state.Pass.passwordWindow,
  movie: state.movieChose1.movie,
  season: state.movieChose1.season,
  userName: state.AddContent.userName,
  userPass: state.AddContent.userPass
})


export default connect(mapStateToProps, {
  addContent,
  onPassCheckClick,
  onClickFilterButton,
  onDeClickFilterButton,
  onFilterImageClick,
  onFilterVideoClick,
  onFilterStoryClick,
})(AddContent);
