import { getContentMap } from "../../store/DataReducer";

export const exactContentId = (state) => {
    return getContentMap(state.Data.Data);
};

export const newsDataIdSelector = (state) => {
    return getContentMap(state.newsData.NewsData);
};
