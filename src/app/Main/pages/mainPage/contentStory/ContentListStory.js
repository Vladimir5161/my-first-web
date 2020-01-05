import React from "react";
import { Link } from "react-router-dom";
import ContentListItem from "../ContentListItem.js";
import { connect } from "react-redux"

class ContentListStory extends React.Component {
  render() {
    const {
      OnLike,
      OnLiked,
      stories,
      stateContent,
      likedContentState,
      wayStory
    } = this.props;

    return (
      <div className={stories}>
        <div className="contentBlockName">Stories</div>
        <div className="ContentList">
          {stateContent
            .filter(wayStory)
            .map(
              ({ name, description, text, story, id, imageContent, video }) => (
                <div className="Content" key={id}>
                  <ContentListItem
                    video={video}
                    image={imageContent}
                    name={name}
                    text={text}
                    description={description}
                    story={story}
                    OnLike={OnLike}
                    OnLiked={OnLiked}
                    id={id}
                    clicked={likedContentState[id]}
                  />
                  <Link to={`/content/${id}`}>
                    <button className="Add-content Know-more">Know More</button>
                  </Link>
                </div>
              )
            )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  likedContentState: state.likedContentState
})
export default connect(mapStateToProps)(ContentListStory);
