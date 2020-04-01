import { stopSubmit, reset } from "redux-form";
import { webAPI } from "../app/api/api";

const initialState = {
    Data: [],
    SlidesData: [],
    imagesCount: 3,
    videosCount: 2,
    storiesCount: 2,
    firstContent: {
        image: [],
        video: [],
        story: []
    },
    isFetching: []
};

const DataReducer = (state = initialState, action) => {
    let newState = { ...state };
    newState.Data = [...state.Data];
    switch (action.type) {
        case "CHANGECONTENTSCOUNT":
            let ContentAll = newState.Data.filter(
                item => item.movie === action.movie
            );
            let ContentType = ContentAll.filter(
                item => item.season === action.season
            );
            let Content = ContentType.filter(item => item[action.contentType]);
            let countFunc = (CountType, contentType) => {
                let count =
                    newState.firstContent[contentType].length ===
                        newState[CountType] &&
                    newState.firstContent[contentType].length !== Content.length
                        ? newState[CountType] + action.additionalCount
                        : action.additionalCount;
                return count;
            };
            if (action.contentType === "image") {
                return {
                    ...state,
                    imagesCount: (state.imagesCount = countFunc(
                        `imagesCount`,
                        action.contentType
                    ))
                };
            } else if (action.contentType === "video") {
                return {
                    ...state,
                    videosCount: (state.videosCount = countFunc(
                        `videosCount`,
                        action.contentType
                    ))
                };
            } else if (action.contentType === "story") {
                return {
                    ...state,
                    storiesCount: (state.storiesCount = countFunc(
                        `storiesCount`,
                        action.contentType
                    ))
                };
            } else return state;
        case "ONDEFAULTCOUNTS":
            return {
                ...state,
                imagesCount: (state.imagesCount = 3),
                videosCount: (state.videosCount = 2),
                storiesCount: (state.storiesCount = 2)
            };
        case "UPLOADCONTENT":
            let currentContent = [];
            let ContentNew = newState.Data.filter(
                item => item.movie === action.movie
            );
            let ContentTypes = ContentNew.filter(
                item => item.season === action.season
            );
            let ContentOf = ContentTypes.filter(
                item => item[action.contentType]
            );
            let lastItem =
                action.itemsCount > ContentOf.length
                    ? ContentOf.length
                    : action.itemsCount;
            let newItems = ContentOf.slice(0, lastItem);
            for (let i = 0; i < lastItem; i++) {
                let item = newItems.shift();

                currentContent.push(item);
            }
            return {
                ...newState,
                firstContent: {
                    ...newState.firstContent,
                    [action.contentType]: currentContent
                }
            };
        case "DOWNLOADCONTENT":
            let arrayNew = [
                ...state.Data.filter(item => item[action.contentType])
            ];
            for (let content of action.responce) {
                if (arrayNew.length === 0) {
                    arrayNew.push(content);
                } else if (
                    arrayNew.some(element => element.id === content.id)
                ) {
                    let element = [
                        ...arrayNew.filter(item => item.id === content.id)
                    ];
                    if (!element[0].hasOwnProperty("keyFirebase")) {
                        let itemForDelete = arrayNew.indexOf(element[0]);
                        arrayNew.splice(itemForDelete, 1, content);
                    }
                } else {
                    arrayNew.push(content);
                }
            }
            return {
                ...state,
                Data: [
                    ...state.Data.filter(item => !item[action.contentType]),
                    ...arrayNew
                ]
            };
        case "DOWNLOADSLIDES":
            let arraySlides = [];
            for (let i of action.slides) {
                if (newState.SlidesData.length === 0) {
                    arraySlides.push(i);
                } else if (
                    newState.SlidesData.some(element => element.id === i.id)
                ) {
                    return state;
                } else arraySlides.push(i);
            }
            return {
                ...state,
                SlidesData: state.SlidesData.concat(arraySlides)
            };
        case "DELETECONTENT":
            return {
                ...state,
                Data: state.Data.filter(item => item.id !== action.id)
            };
        case "ADDCONTENT":
            return {
                ...state,
                Data: [...state.Data, action.content]
            };
        case "ISFETCHINGDELETE":
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
export const Fetching = (status, id) => ({
    type: "ISFETCHINGDELETE",
    status,
    id
});
export const addContentNew = content => ({ type: "ADDCONTENT", content });
export const ShowMore = (additionalCount, season, movie, contentType) => ({
    type: "CHANGECONTENTSCOUNT",
    additionalCount,
    season,
    movie,
    contentType
});
export const uploadContent = (season, itemsCount, movie, contentType) => ({
    type: "UPLOADCONTENT",
    season,
    itemsCount,
    movie,
    contentType
});
export const downloadContent = (responce, contentType) => ({
    type: "DOWNLOADCONTENT",
    responce,
    contentType
});
export const downloadSlides = slides => ({ type: "DOWNLOADSLIDES", slides });
export const DeleteContent = id => ({ type: "DELETECONTENT", id });

export const deleteContent = (
    id,
    keyFirebase,
    contentType
) => async dispatch => {
    try {
        dispatch(Fetching(true, id));
        await webAPI.deleteContent(keyFirebase, contentType);
        dispatch(DeleteContent(id));
        dispatch(Fetching(false, id));
    } catch {
        return "something went wrong";
    }
};

export const getContents = (
    season,
    itemsCount,
    movie,
    contentType
) => async dispatch => {
    try {
        let responce = await webAPI.getContent(contentType);
        let slides = await webAPI.getSlides();
        let contentArray = Object.entries(responce);
        contentArray.map(item => (item[1].keyFirebase = item[0]));
        dispatch(downloadContent(Object.values(responce), contentType));
        dispatch(downloadSlides(Object.values(slides)));
        dispatch(uploadContent(season, itemsCount, movie, contentType));
    } catch {
        return "something went wrong";
    }
};

export const addContent = (
    movie,
    season,
    addImage,
    addVideo,
    addVideoName,
    addStory,
    addStoryText,
    addStoryImage,
    contentType
) => async (dispatch, getState) => {
    let Data = getState().Data.Data;
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
    let Arrey = [];
    Data.filter(item => item[contentType]).map(i => {
        if (
            (i.image === addImage && i.image !== undefined) ||
            (i.video === addVideo && i.video !== undefined) ||
            (i.storyImage === addStoryImage && i.storyImage !== undefined)
        ) {
            let ids = 1;
            Arrey.push(ids++);
        }
        return undefined;
    });
    if (Arrey.length > 0) {
        dispatch(stopSubmit("addContent", { _error: "Dublicate content" }));
    } else {
        if (contentType === "image") {
            let newImage = {
                id: newId(),
                season: season,
                movie: movie,
                image: addImage
            };
            try {
                dispatch(Fetching(true, "addContent"));
                await webAPI.addContent(newImage, contentType);
                dispatch(addContentNew(newImage));
                dispatch(reset("addContent"));
                dispatch(Fetching(false, "addContent"));
            } catch {
                return "some error";
            }
        } else if (contentType === "video") {
            let newVideo = {
                id: newId(),
                season: season,
                movie: movie,
                video: addVideo,
                name: addVideoName
            };
            try {
                dispatch(Fetching(true, "addContent"));
                await webAPI.addContent(newVideo, contentType);
                dispatch(addContentNew(newVideo));
                dispatch(reset("addContent"));
                dispatch(Fetching(false, "addContent"));
            } catch {
                return "some error";
            }
        } else if (contentType === "story") {
            let newStory = {
                id: newId(),
                season: season,
                movie: movie,
                story: addStory,
                name: addStoryText,
                imageContent: addStoryImage
            };
            try {
                dispatch(Fetching(true, "addContent"));
                await webAPI.addContent(newStory, contentType);
                dispatch(addContentNew(newStory));
                dispatch(reset("addContent"));
                dispatch(Fetching(false, "addContent"));
            } catch {
                return "some error";
            }
        }
    }
};
export default DataReducer;
