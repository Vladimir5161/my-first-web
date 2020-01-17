
const initialState = {
    filterImage: false,
    filterVideo: false,
    filterStory: false,
    addContent: "Add Content",
    filterContent: "filterContent",
    clicked: false,
}
const AddContentReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ONFILTERIMAGECLICK":
            return {
                ...state,
                addContent: state.addContent = "Add Image",
                filterImage: state.filterImage = true,
                filterVideo: state.filterVideo = false,
                filterStory: state.filterStory = false,
            }
            case "ONFILTERVIDEOCLICK":
                return {
                    ...state,
                    addContent: state.addContent = "Add Video",
                    filterImage: state.filterImage  = false,
                    filterVideo: state.filterVideo = true,
                    filterStory: state.filterStory = false,
                }
                case "ONFILTERSTORYCLICK":
                    return {
                        ...state,
                        addContent: state.addContent = "Add Story",
                        filterImage: state.filterImage  =  false,
                        filterVideo: state.filterVideo = false,
                        filterStory: state.filterStory = true,
                    }
                case "ONCLICKFILTERBUTTON":
                    return {
                        ...state,
                        filterContent: state.filterContent = "filterContentActive",
                        clicked: state.clicked = true,
                    }
                case "ONDECLICKFILTERBUTTON": 
                    return {
                        ...state,
                        filterContent: state.filterContent = "filterContent",
                        clicked: state.clicked = false,
                        filterVideo: state.filterVideo = false,
                        filterImage: state.filterImage = false,
                        filterStory: state.filterStory = false,
                        addContent: state.addContent = "Add Content",
                    }
                default :
                    return state
    }
}

export default AddContentReducer