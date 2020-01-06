import React from "react";
import "./AddContent.css";
import vikingsData from "../../../../../redux/vikingsData";

class AddContent extends React.Component {
  state = {
    filterImage: false,
    filterVideo: false,
    filterStory: false,
    addContent: "Add Image",
    filterContent: "filterContent",
    clicked: false
  };
  onFilterImageClick = () => {
    this.setState({
      addContent: "Add Image",
      filterImage: true,
      filterVideo: false,
      filterStory: false
    });
  };
  onFilterVideoClick = () => {
    this.setState({
      addContent: "Add Video",
      filterVideo: true,
      filterImage: false,
      filterStory: false
    });
  };
  onFilterStoryClick = () => {
    this.setState({
      addContent: "Add Story",
      filterVideo: false,
      filterImage: false,
      filterStory: true
    });
  };
  onClickFilterButton = () => {
    this.setState({
      filterContent: "filterContentActive",
      clicked: true
    });
  };
  onDeClickFilterButton = () => {
    this.setState({
      filterContent: "filterContent",
      clicked: false
    });
  };
  onDoubleFilterButtonClick = () => {
    this.setState({
      filterVideo: false,
      filterImage: false
    });
  };
  render() {
    const {
      addImage,
      addVideo,
      addStory,
      newTextInTextAreaStory,
      newTextInTextAreaVideo,
      newTextInTextAreaName,
      newTextInTextAreaImage,
      newTextInTextAreaDescription
    } = this.props;
    let newImage = React.createRef();
    let newVideo = React.createRef();
    let newName = React.createRef();
    let newDescription = React.createRef();
    let newStory = React.createRef();

    let addNewImage = () => {
      let newImageAdd = newImage.current.value;
      addImage(newImageAdd);
      newImage.current.value = "";
    };
    let addNewVideo = () => {
      let newVideoAdd = newVideo.current.value;
      let newVideoNameAdd = newName.current.value;
      let newVideoDescription = newDescription.current.value;
      addVideo(newVideoAdd, newVideoNameAdd, newVideoDescription);
      newVideo.current.value = "";
      newName.current.value = "";
      newDescription.current.value = "";
    };
    let addNewStory = () => {
      let newImageAdd = newImage.current.value;
      let newStoryAdd = newStory.current.value;
      let newStoryNameAdd = newName.current.value;
      addStory(newStoryAdd, newStoryNameAdd, newImageAdd);
      newName.current.value = "";
      newImage.current.value = "";
      newStory.current.value = "";
    };

    let onTextChangeImage = newImage => {
      let newTextImage = newImage.current.value;
      newTextInTextAreaImage(newTextImage);
    };
    let onTextChangeVideo = newVideo => {
      let newTextVideo = newVideo.current.value;
      newTextInTextAreaVideo(newTextVideo);
    };
    let onTextChangeName = newName => {
      let newTextName = newName.current.value;
      newTextInTextAreaName(newTextName);
    };
    let onTextChangeDescription = newDescription => {
      let newTextDescription = newDescription.current.value;
      newTextInTextAreaDescription(newTextDescription);
    };
    let onTextChangeStory = newStory => {
      let newTextStory = newStory.current.value;
      newTextInTextAreaStory(newTextStory);
    };
    return (
      <div className="filterAddContent">
        <div className="filterButtonHover">
          {this.state.clicked ? (
            <button
              className="filterButton"
              onDoubleClick={() => {
                this.onDoubleFilterButtonClick();
              }}
              onClick={() => {
                this.onDeClickFilterButton();
              }}
            >
              {" "}
              {this.state.addContent}
            </button>
          ) : (
            <button
              className="filterButton"
              onDoubleClick={() => {
                this.onDoubleFilterButtonClick();
              }}
              onClick={() => {
                this.onClickFilterButton();
              }}
            >
              {" "}
              {this.state.addContent}
            </button>
          )}

          <ul className={this.state.filterContent}>
            <li
              onClick={() => {
                this.onFilterImageClick();
              }}
            >
              Add Image
            </li>
            <li
              onClick={() => {
                this.onFilterVideoClick();
              }}
            >
              Add Video
            </li>
            <li
              onClick={() => {
                this.onFilterStoryClick();
              }}
            >
              Add Story
            </li>
          </ul>
        </div>
        {this.state.filterImage ? (
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
                this.onFilterImageClick();
              }}
            >
              Add Content
            </button>
          </div>
        ) : this.state.filterVideo ? (
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
              ref={newName}
              onChange={() => {
                onTextChangeName(newName);
              }}
            ></textarea>
            <div className="addContentH1">Input your description</div>
            <textarea
              type="text"
              className="inputContent"
              ref={newDescription}
              onChange={() => {
                onTextChangeDescription(newDescription);
              }}
            ></textarea>
            <button
              className="Add-content"
              onClick={() => {
                addNewVideo();
                this.onFilterVideoClick();
              }}
            >
              Add Content
            </button>
          </div>
        ) : this.state.filterStory ? (
          <div className="addStory">
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
              <div className="addContentH1">Input your Story Name</div>
              <textarea
                type="text"
                className="inputContent"
                ref={newName}
                onChange={() => {
                  onTextChangeName(newName);
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
                  this.onFilterStoryClick();
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
}
export default AddContent;
