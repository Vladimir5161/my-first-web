import React from "react";
import { connect } from "react-redux";
class ButtonLike extends React.Component {
  render() {
    const {
      OnLiked,
      OnLike,
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
              OnLiked(id);
              removeContent(id);
            }}
          ></button>
        ) : (
          <button
            className="likedNo"
            onClick={() => {
              onLikeClick(id);
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
  })
});
export default connect(null, mapDispatchToProps)(ButtonLike);
