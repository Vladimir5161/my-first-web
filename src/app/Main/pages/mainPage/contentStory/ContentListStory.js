import React from "react";
import { Link } from "react-router-dom";
import ContentListItem from "../ContentListItem.js";
import { connect } from "react-redux"


class ContentListStory extends React.Component {
  render() {
    let firstStoryPage = [];
    let Stories = this.props.DataArrey.filter(this.props.wayStory);
    let lastStory = (this.props.storiesCount > Stories.length ? Stories.length : this.props.storiesCount)
    let newStories = Stories.slice(0, lastStory)
    for(let i = 0; i < lastStory; i++) {  
      firstStoryPage.push(newStories.shift())
    }

    let {      
      stories,
      ShowMoreStories,
    }= this.props
    return (
      <div className={stories}>
        <div className="contentBlockName">Stories</div>
        <div className="ContentList">
          {firstStoryPage
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
                    id={id}
                  />
                  <Link to={`/content/${id}`}>
                    <button className="Add-content Know-more">Know More</button>
                  </Link>
                </div>
              )
            )}
        </div>
        <button className="Add-content Show-more" onClick={()=>{ShowMoreStories()}}>Show more</button>
      </div>
    );
  }
}

  const mapStateToProps = state => ({
    DataArrey: state.Data.Data,
    storiesCount: state.Data.storiesCount,
  })
  const mapDispatchToProps = dispatch => ({
    ShowMoreStories: () => dispatch({
      type: "CHANGESTORIESCOUNT",
    })
  })

  export default connect(mapStateToProps, mapDispatchToProps)(ContentListStory);
