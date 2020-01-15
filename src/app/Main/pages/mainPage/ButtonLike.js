import React from "react";
import { connect } from "react-redux";
class ButtonLike extends React.Component {

  render() {
    const {
      onLikedCount,
      onLikeCount,
      id,
      clicked,
      onLikeClick,
      onLikedClick,
      removeContent,
      addContent,
    } = this.props;
    return (
      <div>
        {clicked ? (
          <button
            className="liked"
            onClick={() => {
              onLikedClick(id);
              onLikedCount(id);
              removeContent(id);
            }}
          ></button>
        ) : (
          <button
            className="likedNo"
            onClick={() => {
              onLikeClick(id);
              onLikeCount(id);
              addContent(id);
            }}
          ></button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state,props) => ({
  clicked: state.likedContent.likedContentState[props.id]
})

const mapDispatchToProps = dispatch => ({
  addContent: (id) =>dispatch({
      type: "ONLIKE",
      id: id,
    }),
  removeContent: id =>dispatch({
      type: "ONLIKED",
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
  onLikeCount: (id)=>dispatch({
    type: "ONLIKECOUNT",
    id,
  }),
  onLikedCount: (id)=>dispatch({
    type: "ONLIKEDCOUNT",
    id
  }),
});
export default connect(mapStateToProps, mapDispatchToProps)(ButtonLike);
