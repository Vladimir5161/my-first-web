import React from "react";
import { connect } from "react-redux"

class ButtonClose extends React.Component {
  render() {
    const { OnCloseButtonClick, contentId, deleteContent } = this.props;
    return (
      <button
        className="ButtonClose"
        onClick={() => {
          OnCloseButtonClick(contentId);
          deleteContent(contentId);
        }}
      ></button>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  deleteContent: id =>dispatch({
    type: "ONCLOSEBUTTONCLICK",
    id: id,
  })
})
export default connect (null,mapDispatchToProps)(ButtonClose);
