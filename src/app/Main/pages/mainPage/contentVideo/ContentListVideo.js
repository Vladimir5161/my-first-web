import React from "react";
import { Link } from "react-router-dom";
import ContentListItem from "../ContentListItem.js";
import { connect } from "react-redux"


class ContentListVideo extends React.Component { 
  render() {
    let firstVideoPage = [];
    let Videos = this.props.DataArrey.filter(this.props.wayVIdeo);
    let lastVideo = (this.props.videosCount > Videos.length ? (Videos.length) : (this.props.videosCount));
    let newVideos = Videos.slice(0, lastVideo)
    for(let i = 0; i < lastVideo; i++) {  
      firstVideoPage.push(newVideos.shift())
    }

    let {
      videos,
      ShowMoreVideos,
     } = this.props
    return (
      <div className={videos}>
        <div className="contentBlockName ">Videos</div>
        <div className="ContentList">
          {firstVideoPage.map(({ name, description, video, id }) => (
              <div className="Content" key={id}>
                <ContentListItem
                  video={video}
                  name={name}
                  description={description}
                  id={id}
                />
                <Link to={`/content/${id}`}>
                  <button className="Add-content Know-more">Know More</button>
                </Link>
              </div>
            ))}
        </div>
        <button className="Add-content Show-more" onClick={()=>{ShowMoreVideos()}}>Show more</button>
      </div>
    );
  }
  }

  
const mapStateToProps = state => ({
  DataArrey: state.Data.Data,
  videosCount: state.Data.videosCount,
})
const mapDispatchToProps = dispatch => ({
  ShowMoreVideos: () => dispatch({
    type: "CHANGEVIDEOSCOUNT",
  })
})
export default connect(mapStateToProps, mapDispatchToProps)(ContentListVideo);
