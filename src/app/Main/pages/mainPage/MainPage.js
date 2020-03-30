import React from "react";
import "./MainPage.css";
import "./contentImage/contentImages.css";
import AddContent from "./addContent/AddContent";
import Filter from "./Filter";
import { connect } from "react-redux";
import ContentImageContainer from "./contentImage/ContentImageContainer";
import ContentVideoContainer from "./contentVideo/ContentVideoContainer";
import ContentStoryContainer from "./contentStory/ContentStoryContainer";
import { initializeApp } from "../../../../store/InitializeReducer";
import Preloader from "../../CommonComonents/Preloader";

class FirstPage extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (this.props.initialized === false) {
            return <Preloader />;
        }
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
                        <ContentImageContainer />
                        <ContentVideoContainer />
                        <ContentStoryContainer />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    logo: state.movieChose1.logo,
    initialized: state.initializeApp.initialized
});

export default connect(mapStateToProps, { initializeApp })(FirstPage);
