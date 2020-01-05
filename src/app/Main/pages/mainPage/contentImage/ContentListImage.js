import React from "react";
import { connect } from "react-redux"
import ContentListImagesItem from "./ContentListImagesItem.js";

class ContentListImage extends React.Component {
  render() {
    const {
      OnLike,
      OnLiked,
      images,
      stateContent,
      likedContentState,
      wayImage
    } = this.props;
    return (
      <div className={images}>
        <div className="contentBlockName">Images</div>
        <div className="ContentList-images">
          {stateContent.filter(wayImage).map(({ image, id }) => (
            <div className="Content-images" key={id}>
              <ContentListImagesItem
                image={image}
                OnLike={OnLike}
                OnLiked={OnLiked}
                id={id}
                clicked={likedContentState[id]}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  likedContentState: state.likedContentState
})
export default connect(mapStateToProps)(ContentListImage);
