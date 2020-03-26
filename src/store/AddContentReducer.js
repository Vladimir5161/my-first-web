import { stopSubmit, reset } from "redux-form"
const initialState = {
    contentType: null,
    addContentClassName: "Edit Mode",
    addContentSecondText: null,
    filterContentClassName: "filterContent",
    clicked: false,
    userName: 'me',
    userPass: 'pass',
    editMode: false,
    isAuth: false
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
                clicked: state.clicked = true,
                filterContentClassName: state.filterContent = 'filterContentActive',
                addContentSecondText: state.addContentSecondText = "Close Edit Mode",
                editMode: state.editMode = true,
            }
        case "ONDECLICKFILTERBUTTON":
            return {
                ...state,
                filterContentClassName: state.filterContent = "filterContent",
                clicked: state.clicked = false,
                contentType: state.contentType = null,
                addContentClassName: state.addContent = "Edit Mode",
                addContentSecondText: state.addContentSecondText = null,
                editMode: state.editMode = false
            }
        case "ONPASSCHECKSUCCESS":
            debugger
            return {
                ...state,
                isAuth: state.isAuth = true
            }
        case "LOGOUT":
            return {
                ...state,
                isAuth: state.isAuth = false
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
export const LogOut = () => ({type: "LOGOUT"})

export const onDeClickFilterButton = () => dispatch => {
    dispatch(reset('inputPassword'));
    dispatch(reset('addContent'));
    dispatch(onDeClickFilterButtonFunc())
}
export const onPassCheckClick = (addLogin, addPassword, userName, userPass) => (dispatch) => {
    debugger
    if (addLogin === userName && addPassword === userPass) {
        dispatch(onPassCheckSuccess())
        dispatch(reset('inputPassword'));
        dispatch(reset('addContent'));
    }
    dispatch(stopSubmit("inputPassword", { _error: "wrong login or password" }))
}

export default AddContentReducer