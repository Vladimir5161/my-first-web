import { omit } from "lodash";

const initialState = {
  countLike: 0,
  likedContentInfo: {},
  likedContentState: {},
}

const contentLikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ONLIKE":
      return {
        ...state,
        [action.id]: state.likedContentInfo[action.id] || 0
      };
      case "ONLIKED":
        return omit(state.likedContentInfo, action.id);
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
    case "ONCLEARALLCLICK":
      return  state = {}, {
        countLike: state[action.countLike] === 0,
            }
    default:
      return state;
  }
};
export default contentLikeReducer;
