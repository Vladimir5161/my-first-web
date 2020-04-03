import { getContents, getSlides } from "./DataReducer";
const initialState = {
    initialized: false,
};

const InitializeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INITIALIZE":
            return {
                ...state,
                initialized: (state.initialized = true),
            };
        default:
            return state;
    }
};
export const initialize = () => ({ type: "INITIALIZE" });

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
        await dispatch(getSlides());
        await dispatch(initialize());
    } catch {
        return "something went wrong";
    }
};

export default InitializeReducer;
