const initialState = {
    images: "images",
    videos: "videos",
    stories: "stories",
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FILTER":
            if (action.filterType === "image") {
                return {
                    images: (state.images = "images"),
                    videos: (state.videos = "activeNo"),
                    stories: (state.stories = "activeNo"),
                };
            } else if (action.filterType === "video") {
                return {
                    images: (state.images = "activeNo"),
                    videos: (state.videos = "videos"),
                    stories: (state.stories = "activeNo"),
                };
            } else if (action.filterType === "story") {
                return {
                    images: (state.images = "activeNo"),
                    videos: (state.videos = "activeNo"),
                    stories: (state.stories = "stories"),
                };
            } else if (action.filterType === "all") {
                return {
                    images: (state.images = "images"),
                    videos: (state.videos = "videos"),
                    stories: (state.stories = "stories"),
                };
            } else return state;
        default:
            return state;
    }
};
export const FilterFunc = (filterType) => ({ type: "FILTER", filterType });

export default filterReducer;
