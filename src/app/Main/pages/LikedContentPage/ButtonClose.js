import React from "react";
import { connect } from "react-redux"

class ButtonClose extends React.Component {
  render() {
    const { contentId, deleteContent, onLikedCount} = this.props;
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
