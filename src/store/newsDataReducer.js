import { webAPI } from "../app/api/api";
import { stopSubmit, reset } from "redux-form";
import { ErrorMessage } from "./DataReducer";

const initialState = {
    NewsData: [],
    clickedNewsButton: false,
    editModeNews: false,
    isFetching: [],
};

const newsDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPLOAD":
            let arrayNew = [...state.NewsData];
            for (let i of action.news) {
                if (arrayNew.length === 0) {
                    arrayNew.push(i);
                } else if (arrayNew.some((element) => element.id === i.id)) {
                    let element = [
                        ...arrayNew.filter((item) => item.id === i.id),
                    ];
                    let checkArr = [];
                    for (let key in i) {
                        if (key !== element[key]) {
                            checkArr.push(1);
                        }
                    }
                    if (checkArr.length !== 0) {
                        let itemForDelete = arrayNew.indexOf(element[0]);
                        arrayNew.splice(itemForDelete, 1, i);
                    } else if (!element[0].hasOwnProperty("keyFirebase")) {
                        let itemForDelete = arrayNew.indexOf(element[0]);
                        arrayNew.splice(itemForDelete, 1, i);
                    }
                } else {
                    arrayNew.push(i);
                }
            }
            return {
                ...state,
                NewsData: (state.NewsData = arrayNew),
            };
        case "SHOWADDNEWS":
            return {
                ...state,
                clickedNewsButton: (state.clickedNewsButton = true),
                editModeNews: (state.editModeNews = true),
            };
        case "HIDEADDNEWS":
            return {
                ...state,
                clickedNewsButton: (state.clickedNewsButton = false),
                editModeNews: (state.editModeNews = false),
            };
        case "DELETENEWS":
            return {
                ...state,
                NewsData: state.NewsData.filter(
                    (item) => item.id !== action.id
                ),
            };
        case "ADDNEWS":
            return {
                ...state,
                NewsData: [...state.NewsData, action.news],
            };
        case "ISFETCHING":
            return {
                ...state,
                isFetching: action.status
                    ? [...state.isFetching, action.id]
                    : state.isFetching.filter((id) => id !== action.id),
            };
        case "UPDATENEWS":
            return {
                ...state,
                NewsData: state.NewsData.map((n) =>
                    n.id === action.id
                        ? {
                              ...n,
                              data: action.news.data || n.data,
                              newsImage: action.news.newsImage || n.newsImage,
                              newsName: action.news.newsName || n.newsName,
                              newsText: action.news.newsText || n.newsText,
                          }
                        : n
                ),
            };
        default:
            return state;
    }
};
export const updateNews = (news, id) => ({ type: "UPDATENEWS", news, id });
export const Fetching = (status, id) => ({ type: "ISFETCHING", status, id });
export const uploadNews = (news) => ({ type: "UPLOAD", news });
export const showAddNews = () => ({ type: "SHOWADDNEWS" });
export const hideAddNews = () => ({ type: "HIDEADDNEWS" });
export const addNewsItem = (news) => ({ type: "ADDNEWS", news });
export const deleteNewsItem = (id) => ({ type: "DELETENEWS", id });

export const addNews = (newsName, newsText, newsImage, movie) => async (
    dispatch,
    getState
) => {
    let Data = getState().newsData.NewsData;
    let newId = () => {
        if (Data.length < 1) {
            return 1;
        } else {
            let DataForId = Data.sort(function (a, b) {
                return a.id - b.id;
            });
            let idCount = DataForId[Data.length - 1];
            debugger;
            let newId = +idCount.id + 1;
            return newId;
        }
    };
    let news = {
        data: new Date().toLocaleString(),
        id: newId(),
        newsImage: newsImage || "",
        newsName,
        newsText,
        movie,
    };
    if (Data.length >= 50) {
        dispatch(ErrorMessage("not possible to add more news"));
    } else {
        try {
            dispatch(Fetching(true, "addNews"));
            await webAPI.addNews(news);
            dispatch(addNewsItem(news));
            dispatch(reset("addNews"));
            dispatch(Fetching(false, "addNews"));
        } catch {
            dispatch(stopSubmit("addNews", { _error: "something went wrong" }));
        }
    }
};
export const deleteNewsThunk = (id, keyFirebase) => async (dispatch) => {
    try {
        dispatch(Fetching(true, id));
        await webAPI.deleteNews(keyFirebase);
        dispatch(deleteNewsItem(id));
        dispatch(Fetching(false, id));
    } catch {
        dispatch(ErrorMessage("unable to delete"));
    }
};

export const getNews = () => async (dispatch) => {
    try {
        let responce = await webAPI.getNews();
        let arrayNews = Object.entries(responce);
        arrayNews.map((item) => (item[1].keyFirebase = item[0]));
        dispatch(uploadNews(Object.values(responce)));
    } catch {
        dispatch(
            ErrorMessage("something went wrong when trying to upload content")
        );
    }
};
export const updateNewsThunk = (
    data,
    newsName,
    newsText,
    newsImage,
    id,
    keyFirebase,
    movie
) => async (dispatch) => {
    let news = {
        data: data,
        id: id,
        newsImage,
        newsName,
        newsText,
        movie,
    };
    try {
        await webAPI.updateNews(news, keyFirebase);
        dispatch(updateNews(news, id));
    } catch {
        dispatch(ErrorMessage("something went wrong"));
    }
};

export default newsDataReducer;
