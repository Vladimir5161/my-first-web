import React from "react";
import ContentListStory from "./ContentListStory.js";
import { connect } from "react-redux";
import {
    ShowMore,
    getContents,
    deleteContent
} from "../../../../../store/DataReducer";
import { getContentArreyStories } from "../../../../selectors/content-selectors";

class ContentStoryContainer extends React.Component {
    refreshContent() {
        this.props.getContents(
            this.props.season,
            this.props.itemsCount,
            this.props.movie,
            "story"
        );
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (
            this.props.season !== prevProps.season ||
            this.props.movie !== prevProps.movie ||
            this.props.itemsCount !== prevProps.itemsCount ||
            this.props.DataArrey.Data.filter(item => item["story"]).length !==
                prevProps.DataArrey.Data.filter(item => item["story"]).length
        ) {
            this.refreshContent();
        }
    }
    onComponentChange = additionalCount => {
        this.props.ShowMore(
            additionalCount,
            this.props.season,
            this.props.movie,
            "story"
        );
    };
    render() {
        return (
            <ContentListStory
                onComponentChange={this.onComponentChange}
                stories={this.props.stories}
                firstContent={this.props.firstContent}
                season={this.props.season}
                movie={this.props.movie}
                DataArrey={this.props.DataArrey}
                deleteContent={this.props.deleteContent}
                editMode={this.props.editMode}
                isFetching={this.props.isFetching}
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
    firstContent: getContentArreyStories(state),
    editMode: state.AddContent.editMode,
    isFetching: state.Data.isFetching
});

export default connect(mapStateToProps, {
    ShowMore,
    getContents,
    deleteContent
})(ContentStoryContainer);
