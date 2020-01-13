import { combineReducers } from "redux";
import contentLikeReducer from "./contentLikeReducer";
import searchReducer from "./searchReducer"

const rootReducer = combineReducers({
  likedContent: contentLikeReducer,
  likedContentState: contentLikeReducer,
  countLike: contentLikeReducer,
  isClicked: searchReducer,
  searchField: searchReducer

});

export default rootReducer;
