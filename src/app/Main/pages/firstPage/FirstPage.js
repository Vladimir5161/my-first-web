import React from "react";

import "./FirstPage.css";
import "./contentImage/contentImages.css";
import AddContent from "./addContent/AddContent";
import ContentListImage from "./contentImage/ContentListImage";
import ContentListVideo from "./contentVideo/ContentListVideo";
import ContentListStory from "./contentStory/ContentListStory";

class FirstPage extends React.Component {
  state = {
    activeNo: "activeNo",
    images: "images",
    videos: "videos",
    stories: "stories",
    itemClass: "video"
  };
  OnClickPhoto = () => {
    this.setState({
      images: "images",
      videos: "activeNo",
      stories: "activeNo"
    });
  };
  OnClickVideo = () => {
    this.setState({
      images: "activeNo",
      videos: "videos",
      stories: "activeNo",
      itemClass: "video"
    });
  };
  OnClickStory = () => {
    this.setState({
      images: "activeNo",
      videos: "activeNo",
      stories: "stories",
      itemClass: "story"
    });
  };
  OnClickAllContent = () => {
    this.setState({
      images: "images",
      videos: "videos",
      stories: "stories",
      itemClass: "id"
    });
  };
  render() {
    const {
      OnLike,
      OnLiked,
      stateContent,
      stateImage,
      addImage,
      addVideo
    } = this.props;

    return (
      <div className="containerMain">
        <div className="wrapper">
          <div className="introPage">
            <h2>Our Content</h2>
            <p>
              Here you can find photo, video, story or you can add your own
              content by clicking the button below
            </p>
          </div>
          <div className="addContent">
            <AddContent addImage={addImage} addVideo={addVideo} />

            <div className="filter">
              <ul>
                <li>
                  <div
                    className="buttonFilter"
                    onClick={() => {
                      this.OnClickPhoto();
                    }}
                  >
                    Photo
                  </div>
                </li>
                <li>
                  <div
                    className="buttonFilter"
                    onClick={() => {
                      this.OnClickVideo();
                    }}
                  >
                    Video
                  </div>
                </li>
                <li>
                  <div
                    className="buttonFilter"
                    onClick={() => {
                      this.OnClickStory();
                    }}
                  >
                    Stories
                  </div>
                </li>
                <li>
                  <div
                    className="buttonFilter"
                    onClick={() => {
                      this.OnClickAllContent();
                    }}
                  >
                    All
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="Products" id="content">
            <ContentListImage
              OnLike={OnLike}
              OnLiked={OnLiked}
              images={this.state.images}
              stateImage={stateImage}
            />
            <ContentListVideo
              OnLike={OnLike}
              OnLiked={OnLiked}
              videos={this.state.videos}
              stateContent={stateContent}
            />
            <ContentListStory
              OnLike={OnLike}
              OnLiked={OnLiked}
              stories={this.state.stories}
              stateContent={stateContent}
            />
            <button className="Add-content LoadMore">Load More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPage;
