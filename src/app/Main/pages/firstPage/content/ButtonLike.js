import React from "react";

class ButtonLike extends React.Component {
  state = {
    clicked: false,
    like: "likedNo"
  };

  OnLikedClick = () => {
    this.setState({ clicked: true });
    this.setState(prevState => ({ like: (prevState.like = "liked") }));
  };
  OnLikeClick = () => {
    this.setState(prevState => ({ like: (prevState.like = "likedNo") }));
    this.setState({ clicked: false });
  };
  render() {
    const { OnLiked, OnLike } = this.props;
    return (
      <div>
        {this.state.clicked ? (
          <button
            className={this.state.like}
            onClick={() => {
              this.OnLikeClick();
              OnLike();
            }}
          ></button>
        ) : (
          <button
            className={this.state.like}
            onClick={() => {
              this.OnLikedClick();
              OnLiked();
            }}
          ></button>
        )}
      </div>
    );
  }
}

export default ButtonLike;
