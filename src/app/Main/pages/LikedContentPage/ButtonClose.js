import React from "react";
import { connect } from "react-redux"

class ButtonClose extends React.Component {
  render() {
    const { contentId, deleteContent} = this.props;
    return (
      <button
        className="ButtonClose"
        onClick={() => {
          deleteContent(contentId);
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
})
export default connect (null, mapDispatchToProps)(ButtonClose);
