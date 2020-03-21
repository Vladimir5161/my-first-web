import React from "react";
import { connect } from "react-redux"
import ContentListImage from "./ContentListImage";
import { uploadContent, ShowMore } from "../../../../../store/DataReducer"
import { getContentArreyImages } from "../../../../selectors/content-selectors"

class ContentImageContainer extends React.Component {
  refreshContent() {
    this.props.uploadContent(this.props.season, this.props.itemsCount, this.props.movie, "image")
  }
  componentDidMount() {
    this.refreshContent()
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.season !== prevProps.season ||
      this.props.movie !== prevProps.movie ||
      this.props.itemsCount !== prevProps.itemsCount ||
      this.props.DataArrey.Data.length !== prevProps.DataArrey.Data.length
    ) {

      this.refreshContent()
    }
  }

  onComponentChange = (additionalCount) => {
    this.props.ShowMore(additionalCount, this.props.season, this.props.movie, "image")
  }
  render() {
    return (
      <ContentListImage onComponentChange={this.onComponentChange} 
      DataArrey={this.props.DataArrey} 
      firstContent={this.props.firstContent} 
      images={this.props.images} 
      movie={this.props.movie}
      season={this.props.season}
      />
    );
  }
}
const mapStateToProps = state => ({
  DataArrey: state.Data,
  itemsCount: state.Data.imagesCount,
  season: state.movieChose1.season,
  images: state.filter.images,
  movie: state.movieChose1.movie,
  firstContent: getContentArreyImages(state)
})
export default connect(mapStateToProps, {
  uploadContent,
  ShowMore,
})(ContentImageContainer);

