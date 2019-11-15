import React from "react";

class ButtonLike extends React.Component {
  state = {
    clicked: false,
    like: "likedNo"
  };

  OnLikeClick = () => {
    this.setState({ clicked: true });
    this.setState(prevState => ({ like: (prevState.like = "liked") }));
  };
  OnLikedClick = () => {
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
              this.OnLikedClick();
              OnLiked();
            }}
          ></button>
        ) : (
          <button
            className={this.state.like}
            onClick={() => {
              this.OnLikeClick();
              OnLike();
            }}
          ></button>
        )}
      </div>
    );
  }
}

export default ButtonLike;
