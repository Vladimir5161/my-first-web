import React from "react";
import { connect } from "react-redux"

const  ButtonClose = ({
  contentId, 
  deleteContent, 
  onLikedCount
}) => {
    return (
      <button
        className="ButtonClose"
        onClick={() => {
          deleteContent(contentId);
          onLikedCount();
        }}
      ></button>
    );
  }

const mapDispatchToProps = (dispatch) => ({
  deleteContent: id =>dispatch({
    type: "ONLIKED",
    id: id,
  }),
  onLikedCount: ()=>dispatch({
    type: "ONLIKEDCOUNT",
  })
})
export default connect (null, mapDispatchToProps)(ButtonClose);
