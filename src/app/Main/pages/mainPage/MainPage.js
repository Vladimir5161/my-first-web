import React from "react";
import { connect } from "react-redux"
import "./MainPage.css";
import "./contentImage/contentImages.css";
import AddContent from "./addContent/AddContent";
import Filter from "./Filter";
import ContentImageContainer from "./contentImage/ContentImageContainer";
import ContentVideoContainer from "./contentVideo/ContentVideoContainer";
import ContentStoryContainer from "./contentStory/ContentStoryContainer";

const FirstPage = () => {
  return (
    <div className="containerMain">
      <div className="wrapper">
        <div className="introPage">
          <h2>Our Content</h2>
        </div>
        <div className="addContent">
          <AddContent />
          <Filter />
        </div>
        <div className="Products" id="content">
          <ContentImageContainer
          />
          <ContentVideoContainer
          />
          <ContentStoryContainer
          />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  logo: state.movieChose1.logo,
})

export default connect(mapStateToProps)(FirstPage);
