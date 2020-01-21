import React from "react";
import "./AddContent.css";
// import {  
//   addImage,
//   addVideo,
//   addStory,
//   newTextImage,
//   newTextVideo,
//   newTextVideoName,
//   newTextVideoDescription,
//   newTextStoryText,
//   newTextStoryImage,
//   newTextStoryName,
// } from "../../../../../redux/Data";
import { connect } from "react-redux"

const AddContent = ({
  filterWay,
  filterWay1,
  filterWay2,
  filterWay3,
  filterStory,
  filterImage,
  filterVideo,
  onFilterImageClick,
  onFilterStoryClick,
  onFilterVideoClick,
  addContent,
  onClickFilterButton,
  onDeClickFilterButton,
  clicked,
  filterContent,
  newTextImage,
  newTextStoryImage,
  newTextStoryName,
  newTextStory,
  newTextVideo,
  newTextVideoName,
  newTextVideoDescription,
  addImage,
  addStory,
  addVideo,
}) => {
    let newImage = React.createRef();
    let newVideo = React.createRef();
    let newVideoName = React.createRef();
    let newVideoDescription = React.createRef();
    let newStory = React.createRef();
    let newStoryImage = React.createRef();
    let newStoryName = React.createRef();

    let onTextChangeImage = newImage => {
      let TextImage = newImage.current.value;
      newTextImage(TextImage);
    };

    let onTextChangeVideo = newVideo => {
      let newText = newVideo.current.value;
      newTextVideo(newText);
    };
    let onTextChangeVideoName = newVideoName => {
      let newText = newVideoName.current.value;
      newTextVideoName(newText);
    };
    let onTextChangeVideoDescription = newVideoDescription => {
      let newText = newVideoDescription.current.value;
      newTextVideoDescription(newText);
    };
    let onTextChangeStory = newStory => {
      let newText = newStory.current.value;
      newTextStory(newText);
    };
    let onTextChangeStoryImage = newStoryImage => {
      let newText = newStoryImage.current.value;
      newTextStoryImage(newText);
    };
    let onTextChangeStoryName = newStoryName => {
      let newText = newStoryName.current.value;
      newTextStoryName(newText);
    };

    let pass = filterWay;
    let pass1 = filterWay1;
    let pass2 = filterWay2;
    let pass3 = filterWay3;
    let addNewImage = () => {
      let newImageAdd = newImage.current.value;

      addImage(newImageAdd, pass, pass1, pass2);
      newImage.current.value = "";
    };
    let addNewVideo = () => {
      let newVideoAdd = newVideo.current.value;
      let newVideoNameAdd = newVideoName.current.value;
      let newVideoDescriptionAdd = newVideoDescription.current.value;
      addVideo(
        newVideoAdd,
        newVideoNameAdd,
        newVideoDescriptionAdd,
        pass,
        pass1,
        pass2,
        pass3
      );
      newVideo.current.value = "";
      newVideoName.current.value = "";
      newVideoDescription.current.value = "";
    };
    let addNewStory = () => {
      let newImageAdd = newStoryImage.current.value;
      let newStoryAdd = newStory.current.value;
      let newStoryNameAdd = newStoryName.current.value;
      addStory(
        newStoryAdd,
        newStoryNameAdd,
        newImageAdd,
        pass,
        pass1,
        pass2,
        pass3
      );
      newStoryName.current.value = "";
      newStoryImage.current.value = "";
      newStory.current.value = "";
    };
    return (
      <div className="filterAddContent">
        <div className="filterButtonHover">
          {clicked ? (
            <button
              className="filterButton"
              onClick={() => {
                onDeClickFilterButton();
              }}
            >
              {" "}
              {addContent}
            </button>
          ) : (
            <button
              className="filterButton"
              onClick={() => {
                onClickFilterButton();
              }}
            >
              {" "}
              {addContent}
            </button>
          )}

          <ul className={filterContent}>
            <li
              onClick={() => {
                onFilterImageClick();
              }}
            >
              Add Image
            </li>
            <li
              onClick={() => {
                onFilterVideoClick();
              }}
            >
              Add Video
            </li>
            <li
              onClick={() => {
                onFilterStoryClick();
              }}
            >
              Add Story
            </li>
          </ul>
        </div>
        {filterImage ? (
          <div className="addContentTable">
            <div className="addContentH1">Input your link</div>
            <textarea
              type="text"
              className="inputImage"
              ref={newImage}
              onChange={() => {
                onTextChangeImage(newImage);
              }}
            ></textarea>
            <button
              className="Add-content"
              onClick={() => {
                addNewImage();
                onFilterImageClick();
              }}
            >
              Add Content
            </button>
          </div>
        ) : filterVideo ? (
          <div className="addContentTable">
            <div className="addContentH1">Input your link</div>
            <textarea
              type="text"
              className="inputImage"
              ref={newVideo}
              onChange={() => {
                onTextChangeVideo(newVideo);
              }}
            ></textarea>
            <div className="addContentH1">Input your Video Name</div>
            <textarea
              type="text"
              className="inputContent"
              ref={newVideoName}
              onChange={() => {
                onTextChangeVideoName(newVideoName);
              }}
            ></textarea>
            <div className="addContentH1">Input your description</div>
            <textarea
              type="text"
              className="inputContent"
              ref={newVideoDescription}
              onChange={() => {
                onTextChangeVideoDescription(newVideoDescription);
              }}
            ></textarea>
            <button
              className="Add-content"
              onClick={() => {
                addNewVideo();
                onFilterVideoClick();
              }}
            >
              Add Content
            </button>
          </div>
        ) : filterStory ? (
          <div className="addStory">
            <div className="addContentTable">
              <div className="addContentH1">Input your link</div>
              <textarea
                type="text"
                className="inputImage"
                ref={newStoryImage}
                onChange={() => {
                  onTextChangeStoryImage(newStoryImage);
                }}
              ></textarea>
              <div className="addContentH1">Input your Story Name</div>
              <textarea
                type="text"
                className="inputContent"
                ref={newStoryName}
                onChange={() => {
                  onTextChangeStoryName(newStoryName);
                }}
              ></textarea>
              <div className="addContentH1">Input your Story Text</div>
              <textarea
                type="text"
                className="inputContent"
                ref={newStory}
                onChange={() => {
                  onTextChangeStory(newStory);
                }}
              ></textarea>
              <button
                className="Add-content"
                onClick={() => {
                  addNewStory();
                  onFilterStoryClick();
                }}
              >
                Add Content
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }

const mapStateToProps = state => ({
  filterWay: state.movieChose1.filterWay,
  filterWay1: state.movieChose1.filterWay1,
  filterWay2: state.movieChose1.filterWay2,
  filterWay3: state.movieChose1.filterWay3,
  filterStory: state.AddContent.filterStory,
  filterVideo: state.AddContent.filterVideo,
  filterImage: state.AddContent.filterImage,
  addContent: state.AddContent.addContent,
  clicked: state.AddContent.clicked,
  filterContent: state.AddContent.filterContent,
})

const mapDispatchToProps = (dispatch) => ({
  onFilterImageClick: () =>dispatch({
    type: "ONFILTERIMAGECLICK",
  }),
  onFilterVideoClick: () =>dispatch({
    type: "ONFILTERVIDEOCLICK",
  }),
  onFilterStoryClick: () =>dispatch({
    type: "ONFILTERSTORYCLICK",
  }),
  onDeClickFilterButton: () =>dispatch({
    type: "ONDECLICKFILTERBUTTON",
  }),
  onClickFilterButton: () =>dispatch({
    type: "ONCLICKFILTERBUTTON",
  }),
  newTextStory: (action) =>dispatch({
    type: "NEWTEXTSTORYTEXT",
    TextStory: action,
  }),
  newTextStoryImage: (action) =>dispatch({
    type: "NEWTEXTSTORYIMAGE",
    TextStoryImage: action,
    }),
  newTextStoryName: (action) =>dispatch({
    type: "NEWTEXTSTORYNAME",
    TextStoryName: action,
  }),
  newTextImage: (action) => dispatch({
    type: "NEWTEXTIMAGE",
    TextImage : action,
  }),
  newTextVideo: (action) => dispatch({
    type: "NEWTEXTVEO",
    TextVideo: action,
  }),
  newTextVideoName: (action)=>dispatch({
    type: "NEWTEXTVIDEONAME",
    TextVideoName: action,
  }),
  newTextVideoDescription: (action)=>dispatch({
    type: "NEWTEXTVIDEODESCRIPTION",
    TextVideoDescription: action,
  }),
  addImage: (newImageAdd, pass, pass1, pass2)=>dispatch({
    type: "ADDIMAGE",
    currentImage: newImageAdd,
    filterWay: pass,
    filterWay1: pass1,
    filterWay2: pass2,
  }),
  addVideo: ()=>dispatch({
    type: "ADDVIDEO",
  }),
  addStory: ()=>dispatch({
    type: "ADDSTORY",
  }),
})
export default connect(mapStateToProps, mapDispatchToProps)(AddContent);
