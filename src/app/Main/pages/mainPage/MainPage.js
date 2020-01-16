import React from "react";
import { connect  } from "react-redux"
import "./MainPage.css";
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
      stateContent,
      wayVIdeo,
      wayImage,
      wayStory,
    } = this.props
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
            <AddContent />
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
              images={this.state.images}
              stateContent={stateContent}
              wayImage={wayImage}
            />
            <ContentListVideo
              videos={this.state.videos}
              stateContent={stateContent}
              wayVIdeo={wayVIdeo}
            />
            <ContentListStory
              stories={this.state.stories}
              stateContent={stateContent}
              wayStory={wayStory}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  stateContent: state.movieChose1.stateContent,
  logo: state.movieChose1.logo,
  wayVIdeo: state.movieChose1.wayVIdeo,
  wayImage: state.movieChose1.wayImage,
  wayStory: state.movieChose1.wayStory,

})
export default connect(mapStateToProps)(FirstPage);
