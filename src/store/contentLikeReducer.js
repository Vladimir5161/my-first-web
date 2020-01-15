import { omit } from "lodash";

const initialState = {
  countLike: 0,
  Items: {},
  likedContentState: {},
}

const contentLikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ONLIKECOUNT":
      return {
        ...state,
        countLike: state.countLike   + 1
      }
    case "ONLIKEDCOUNT" :
      return {
        ...state,
        countLike: state.countLike  - 1
      }
    case "ONLIKEDCLICK":
      return {
        ...state,
        [action.id]: state.likedContentState[action.id] = false
      }
    case "ONLIKECLICK":
        return {
          ...state,
          [action.id] : state.likedContentState[action.id] = true
        }
    case "ONLIKEDCONTENTCLEAR":
      return   {
        countLike: state.countLike = 0,
        likedContentState: state.likedContentState = {},
            }
    default:
      return state;
  }
};
export default contentLikeReducer;
