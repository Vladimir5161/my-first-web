import { combineReducers } from "redux";
import contentLikeReducer from "./contentLikeReducer";
import contentAddReducer from "./contentAddReducer";
import searchReducer from "./searchReducer"
import movieChoseReducer from "./movieChoseReduser"
import AddContentReducer from "./AddContentReducer"
import someReducer from "./someReducer"
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  likedContentItems: contentAddReducer,
  likedContent: contentLikeReducer,
  isLiked: contentLikeReducer,
  isClicked: searchReducer,
  searchField: searchReducer,
  movieChose1 : movieChoseReducer,
  AddContent: AddContentReducer,
  Rules: someReducer,
  filter: filterReducer
});

export default rootReducer;
