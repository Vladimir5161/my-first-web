import { stopSubmit, reset } from "redux-form"
const initialState = {
    contentType: null,
    addContentClassName: "Edit Mode",
    addContentSecondText: null,
    filterContentClassName: "filterContent",
    clicked: false,
    passwordWindow: "passwordWindowNo",
    userName: 'me',
    userPass: 'pass',
    editMode: false
}
const AddContentReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ONFILTERIMAGECLICK":
            return {
                ...state,
                addContentClassName: state.addContent = "Add Image",
                contentType: state.contentType = "image",
            }
        case "ONFILTERVIDEOCLICK":
            return {
                ...state,
                addContentClassName: state.addContent = "Add Video",
                contentType: state.contentType = "video",
            }
        case "ONFILTERSTORYCLICK":
            return {
                ...state,
                addContentClassName: state.addContent = "Add Story",
                contentType: state.contentType = "story",
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
                filterContentClassName: state.filterContent = "filterContent",
                clicked: state.clicked = false,
                contentType: state.contentType = null,
                addContentClassName: state.addContent = "Add Content",
                editMode: state.editMode = false,
                addContentSecondText: state.addContentSecondText = null
            }
        case "ONPASSCHECKSUCCESS":
            return {
                ...state,
                passwordWindow: state.passwordWindow = "passwordWindowNo",
                filterContentClassName: state.filterContent = 'filterContentActive',
                addContentSecondText: state.addContentSecondText = "Close Edit Mode",
                editMode: state.editMode = true,
            }
        default:
            return state
    }
}
export const onPassCheckSuccess = () => ({ type: "ONPASSCHECKSUCCESS" })
export const onDeClickFilterButtonFunc = () => ({ type: "ONDECLICKFILTERBUTTON" })
export const onClickFilterButton = () => ({ type: "ONCLICKFILTERBUTTON" })
export const onFilterImageClick = () => ({ type: "ONFILTERIMAGECLICK" })
export const onFilterVideoClick = () => ({ type: "ONFILTERVIDEOCLICK" })
export const onFilterStoryClick = () => ({ type: "ONFILTERSTORYCLICK" })
export const outSideClickFunc = () => dispatch => {
    dispatch(reset('addContent'))
}
export const onDeClickFilterButton = () => dispatch => {
    dispatch(reset('inputPassword'));
    dispatch(reset('addContent'));
    dispatch(onDeClickFilterButtonFunc())
}
export const onPassCheckClick = (addLogin, addPassword, userName, userPass) => (dispatch) => {
    if (addLogin === userName && addPassword === userPass) {
        dispatch(onPassCheckSuccess())
        dispatch(reset('inputPassword'));
        dispatch(reset('addContent'));
    }
    dispatch(stopSubmit("inputPassword", { _error: "wrong login or password" }))
}

export default AddContentReducer