import React from "react";
import ContentListVideo from "./ContentListVideo.js";
import { connect } from "react-redux"


class ContentVideoContainer extends React.Component { 
  render() {
    let firstVideoPage = [];
    let Videos = this.props.DataArrey.filter(this.props.wayVIdeo);
    let lastVideo = (this.props.videosCount > Videos.length ? (Videos.length) : (this.props.videosCount));
    let newVideos = Videos.slice(0, lastVideo)
    for(let i = 0; i < lastVideo; i++) {  
      firstVideoPage.push(newVideos.shift())
    }

    return (
      <ContentListVideo videos={this.props.videos} ShowMoreVideos={this.props.ShowMoreVideos} firstVideoPage={firstVideoPage}/>
    );
  }
  }

  
const mapStateToProps = state => ({
  DataArrey: state.Data.Data,
  videosCount: state.Data.videosCount,
  wayVIdeo: state.movieChose1.wayVIdeo,
  videos: state.filter.videos,

})
const mapDispatchToProps = dispatch => ({
  ShowMoreVideos: () => dispatch({
    type: "CHANGEVIDEOSCOUNT",
  })
})
export default connect(mapStateToProps, mapDispatchToProps)(ContentVideoContainer);
