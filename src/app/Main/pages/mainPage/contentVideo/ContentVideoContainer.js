import React from "react";
import ContentListVideo from "./ContentListVideo.js";
import { connect } from "react-redux"
import { uploadContent, ShowMore } from "../../../../../store/DataReducer"
import { getContentArreyVideos } from '../../../../selectors/content-selectors'

class ContentVideoContainer extends React.Component {
  refreshContent() {
    this.props.uploadContent(this.props.season, this.props.itemsCount, this.props.movie, "video")
  }
  componentDidMount() {
    this.refreshContent()
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.season !== prevProps.season ||
      this.props.movie !== prevProps.movie ||
      this.props.itemsCount !== prevProps.itemsCount
    ) {
      this.refreshContent()
    }
  }
  onComponentChangeVideo = (additionalCount) => {
    this.props.ShowMore(additionalCount, "video")
  }
  render() {

    return (
      <ContentListVideo onComponentChangeVideo={this.onComponentChangeVideo} videos={this.props.videos} firstContent={this.props.firstContent} />
    );
  }
}


const mapStateToProps = state => ({
  DataArrey: state.Data.Data,
  itemsCount: state.Data.videosCount,
  season: state.movieChose1.season,
  videos: state.filter.videos,
  movie: state.movieChose1.movie,
  firstContent: getContentArreyVideos(state)
})

export default connect(mapStateToProps, {
  uploadContent,
  ShowMore,
})(ContentVideoContainer);
