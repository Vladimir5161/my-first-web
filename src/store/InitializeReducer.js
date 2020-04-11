import { getContents, getSlides } from "./DataReducer";
import { getNews } from "./newsDataReducer";
import { getLikedContent } from "./contentLikeReducer";
const initialState = {
    initialized: false,
    initializedNews: false,
};

const InitializeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INITIALIZE":
            return {
                ...state,
                initialized: (state.initialized = action.status),
            };
        case "INITIALIZENEWS":
            return {
                ...state,
                initializedNews: (state.initializedNews = action.status),
            };
        default:
            return state;
    }
};
export const initialize = (status) => ({ type: "INITIALIZE", status });
export const initializeNews = (status) => ({ type: "INITIALIZENEWS", status });
export const initializeApp = () => async (dispatch, getState) => {
    let movie = getState().movieChose1.movie;
    let season = getState().movieChose1.season;
    let imagesCount = getState().Data.imagesCount;
    let videosCount = getState().Data.videosCount;
    let storiesCount = getState().Data.storiesCount;
    try {
        await dispatch(getContents(season, imagesCount, movie, "image"));
        await dispatch(getContents(season, videosCount, movie, "video"));
        await dispatch(getContents(season, storiesCount, movie, "story"));
        await dispatch(getLikedContent());
        await dispatch(getSlides());
        await dispatch(initialize(true));
    } catch {
        return "something went wrong";
    }
};
export const initializeNewsThunk = () => async (dispatch, getState) => {
    let data = getState().newsData.newsData;
    console.log(data);
    try {
        await dispatch(getNews());
        dispatch(initializeNews(true));
    } catch {
        return "something went wrong";
    }
};

export default InitializeReducer;
