import React from "react";
import ContentListStory from "./ContentListStory.js";
import { connect } from "react-redux"
import { ShowMore, getContents } from "../../../../../store/DataReducer"
import { getContentArreyStories } from "../../../../selectors/content-selectors"

class ContentStoryContainer extends React.Component {
  refreshContent() {
    this.props.getContents(this.props.season, this.props.itemsCount, this.props.movie, "story")
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
  onComponentChange = (additionalCount) => {
    this.props.ShowMore(additionalCount, this.props.season, this.props.movie,  "story")
  }
  render() {
    return (
      <ContentListStory onComponentChange={this.onComponentChange} 
      stories={this.props.stories} 
      firstContent={this.props.firstContent} 
      season={this.props.season}
      movie={this.props.movie}
      DataArrey={this.props.DataArrey}
      />
    );
  }
}
const mapStateToProps = state => ({
  DataArrey: state.Data,
  itemsCount: state.Data.storiesCount,
  season: state.movieChose1.season,
  stories: state.filter.stories,
  movie: state.movieChose1.movie,
  firstContent: getContentArreyStories(state)

})

export default connect(mapStateToProps, {
  ShowMore,
  getContents
})(ContentStoryContainer);

