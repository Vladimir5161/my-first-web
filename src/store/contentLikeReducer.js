import { omit } from "lodash";

const initialState = {
  countLike: 0,
  Items: {},
  likedContentState: {},
  likedContentIdArrey: {}
}

const contentLikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ONLIKECOUNT":
      return {
        ...state,
        countLike: state.countLike + 1
      }
    case "ONLIKEDCOUNT":
      return {
        ...state,
        countLike: state.countLike - 1
      }
    case "ONLIKEDCLICK":
      return {
        ...state,
        [action.id]: state.likedContentState[action.id] = false
      }
    case "ONLIKECLICK":
      return {
        ...state,
        [action.id]: state.likedContentState[action.id] = true
      }
    case "ONLIKEDCONTENTCLEAR":
      return {
        countLike: state.countLike = 0,
        likedContentState: state.likedContentState = {},
      }
    case "ONLIKE":
      return {
        ...state,
        [action.id]: state.likedContentIdArrey[action.id] = (state.likedContentIdArrey[action.id] || 0) + 1
      }
    case "ONLIKED":
      return {
        ...state,
        likedContentIdArrey: omit(state.likedContentIdArrey, action.id)
      }

    case "ONCLEARALLCLICK":
      return {
        ...state,
        likedContentIdArrey: state.likedContentIdArrey = {}
      }
    default:
      return state;
  }
};
export default contentLikeReducer;
