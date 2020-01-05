import React from "react";
import "./AddContent.css";

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
      clicked: false,
      filterVideo: false,
      filterImage: false,
      filterStory: false
    });
  };
  render() {
    const {
      addImage,
      addVideo,
      addStory,
      newTextImage,
      newTextVideo,
      newTextVideoName,
      newTextVideoDescription,
      newTextStoryText,
      newTextStoryImage,
      newTextStoryName,
      filterWay,
      filterWay1,
      filterWay2,
      filterWay3
    } = this.props;
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
      let TextVideo = newVideo.current.value;
      newTextVideo(TextVideo);
    };
    let onTextChangeVideoName = newVideoName => {
      let newTextName = newVideoName.current.value;
      newTextVideoName(newTextName);
    };
    let onTextChangeVideoDescription = newVideoDescription => {
      let TextDescription = newVideoDescription.current.value;
      newTextVideoDescription(TextDescription);
    };
    let onTextChangeStory = newStory => {
      let TextStory = newStory.current.value;
      newTextStoryText(TextStory);
    };
    let onTextChangeStoryImage = newStoryImage => {
      let StoryImage = newStoryImage.current.value;
      newTextStoryImage(StoryImage);
    };
    let onTextChangeStoryName = newStoryName => {
      let TextStoryName = newStoryName.current.value;
      newTextStoryName(TextStoryName);
    };

    let pass = filterWay;
    let pass1 = filterWay1;
    let pass2 = filterWay2;
    let pass3 = filterWay3;
    let addNewImage = () => {
      let newImageAdd = newImage.current.value;

      addImage(newImageAdd, pass, pass1, pass2, pass3);
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
          {this.state.clicked ? (
            <button
              className="filterButton"
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
