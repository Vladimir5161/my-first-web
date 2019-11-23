import React from "react";
import "./AddContent.css";

class AddContent extends React.Component {
  state = {
    filterImage: false,
    filterVideo: false,
    addContent: "Add Image",
    filterContent: "filterContent",
    clicked: false
  };
  onFilterImageClick = () => {
    this.setState({
      addContent: "Add Image",
      filterImage: true,
      filterVideo: false
    });
  };
  onFilterVideoClick = () => {
    this.setState({
      addContent: "Add Video",
      filterVideo: true,
      filterImage: false
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
    const { addImage, addVideo } = this.props;
    let newImage = React.createRef();
    let newVideo = React.createRef();
    let newVideoName = React.createRef();
    let newVideoDescription = React.createRef();

    let addNewImage = () => {
      let newImageAdd = newImage.current.value;
      addImage(newImageAdd);
      newImage.current.value = "";
    };
    let addNewVideo = () => {
      let newVideoAdd = newVideo.current.value;
      let newVideoNameAdd = newVideoName.current.value;
      let newVideoDescriptiobAdd = newVideoDescription.current.value;
      addVideo(newVideoAdd, newVideoNameAdd, newVideoDescriptiobAdd);
      newVideo.current.value = "";
      newVideoName.current.value = "";
      newVideoDescription.current.value = "";
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
          </ul>
        </div>

        {this.state.filterImage ? (
          <div className="addContentTable">
            <div className="addContentH1">Input your link</div>
            <textarea
              type="text"
              className="inputImage"
              ref={newImage}
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
            ></textarea>
            <div className="addContentH1">Input your Video Name</div>
            <textarea
              type="text"
              className="inputVideo"
              ref={newVideoName}
            ></textarea>
            <div className="addContentH1">Input your description</div>
            <textarea
              type="text"
              className="inputVideo"
              ref={newVideoDescription}
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
        ) : (
          <div className="addStory">
            <div className="addContentTable">
              <div className="addContentH1">Input your link</div>
              <textarea
                type="text"
                className="inputImage"
                ref={newImage}
              ></textarea>
              <button className="Add-content" onClick={addNewImage}>
                Add Content
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default AddContent;
