import React from "react";
import LikedContentPage from "./LikedContentPage";
import { connect } from "react-redux";
import "./LikedContent.css";
import { clearLikedContentAll } from "../../../../store/contentLikeReducer";
import Preloader from "../../CommonComonents/Preloader";

const LikedPage = React.memo(({ clearLikedContentAll, initialized }) => {
    if (initialized === false) {
        return <Preloader />;
    } else
        return (
            <div className="containerMain">
                <div className="LikedPage">
                    <LikedContentPage />
                </div>
                <div className="buttonClearAll">
                    <button
                        className="Add-content"
                        onClick={() => {
                            clearLikedContentAll();
                        }}
                    >
                        Clear All
                    </button>
                </div>
            </div>
        );
});

const mapStateToProps = (state) => ({
    initialized: state.initializeApp.initialized,
});
export default connect(mapStateToProps, {
    clearLikedContentAll,
})(LikedPage);
