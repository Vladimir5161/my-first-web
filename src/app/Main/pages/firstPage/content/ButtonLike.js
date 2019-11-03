import React from "react";

const ButtonLike = ({ OnLikedClick, OnLikeClick, like }) => {
  return (
    <button
      className={like}
      onDoubleClick={() => {
        OnLikeClick();
      }}
      onClick={() => {
        OnLikedClick();
      }}
    ></button>
  );
};
export default ButtonLike;
