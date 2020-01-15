import { combineReducers } from "redux";
import contentLikeReducer from "./contentLikeReducer";
import contentAddReducer from "./contentAddReducer";
import searchReducer from "./searchReducer"
import movieChoseReducer from "./movieChoseReduser"

const rootReducer = combineReducers({
  likedContentItems: contentAddReducer,
  likedContent: contentLikeReducer,
  isLiked: contentLikeReducer,
  isClicked: searchReducer,
  searchField: searchReducer,
  movieChose1 : movieChoseReducer,
});

export default rootReducer;
