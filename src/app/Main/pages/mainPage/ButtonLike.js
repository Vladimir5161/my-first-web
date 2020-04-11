import React from "react";
import { connect } from "react-redux";
import { getLikedId } from "../../../selectors/likedContentSelectors";
import {
    likeContent,
    likedContent,
    getLikedContent,
} from "../../../../store/contentLikeReducer";
import { useEffect } from "react";

const ButtonLike = ({
    keyFirebase,
    likedContentArray,
    likeContent,
    likedContent,
    getLikedContent,
    isFetching,
}) => {
    useEffect(() => {
        const rerender = () => {
            getLikedContent();
        };
        rerender();
    }, [likedContentArray.length, getLikedContent]);
    const exactObj = likedContentArray.filter((i) => i.id === keyFirebase);
    return (
        <div>
            {likedContentArray.some((item) => item.id === keyFirebase) ? (
                <button
                    disabled={isFetching.some((id) => id === keyFirebase)}
                    className="liked"
                    onClick={() => {
                        likedContent(exactObj[0].keyForDelete, keyFirebase);
                    }}
                ></button>
            ) : (
                <button
                    disabled={isFetching.some((id) => id === keyFirebase)}
                    className="likedNo"
                    onClick={() => {
                        likeContent(keyFirebase);
                    }}
                ></button>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    likedContentArray: state.likedContent.IdArrey,
    isFetching: state.likedContent.isFetching,
});

export default connect(mapStateToProps, {
    likeContent,
    likedContent,
    getLikedContent,
})(ButtonLike);
