import React from "react";
import { connect } from "react-redux";
import { likedContent } from "../../../../store/contentLikeReducer";

const ButtonClose = ({ keyForDelete, likedContent, id }) => {
    return (
        <button
            className="ButtonClose"
            onClick={() => {
                likedContent(keyForDelete, id);
            }}
        ></button>
    );
};

export default connect(null, { likedContent })(ButtonClose);
