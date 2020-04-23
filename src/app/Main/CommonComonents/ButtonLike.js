import React from "react";
import { connect } from "react-redux";
import { likeContent, likedContent } from "../../../store/contentLikeReducer";

const ButtonLike = React.memo(
    ({
        keyFirebase,
        likedContentArray,
        likeContent,
        likedContent,
        isFetching,
    }) => {
        const exactObj = likedContentArray.filter((i) => i.id === keyFirebase);
        return (
            <div>
                {likedContentArray.some((item) => item.id === keyFirebase) ? (
                    <button
                        disabled={isFetching.some((id) => id === keyFirebase)}
                        className="liked"
                        onMouseDown={() => {
                            likedContent(exactObj[0].keyForDelete, keyFirebase);
                        }}
                    ></button>
                ) : (
                    <button
                        disabled={isFetching.some((id) => id === keyFirebase)}
                        className="likedNo"
                        onMouseDown={() => {
                            likeContent(keyFirebase);
                        }}
                    ></button>
                )}
            </div>
        );
    }
);

const mapStateToProps = (state) => ({
    likedContentArray: state.likedContent.IdArrey,
    isFetching: state.likedContent.isFetching,
});

export default connect(mapStateToProps, {
    likeContent,
    likedContent,
})(ButtonLike);
