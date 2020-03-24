const initialState = {
    images: "images",
    videos: "videos",
    stories: "stories",
}

const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ONCLICKPHOTO":
            return {
                images: state.images = "images",
                videos: state.videos = "activeNo",
                stories: state.stories = "activeNo",
            }
        case "ONCLICKVIDEO":
            return {
                images: state.images = "activeNo",
                videos: state.videos = "videos",
                stories: state.stories = "activeNo",
            }
        case "ONCLICKSTORY":
            return {
                images: state.images = "activeNo",
                videos: state.videos = "activeNo",
                stories: state.stories = "stories",
                }
        case "ONCLICKALL":
            return {
                images: state.images = "images",
                videos: state.videos = "videos",
                stories: state.stories = "stories",
                }
        default: 
        return state;
    }
}

export default filterReducer