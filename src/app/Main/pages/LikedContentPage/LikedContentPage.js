import React from "react";
import LikedContentPageItem from "./LikedContentPageItem";
import { connect } from "react-redux";
import "./LikedContent.css";
import { getLikedContent } from "../../../../store/contentLikeReducer";
import { contentReduce } from "../../../selectors/likedContentSelectors";

const LikedContentPage = ({ likedContentData, contentWebReduce }) => {
    return (
        <div>
            <h1 className="h1">Liked Content</h1>
            <div className="likedContentPage">
                {likedContentData.map(({ id, keyForDelete }) => (
                    <div className="contentLikedArea" key={id}>
                        <LikedContentPageItem
                            keyForDelete={keyForDelete}
                            product={contentWebReduce[id]}
                            id={id}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    likedContentData: state.likedContent.IdArrey,
    DataArrey: state.Data.Data,
    contentWebReduce: contentReduce(state),
});

export default connect(mapStateToProps, { getLikedContent })(LikedContentPage);
