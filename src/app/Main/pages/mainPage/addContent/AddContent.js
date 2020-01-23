import React from "react";
import "./AddContent.css";
import { connect } from "react-redux"
import PasswordAddContent from "./PasswordAddContent"

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
  UserPuttedName,
  UserPuttedPass,
  OnNameChange,
  OnPassChange,
  passwordWindow,
  OnPassCheckClickSuccess,
  OnPassCheckClickNot,
  userName,
  userPass,
  userPassClass,
  userNameClass,
  OnUserFiledClick,
  userInfoField,
  OnPassCheckClick
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


    let addNewImage = () => {
      let currentImage = newImage.current.value;

      addImage(currentImage, filterWay, filterWay1, filterWay2);
      newImage.current.value = "";
    };
    let addNewVideo = () => {
      let currentVideo = newVideo.current.value;
      let currentVideoName = newVideoName.current.value;
      let currentVideoDescription = newVideoDescription.current.value;
      addVideo(
        currentVideo,
        currentVideoName,
        currentVideoDescription,
        filterWay,
        filterWay1,
        filterWay2,
      );
      newVideo.current.value = "";
      newVideoName.current.value = "";
      newVideoDescription.current.value = "";
    };
    let addNewStory = () => {
      let currentStoryImage = newStoryImage.current.value;
      let currentStory = newStory.current.value;
      let currentStoryName = newStoryName.current.value;
      addStory(
        currentStory,
        currentStoryName,
        currentStoryImage,
        filterWay,
        filterWay1,
        filterWay2,
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
          <PasswordAddContent 
            UserPuttedName={UserPuttedName}
            UserPuttedPass={UserPuttedPass} 
            OnNameChange={OnNameChange} 
            OnPassChange={OnPassChange} 
            passwordWindow={passwordWindow}
            OnPassCheckClickSuccess={OnPassCheckClickSuccess}
            OnPassCheckClickNot={OnPassCheckClickNot}
            userName={userName}
            userPass={userPass}
            userPassClass={userPassClass}
            userNameClass={userNameClass}
            OnUserFiledClick={OnUserFiledClick}
            userInfoField={userInfoField}
            OnPassCheckClick={OnPassCheckClick}
           />
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
  UserPuttedName: state.Pass.Name,
  UserPuttedPass: state.Pass.Pass,
  passwordWindow: state.Pass.passwordWindow,
  userName: state.Pass.userName,
  userPass: state.Pass.userPass,
  userPassClass: state.Pass.userPassClass,
  userNameClass: state.Pass.userNameClass,
  userInfoField: state.Pass.userInfoField,
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
    type: "NEWTEXTVIDEO",
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
  addImage: (currentImage, filterWay, filterWay1, filterWay2)=>dispatch({
    type: "ADDIMAGE",
    currentImage,
    filterWay,
    filterWay1,
    filterWay2,
  }),
  addVideo: (currentVideo, currentVideoName, currentVideoDescription, filterWay, filterWay1, filterWay2)=>dispatch({
    type: "ADDVIDEO",
    currentVideo,
    currentVideoName,
    currentVideoDescription,
    filterWay,
    filterWay1,
    filterWay2,
  }),
  addStory: (currentStory, currentStoryName, currentStoryImage, filterWay, filterWay1, filterWay2)=>dispatch({
    type: "ADDSTORY",
    currentStory,
    currentStoryName,
    currentStoryImage,
    filterWay,
    filterWay1,
    filterWay2,
  }),
  OnNameChange: (Name) => dispatch({
    type: "ONNAMECHANGE",
    Name: Name,
  }),
  OnPassChange: (Pass) => dispatch({
    type: "ONPASSCHANGE",
    Pass: Pass,
  }),
  OnPassCheckClickSuccess: () =>dispatch({
    type: "ONPASSCHECKCLICKSUCCESS",
  }),
  OnPassCheckClickNot: () =>dispatch({
    type: "ONPASSCHECKCLICKNOT",
  }),
  OnUserFiledClick: () =>dispatch({
    type: "ONUSERFILEDCLICK",
  }),
  OnPassCheckClick: ()=>dispatch({
    type: "ONPASSCHECKCLICK",
  })
})
export default connect(mapStateToProps, mapDispatchToProps)(AddContent);
