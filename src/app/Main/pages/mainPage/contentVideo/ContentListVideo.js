import React from "react";
import { Link } from "react-router-dom";
import ContentListItem from "../ContentListItem.js";
import { connect } from "react-redux"

class ContentListVideo extends React.Component {
  render() {
    const {
      OnLike,
      OnLiked,
      videos,
      stateContent,
      likedContentState,
      wayVIdeo
    } = this.props;
    return (
      <div className={videos}>
        <div className="contentBlockName ">Videos</div>
        <div className="ContentList">
          {stateContent
            .filter(wayVIdeo)
            .map(({ name, description, video, id }) => (
              <div className="Content" key={id}>
                <ContentListItem
                  video={video}
                  name={name}
                  description={description}
                  OnLike={OnLike}
                  OnLiked={OnLiked}
                  id={id}
                  clicked={likedContentState[id]}
                />
                <Link to={`/content/${id}`}>
                  <button className="Add-content Know-more">Know More</button>
                </Link>
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
export default connect(mapStateToProps)(ContentListVideo);
