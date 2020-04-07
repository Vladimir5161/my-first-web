export const getContentArreyImages = (state) => {
    return state.Data.firstContent.image;
};
export const getContentArreyVideos = (state) => {
    return state.Data.firstContent.video;
};
export const getContentArreyStories = (state) => {
    return state.Data.firstContent.story;
};
export const getNewsArrey = (state) => {
    let movie = state.movieChose1.movie;
    return state.newsData.NewsData.filter((item) => item.movie === movie);
};
