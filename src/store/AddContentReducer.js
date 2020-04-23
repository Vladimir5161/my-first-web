import { reset } from "redux-form";
const initialState = {
    contentType: null,
    addContentClassName: "Edit Mode",
    addContentSecondText: null,
    filterContentClassName: "filterContent",
    clicked: false,
    editMode: false
};
const AddContentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ONFILTERIMAGECLICK":
            return {
                ...state,
                addContentClassName: (state.addContent = "Add Image"),
                contentType: (state.contentType = "image")
            };
        case "ONFILTERVIDEOCLICK":
            return {
                ...state,
                addContentClassName: (state.addContent = "Add Video"),
                contentType: (state.contentType = "video")
            };
        case "ONFILTERSTORYCLICK":
            return {
                ...state,
                addContentClassName: (state.addContent = "Add Story"),
                contentType: (state.contentType = "story")
            };
        case "ONCLICKFILTERBUTTON":
            return {
                ...state,
                clicked: (state.clicked = true),
                filterContentClassName: (state.filterContent =
                    "filterContentActive"),
                addContentSecondText: (state.addContentSecondText =
                    "Close Edit Mode"),
                editMode: (state.editMode = true)
            };
        case "ONDECLICKFILTERBUTTON":
            return {
                ...state,
                filterContentClassName: (state.filterContent = "filterContent"),
                clicked: (state.clicked = false),
                contentType: (state.contentType = null),
                addContentClassName: (state.addContent = "Edit Mode"),
                addContentSecondText: (state.addContentSecondText = null),
                editMode: (state.editMode = false)
            };
        default:
            return state;
    }
};

export const onDeClickFilterButtonFunc = () => ({
    type: "ONDECLICKFILTERBUTTON"
});
export const onClickFilterButton = () => ({ type: "ONCLICKFILTERBUTTON" });
export const onFilterImageClick = () => ({ type: "ONFILTERIMAGECLICK" });
export const onFilterVideoClick = () => ({ type: "ONFILTERVIDEOCLICK" });
export const onFilterStoryClick = () => ({ type: "ONFILTERSTORYCLICK" });
export const onDeClickFilterButton = () => dispatch => {
    dispatch(reset("inputPassword"));
    dispatch(reset("addContent"));
    dispatch(onDeClickFilterButtonFunc());
};

export default AddContentReducer;
