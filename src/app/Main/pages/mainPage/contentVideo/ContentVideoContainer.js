import React, { useContext, useEffect } from "react";
import ContentListVideo from "./ContentListVideo.js";
import { connect } from "react-redux";
import { getContentArreyVideos } from "../../../../selectors/content-selectors";
import { ContentContext } from "../ContentContext.js";

const ContentVideoContainer = React.memo(({ firstContent, itemsCount }) => {
    let { season, movie, DataArrey, getContents, ShowMore } = useContext(
        ContentContext
    );
    let arraL = DataArrey.Data.filter((item) => item["video"]).length;
    useEffect(() => {
        const refreshContent = () => {
            getContents(season, itemsCount, movie, "video");
        };
        refreshContent();
    }, [getContents, itemsCount, season, movie, arraL]);
    const onComponentChange = (additionalCount) => {
        ShowMore(additionalCount, season, movie, "video");
    };

    return (
        <ContentListVideo
            onComponentChange={onComponentChange}
            firstContent={firstContent}
        />
    );
});

const mapStateToProps = (state) => ({
    itemsCount: state.Data.videosCount,
    firstContent: getContentArreyVideos(state),
});

export default connect(mapStateToProps)(ContentVideoContainer);
