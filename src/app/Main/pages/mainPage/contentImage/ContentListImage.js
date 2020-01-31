import React from "react";
import { connect } from "react-redux"
import ContentListImagesItem from "./ContentListImagesItem.js";

class ContentListImage extends React.Component {
  render() {
    let firstImagePage = [];
    let Images = this.props.DataArrey.filter(this.props.wayImage);
    let lastImage = (this.props.imagesCount > Images.length ? Images.length : this.props.imagesCount)
    let newImages = Images.slice(0,lastImage)
    for(let i = 0; i < lastImage; i++) {  
    firstImagePage.push(newImages.shift())
    }
  const  {
      images,
      ShowMoreImages,
    } = this.props
    return (
      <div className={images}>
        <div className="contentBlockName">Images</div>
        <div className="ContentList-images">
          {firstImagePage.map(({ image, id }) => (
            <div className="Content-images" key={id}>
              <ContentListImagesItem
                image={image}
                id={id}
              />
            </div>
          ))}
        </div>
        <button className="Add-content Show-more" onClick={()=>{ShowMoreImages()}}>Show more</button>
      </div>
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
  export default connect(mapStateToProps, mapDispatchToProps)(ContentListImage);
