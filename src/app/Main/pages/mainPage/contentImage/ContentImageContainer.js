import React from "react";
import { connect } from "react-redux"
import ContentListImage from "./ContentListImage";

class ContentImageContainer extends React.Component {
  render() {
    let firstImagePage = [];
    let Images = this.props.DataArrey.filter(this.props.wayImage);
    let lastImage = (this.props.imagesCount > Images.length ? Images.length : this.props.imagesCount)
    let newImages = Images.slice(0,lastImage)
    for(let i = 0; i < lastImage; i++) {  
    firstImagePage.push(newImages.shift())
    }
    return (
      <ContentListImage ShowMoreImages={this.props.ShowMoreImages} firstImagePage={firstImagePage} images={this.props.images}/>
    );
  }
}
  const mapStateToProps = state => ({
    DataArrey: state.Data.Data,
    imagesCount: state.Data.imagesCount,
  })
  const mapDispatchToProps = dispatch => ({
    ShowMoreImages: () => dispatch({
      type: "CHANGEIMAGESCOUNT",
    })
  })
  export default connect(mapStateToProps, mapDispatchToProps)(ContentImageContainer);
