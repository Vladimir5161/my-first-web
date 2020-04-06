import React, { useContext, useEffect } from "react";
import ContentListStory from "./ContentListStory.js";
import { connect } from "react-redux";
import { getContentArreyStories } from "../../../../selectors/content-selectors";
import { ContentContext } from "../ContentContext.js";

const ContentStoryContainer = ({ firstContent }) => {
    let {
        season,
        movie,
        DataArrey,
        getContents,
        ShowMore,
        itemsCountStory,
    } = useContext(ContentContext);
    let arraL = DataArrey.Data.filter((item) => item["story"]).length;
    useEffect(() => {
        const refreshContent = () => {
            getContents(season, itemsCountStory, movie, "story");
        };
        refreshContent();
    }, [getContents, itemsCountStory, season, movie, arraL]);
    const onComponentChange = (additionalCount) => {
        ShowMore(additionalCount, season, movie, "story");
    };

    return (
        <ContentListStory
            onComponentChange={onComponentChange}
            firstContent={firstContent}
        />
    );
};

const mapStateToProps = (state) => ({
    firstContent: getContentArreyStories(state),
});

export default connect(mapStateToProps)(ContentStoryContainer);
