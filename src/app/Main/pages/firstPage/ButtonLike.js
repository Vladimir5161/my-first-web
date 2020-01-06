import React from "react";

class ButtonLike extends React.Component {
  render() {
    const {
      OnLiked,
      OnLike,
      id,
      clicked,
      OnLikeClick,
      OnLikedClick
    } = this.props;
    return (
      <div>
        {clicked ? (
          <button
            className="liked"
            onClick={() => {
              OnLikedClick(id);
              OnLiked(id);
            }}
          ></button>
        ) : (
          <button
            className="likedNo"
            onClick={() => {
              OnLikeClick(id);
              OnLike(id);
            }}
          ></button>
        )}
      </div>
    );
  }
}

export default ButtonLike;
