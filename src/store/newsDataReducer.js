import { webAPI } from "../app/api/api";
import { stopSubmit, reset } from "redux-form";

const initialState = {
    NewsData: [],
    clickedNewsButton: false,
    editModeNews: false,
    isFetching: []
};

const newsDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPLOAD":
            let arrayNew = [...state.NewsData];
            for (let i of action.news) {
                if (arrayNew.length === 0) {
                    arrayNew.push(i);
                } else if (arrayNew.some(element => element.id === i.id)) {
                    let element = [
                        ...arrayNew.filter(item => item.id === i.id)
                    ];
                    if (!element[0].hasOwnProperty("keyFirebase")) {
                        let itemForDelete = arrayNew.indexOf(element[0]);
                        arrayNew.splice(itemForDelete, 1, i);
                        console.log(itemForDelete);
                    }
                } else {
                    arrayNew.push(i);
                }
            }
            return {
                ...state,
                NewsData: (state.NewsData = arrayNew)
            };
        case "SHOWADDNEWS":
            return {
                ...state,
                clickedNewsButton: (state.clickedNewsButton = true),
                editModeNews: (state.editModeNews = true)
            };
        case "HIDEADDNEWS":
            return {
                ...state,
                clickedNewsButton: (state.clickedNewsButton = false),
                editModeNews: (state.editModeNews = false)
            };
        case "DELETENEWS":
            return {
                ...state,
                NewsData: state.NewsData.filter(item => item.id !== action.id)
            };
        case "ADDNEWS":
            return {
                ...state,
                NewsData: [...state.NewsData, action.news]
            };
        case "ISFETCHING":
            return {
                ...state,
                isFetching: action.status
                    ? [...state.isFetching, action.id]
                    : state.isFetching.filter(id => id !== action.id)
            };
        default:
            return state;
    }
};
export const Fetching = (status, id) => ({ type: "ISFETCHING", status, id });
export const uploadNews = news => ({ type: "UPLOAD", news });
export const showAddNews = () => ({ type: "SHOWADDNEWS" });
export const hideAddNews = () => ({ type: "HIDEADDNEWS" });
export const addNewsItem = news => ({ type: "ADDNEWS", news });
export const deleteNewsItem = id => ({ type: "DELETENEWS", id });

export const addNews = (newsName, newsText, newsImage) => async (
    dispatch,
    getState
) => {
    let Data = getState().newsData.NewsData;
    let newId = () => {
        if (Data.length < 1) {
            return `1`;
        } else {
            let idCount = Data.pop();
            Data.push(idCount);
            let newId = idCount.id + 1;
            return newId;
        }
    };
    let news = {
        data: new Date().toLocaleString(),
        id: newId(),
        newsImage: newsImage || "",
        newsName,
        newsText
    };
    try {
        dispatch(Fetching(true, "addNews"));
        await webAPI.addNews(news);
        dispatch(addNewsItem(news));
        dispatch(reset("addNews"));
        dispatch(Fetching(false, "addNews"));
    } catch {
        dispatch(stopSubmit("addNews", { _error: "something went wrong" }));
    }
};
export const deleteNewsThunk = (id, keyFirebase) => async dispatch => {
    try {
        dispatch(Fetching(true, id));
        await webAPI.deleteNews(keyFirebase);
        dispatch(deleteNewsItem(id));
        dispatch(Fetching(false, id));
    } catch {
        return "something went wrong";
    }
};

export const getNews = () => async dispatch => {
    try {
        let responce = await webAPI.getNews();
        let arrayNews = Object.entries(responce);
        arrayNews.map(item => (item[1].keyFirebase = item[0]));
        dispatch(uploadNews(Object.values(responce)));
    } catch {
        return "something went wrong";
    }
};
export default newsDataReducer;
