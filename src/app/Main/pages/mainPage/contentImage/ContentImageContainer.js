import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import ContentListImage from "./ContentListImage";
import { getContentArreyImages } from "../../../../selectors/content-selectors";
import { ContentContext } from "../ContentContext";

const ContentImageContainer = ({ itemsCount, firstContent }) => {
    let { season, movie, DataArrey, getContents, ShowMore } = useContext(
        ContentContext
    );
    let arraL = DataArrey.Data.filter(item => item["image"]).length;
    useEffect(() => {
        const refreshContent = () => {
            getContents(season, itemsCount, movie, "image");
        };
        refreshContent();
    }, [getContents, itemsCount, season, movie, arraL]);
    const onComponentChange = additionalCount => {
        ShowMore(additionalCount, season, movie, "image");
    };

    return (
        <ContentListImage
            onComponentChange={onComponentChange}
            firstContent={firstContent}
        />
    );
};
const mapStateToProps = state => ({
    itemsCount: state.Data.imagesCount,
    firstContent: getContentArreyImages(state)
});
export default connect(mapStateToProps)(ContentImageContainer);
