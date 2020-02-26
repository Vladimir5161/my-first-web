import React from "react";
import { connect } from "react-redux"

const  ButtonClose = ({
  contentId, 
  deleteContent, 
  onLikedCount,
  onLikedClick,
}) => {
    return (
      <button
        className="ButtonClose"
        onClick={() => {
          deleteContent(contentId);
          onLikedCount();
          onLikedClick(contentId);
        }}
      ></button>
    );
  }

const mapDispatchToProps = (dispatch) => ({
  deleteContent: id =>dispatch({
    type: "ONLIKED",
    id,
  }),
  onLikedCount: ()=>dispatch({
    type: "ONLIKEDCOUNT",
  }),
  onLikedClick: (id)=>dispatch({
    type: "ONLIKEDCLICK",
    id,
  }),
})
export default connect (null, mapDispatchToProps)(ButtonClose);
