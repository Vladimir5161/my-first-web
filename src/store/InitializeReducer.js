import { getContents } from "./DataReducer";
import { getNews } from "./newsDataReducer";
const initialState = {
    initialized: false,
    initializedNews: false
};

const InitializeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INITIALIZE":
            return {
                ...state,
                initialized: (state.initialized = true)
            };
        case "INITIALIZENEWS":
            return {
                ...state,
                initializedNews: (state.initializedNews = true)
            };
        default:
            return state;
    }
};
export const initialize = () => ({ type: "INITIALIZE" });
export const initializedNews = () => ({ type: "INITIALIZENEWS" });

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

        await dispatch(initialize());
    } catch {
        return "something went wrong";
    }
};

export const initializeNews = () => async dispatch => {
    debugger;
    try {
        await dispatch(getNews());
        await dispatch(initializedNews());
    } catch {
        return "something went wrong";
    }
};

export default InitializeReducer;
