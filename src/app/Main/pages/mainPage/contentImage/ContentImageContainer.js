import React from "react";
import { connect } from "react-redux";
import ContentListImage from "./ContentListImage";
import {
    ShowMore,
    getContents,
    deleteContent
} from "../../../../../store/DataReducer";
import { getContentArreyImages } from "../../../../selectors/content-selectors";

class ContentImageContainer extends React.Component {
    refreshContent() {
        this.props.getContents(
            this.props.season,
            this.props.itemsCount,
            this.props.movie,
            "image"
        );
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (
            (this.props.season !== prevProps.season ||
                this.props.movie !== prevProps.movie ||
                this.props.itemsCount !== prevProps.itemsCount ||
                this.props.DataArrey.Data.filter(item => item["image"])
                    .length !==
                    prevProps.DataArrey.Data.filter(item => item["image"])
                        .length) &&
            this.props.DataArrey.Data.filter(item => item["image"]).length !== 0
        ) {
            this.refreshContent();
        }
    }
    onComponentChange = additionalCount => {
        this.props.ShowMore(
            additionalCount,
            this.props.season,
            this.props.movie,
            "image"
        );
    };

    render() {
        return (
            <ContentListImage
                onComponentChange={this.onComponentChange}
                DataArrey={this.props.DataArrey}
                firstContent={this.props.firstContent}
                images={this.props.images}
                movie={this.props.movie}
                season={this.props.season}
                deleteContent={this.props.deleteContent}
                editMode={this.props.editMode}
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
    firstContent: getContentArreyImages(state),
    editMode: state.AddContent.editMode
});
export default connect(mapStateToProps, {
    ShowMore,
    getContents,
    deleteContent
})(ContentImageContainer);
