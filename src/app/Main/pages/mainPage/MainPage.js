import React from "react";
import { connect  } from "react-redux"
import "./MainPage.css";
import "./contentImage/contentImages.css";
import AddContent from "./addContent/AddContent";
import Filter from "./Filter";
import ContentImageContainer from "./contentImage/ContentImageContainer";
import ContentVideoContainer from "./contentVideo/ContentVideoContainer";
import ContentStoryContainer from "./contentStory/ContentStoryContainer";

const FirstPage = ({
  images,
  stories,
  videos,
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
            <ContentImageContainer
              images={images}
              wayImage={wayImage}
            />
            <ContentVideoContainer
              videos={videos}
              wayVIdeo={wayVIdeo}
            />
            <ContentStoryContainer
              stories={stories}
              wayStory={wayStory}
            />
          </div>
        </div>
      </div>
    );
  }
const mapStateToProps = state => ({
  logo: state.movieChose1.logo,
  wayVIdeo: state.movieChose1.wayVIdeo,
  wayImage: state.movieChose1.wayImage,
  wayStory: state.movieChose1.wayStory,
  stories: state.filter.stories,
  videos: state.filter.videos,
  images: state.filter.images,
})

export default connect(mapStateToProps)(FirstPage);
