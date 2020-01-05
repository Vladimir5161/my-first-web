import { omit } from "lodash";

const contentLikeReducer = (state = {

}, action) => {
  switch (action.type) {
    case "ONLIKED":
      return {
        ...state,
        [action.id]: state[action.id] || 0
      };
    case "ONLIKECOUNT":
      return {
        ...state,
        [action.countLike]: (state[action.countLike] || 0) + 1
      }
    case "ONLIKE":
      return omit(state, action.id);
    case "ONLIKEDCOUNT" :
      return {
        ...state,
        [action.countLike]: (state[action.countLike] || 0) - 1
      }
    case "ONCLOSEBUTTONCLICK" :
      return omit(state, action.id)
    case "ONLIKEDCLICK":
      return {
        ...state,
        [action.id] : false
      }
    case "ONLIKECLICK":
        return {
          ...state,
          [action.id] : true
        }
    default:
      return state;
  }
};
export default contentLikeReducer;
