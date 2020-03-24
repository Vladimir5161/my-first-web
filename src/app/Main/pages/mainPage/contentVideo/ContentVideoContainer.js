import React from "react";
import ContentListVideo from "./ContentListVideo.js";
import { connect } from "react-redux"
import { ShowMore, getContents } from "../../../../../store/DataReducer"
import { getContentArreyVideos } from '../../../../selectors/content-selectors'

class ContentVideoContainer extends React.Component {
  refreshContent() {
    this.props.getContents(this.props.season, this.props.itemsCount, this.props.movie, "video")
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
    this.props.ShowMore(additionalCount, this.props.season, this.props.movie,  "video")
  }
  render() {
    return (
      <ContentListVideo onComponentChangeVideo={this.onComponentChangeVideo} 
      videos={this.props.videos} 
      season={this.props.season}
      movie={this.props.movie}
      firstContent={this.props.firstContent} 
      DataArrey={this.props.DataArrey}
      />
    );
  }
}


const mapStateToProps = state => ({
  DataArrey: state.Data,
  itemsCount: state.Data.videosCount,
  season: state.movieChose1.season,
  videos: state.filter.videos,
  movie: state.movieChose1.movie,
  firstContent: getContentArreyVideos(state)
})

export default connect(mapStateToProps, {
  ShowMore,
  getContents
})(ContentVideoContainer);
