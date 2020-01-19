import React from "react";
import { connect  } from "react-redux"
import "./MainPage.css";
import "./contentImage/contentImages.css";
import AddContent from "./addContent/AddContent";
import Filter from "./Filter";
import ContentListImage from "./contentImage/ContentListImage";
import ContentListVideo from "./contentVideo/ContentListVideo";
import ContentListStory from "./contentStory/ContentListStory";

const FirstPage = ({
  images,
  stories,
  videos,
  stateContent,
  wayVIdeo,
  wayImage,
  wayStory,
}) => {
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
            <Filter />
          </div>
          <div className="Products" id="content">
            <ContentListImage
              images={images}
              stateContent={stateContent}
              wayImage={wayImage}
            />
            <ContentListVideo
              videos={videos}
              stateContent={stateContent}
              wayVIdeo={wayVIdeo}
            />
            <ContentListStory
              stories={stories}
              stateContent={stateContent}
              wayStory={wayStory}
            />
          </div>
        </div>
      </div>
    );
  }
const mapStateToProps = state => ({
  stateContent: state.movieChose1.stateContent,
  logo: state.movieChose1.logo,
  wayVIdeo: state.movieChose1.wayVIdeo,
  wayImage: state.movieChose1.wayImage,
  wayStory: state.movieChose1.wayStory,
  stories: state.filter.stories,
  videos: state.filter.videos,
  images: state.filter.images,
})

export default connect(mapStateToProps)(FirstPage);
