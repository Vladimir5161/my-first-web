import { omit } from "lodash";



const contentAddReducer = (state = {} , action) => {
  switch (action.type) {
    case "ONLIKE":
      return {
        ...state,
        [action.id]: (state[action.id] || 0) + 1
      }
      case "ONLIKED":
        return omit(state, action.id);
    case "ONCLEARALLCLICK":
      return  state = {}
    default:
      return state;

  }
};
console.log(contentAddReducer.state)
export default contentAddReducer;
