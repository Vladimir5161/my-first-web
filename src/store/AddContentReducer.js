
const initialState = {
    filterImage: false,
    filterVideo: false,
    filterStory: false,
    addContent: "Add Content",
    filterContent: "filterContent",
    clicked: false,
    passwordWindow: "passwordWindowNo",
    Name: "",
    Pass: "",
    userName: "",
    userPass: "",

    userInfoField: "userInfoField",

}
const AddContentReducer = (state = initialState, action) => {

    switch (action.type) {
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
                filterImage: state.filterImage = false,
                filterVideo: state.filterVideo = true,
                filterStory: state.filterStory = false,
            }
        case "ONFILTERSTORYCLICK":
            return {
                ...state,
                addContent: state.addContent = "Add Story",
                filterImage: state.filterImage = false,
                filterVideo: state.filterVideo = false,
                filterStory: state.filterStory = true,
            }
        case "ONCLICKFILTERBUTTON":
            return {
                ...state,
                passwordWindow: state.passwordWindow = "passwordWindow",
                clicked: state.clicked = true,
            }
        case "ONDECLICKFILTERBUTTON":
            return {
                ...state,
                passwordWindow: state.passwordWindow = "passwordWindowNo",
                filterContent: state.filterContent = "filterContent",
                clicked: state.clicked = false,
                filterVideo: state.filterVideo = false,
                filterImage: state.filterImage = false,
                filterStory: state.filterStory = false,
                addContent: state.addContent = "Add Content",
                userInfoField: state.userInfoField = "userInfoField",
                Name: state.Name = "",
                Pass: state.Pass = "",
            }
        case "ONNAMECHANGE":
            return {
                ...state,
                Name: state.Name = action.Name
            }
        case "ONPASSCHANGE":
            return {
                ...state,
                Pass: state.Pass = action.Pass
            }
        case "ONUSERFILEDCLICK":
            return {
                ...state,
                userInfoField: state.userInfoField = "userInfoField"
            }
        case "ONPASSCHECKCLICKSUCCESS":
            return {
                ...state,
                passwordWindow: state.passwordWindow = "passwordWindowNo",
                filterContent: state.filterContent = "filterContentActive",
                Name: state.Name = "",
                Pass: state.Pass = "",

            }
        case "ONPASSCHECKCLICKNOT":
            return {
                ...state,
                userInfoField: state.userInfoField = "userInfoFieldRed",
                Name: state.Name = "",
                Pass: state.Pass = "",
            }
        case "ONPASSCHECKCLICK":
            return {
                ...state,
                Name: state.Name = "",
                Pass: state.Pass = "",
            }
        default:
            return state
    }
}

export default AddContentReducer