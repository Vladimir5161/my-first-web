import { combineReducers } from "redux";
import contentLikeReducer from "./contentLikeReducer";
import searchReducer from "./searchReducer"

const rootReducer = combineReducers({
  content: contentLikeReducer,
  likedContent: contentLikeReducer,
  isLiked: contentLikeReducer,
  isClicked: searchReducer,
  searchField: searchReducer

});

export default rootReducer;
