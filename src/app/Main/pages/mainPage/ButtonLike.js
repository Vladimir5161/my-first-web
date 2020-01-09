import React from "react";
import { connect } from "react-redux";
class ButtonLike extends React.Component {
  render() {
    const {
      OnLike,
      OnLiked,
      OnLikedCount,
      OnLikeCount,
      id,
      clicked,
      onLikeClick,
      onLikedClick,
      removeContent,
      addContent
    } = this.props;
    return (
      <div>
        {clicked ? (
          <button
            className="liked"
            onClick={() => {
              onLikedClick(id);
              // OnLikedCount(id);
              OnLiked(id);
              removeContent(id);
            }}
          ></button>
        ) : (
          <button
            className="likedNo"
            onClick={() => {
              onLikeClick(id);
              // OnLikeCount(id);
              OnLike(id);
              addContent(id);
            }}
          ></button>
        )}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  addContent: id =>dispatch({
      type: "ONLIKED",
      id: id,
    }),
  removeContent: id =>dispatch({
      type: "ONLIKE",
      id: id,
    }),
  onLikedClick: id=>dispatch({
    type: "ONLIKEDCLICK",
    id: id,
  }),
  onLikeClick: id=>dispatch({
    type: "ONLIKECLICK",
    id: id,
  }),
  onLikeCount: id=>dispatch({
    type: "ONLIKECOUNT",
    id: id,
  }),
  onLikedCount: id=>dispatch({
    type: "ONLIKEDCOUNT",
    id: id,
  }),
});
export default connect(null, mapDispatchToProps)(ButtonLike);
