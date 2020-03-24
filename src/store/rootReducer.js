import { combineReducers } from "redux";
import contentLikeReducer from "./contentLikeReducer";
import movieChoseReducer from "./movieChoseReduser"
import AddContentReducer from "./AddContentReducer"
import someReducer from "./someReducer"
import filterReducer from "./filterReducer";
import newsDataReducer from "./newsDataReducer";
import DataReducer from "./DataReducer";
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  likedContentItems: contentLikeReducer,
  likedContent: contentLikeReducer,
  isLiked: contentLikeReducer,
  movieChose1: movieChoseReducer,
  AddContent: AddContentReducer,
  Rules: someReducer,
  filter: filterReducer,
  newsData: newsDataReducer,
  Data: DataReducer,
  Pass: AddContentReducer,
  form: formReducer,
});

export default rootReducer;
