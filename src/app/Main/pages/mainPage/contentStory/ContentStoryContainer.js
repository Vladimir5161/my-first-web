import React from "react";
import ContentListStory from "./ContentListStory.js";
import { connect } from "react-redux"


class ContentStoryContainer extends React.Component {
  render() {
    let firstStoryPage = [];
    let Stories = this.props.DataArrey.filter(this.props.wayStory);
    let lastStory = (this.props.storiesCount > Stories.length ? Stories.length : this.props.storiesCount)
    let newStories = Stories.slice(0, lastStory)
    for(let i = 0; i < lastStory; i++) {  
      firstStoryPage.push(newStories.shift())
    }
    return (
      <ContentListStory stories={this.props.stories} ShowMoreStories={this.props.ShowMoreStories} firstStoryPage={firstStoryPage}/>
    );
  }
}
  const mapStateToProps = state => ({
    DataArrey: state.Data.Data,
    storiesCount: state.Data.storiesCount,
    wayStory: state.movieChose1.wayStory,
    stories: state.filter.stories,

  })
  const mapDispatchToProps = dispatch => ({
    ShowMoreStories: () => dispatch({
      type: "CHANGESTORIESCOUNT",
    })
  })

  export default connect(mapStateToProps, mapDispatchToProps)(ContentStoryContainer);
