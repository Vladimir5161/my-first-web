import React, { useEffect } from "react";
import LikedContentPage from "./LikedContentPage";
import { connect } from "react-redux";
import "./LikedContent.css";
import {
    clearLikedContentAll,
    getLikedContent,
} from "../../../../store/contentLikeReducer";
import Preloader from "../../CommonComonents/Preloader";

const LikedPage = ({
    clearLikedContentAll,
    initialized,
    likedContentArray,
    getLikedContent,
}) => {
    useEffect(() => {
        const rerender = () => {
            getLikedContent();
        };
        rerender();
    }, [likedContentArray.length, getLikedContent]);
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
};

const mapStateToProps = (state) => ({
    initialized: state.initializeApp.initialized,
    likedContentArray: state.likedContent.IdArrey,
});
export default connect(mapStateToProps, {
    clearLikedContentAll,
    getLikedContent,
})(LikedPage);
