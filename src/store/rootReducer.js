import { combineReducers } from "redux";
import contentLikeReducer from "./contentLikeReducer";

const rootReducer = combineReducers({
  likedContent: contentLikeReducer,
  likedContentState: contentLikeReducer,
  countLike: contentLikeReducer
});

export default rootReducer;
