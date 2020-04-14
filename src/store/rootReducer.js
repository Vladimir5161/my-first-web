import { combineReducers } from "redux";
import contentLikeReducer from "./contentLikeReducer";
import movieChoseReducer from "./movieChoseReduser";
import AddContentReducer from "./AddContentReducer";
import sliderReducer from "./sliderReducer";
import filterReducer from "./filterReducer";
import newsDataReducer from "./newsDataReducer";
import DataReducer from "./DataReducer";
import { reducer as formReducer } from "redux-form";
import InitializeReducer from "./InitializeReducer";
import AuthReducer from "./AuthReducer";

const rootReducer = combineReducers({
    likedContent: contentLikeReducer,
    movieChose1: movieChoseReducer,
    AddContent: AddContentReducer,
    slides: sliderReducer,
    filter: filterReducer,
    newsData: newsDataReducer,
    Data: DataReducer,
    form: formReducer,
    initializeApp: InitializeReducer,
    auth: AuthReducer,
});

export default rootReducer;
