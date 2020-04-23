import { webAPI } from "../app/api/api";
import { ErrorMessage } from "./DataReducer";

const initialState = {
    IdArrey: [],
    isFetching: [],
};

const contentLikeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ONLIKE":
            return {
                ...state,
                IdArrey: [...state.IdArrey, action.id],
            };
        case "ONLIKED":
            return {
                ...state,
                IdArrey: state.IdArrey.filter(
                    (item) => item.id !== action.keyFirebase
                ),
            };
        case "ONCLEARALLCLICK":
            return {
                ...state,
                IdArrey: (state.IdArrey = []),
            };
        case "GETLIKEDCONTENT":
            let array = [...state.IdArrey];
            action.responce.map((key) => {
                if (array.some((item) => item.id === key.id)) {
                    let object = array.filter((item) => item.id === key.id);
                    let exactObj = object[0];
                    if (!exactObj.hasOwnProperty("keyForDelete")) {
                        let itemForDelete = array.indexOf(object[0]);
                        array.splice(itemForDelete, 1, key);
                    } else return state;
                } else if (array.length === 0) {
                    array.push(key);
                } else {
                    array.push(key);
                }
                return state;
            });
            return {
                ...state,
                IdArrey: array,
            };
        case "ISFETCHINGDELETE":
            return {
                ...state,
                isFetching: action.status
                    ? [...state.isFetching, action.id]
                    : state.isFetching.filter((id) => id !== action.id),
            };
        default:
            return state;
    }
};
export const Fetching = (status, id) => ({
    type: "ISFETCHINGDELETE",
    status,
    id,
});
export const onLike = (id) => ({ type: "ONLIKE", id });
export const onLiked = (keyFirebase) => ({ type: "ONLIKED", keyFirebase });
export const onLikeCount = (status) => ({ type: "ONLIKECOUNT", status });
export const clearAllLiked = () => ({ type: "ONCLEARALLCLICK" });
export const getLikedContentArray = (responce) => ({
    type: "GETLIKEDCONTENT",
    responce,
});

export const likeContent = (keyFirebase) => async (dispatch) => {
    try {
        let ids = {
            id: keyFirebase,
        };
        dispatch(Fetching(true, keyFirebase));
        await webAPI.likeContent(ids);
        dispatch(onLike(ids));
        dispatch(Fetching(false, keyFirebase));
    } catch {
        dispatch(ErrorMessage("something went wrong"));
    }
};
export const likedContent = (keyForDelete, keyFirebase) => async (dispatch) => {
    try {
        if (!keyForDelete) {
            dispatch(ErrorMessage("something went wrong"));
        } else {
            dispatch(Fetching(true, keyFirebase));
            await webAPI.dislikeContent(keyForDelete);
            dispatch(onLiked(keyFirebase));
            dispatch(Fetching(false, keyFirebase));
        }
    } catch {
        dispatch(ErrorMessage("something went wrong"));
    }
};
export const getLikedContent = () => async (dispatch) => {
    try {
        const responce = await webAPI.getLikedContent();
        if (responce !== null) {
            let resp = Object.entries(responce);
            resp.map((item) => (item[1].keyForDelete = item[0]));
            dispatch(getLikedContentArray(Object.values(responce)));
        } else return undefined;
    } catch {
        dispatch(
            ErrorMessage(
                "something went wrong when trying to get liked content"
            )
        );
    }
};
export const clearLikedContentAll = () => async (dispatch) => {
    await webAPI.dislikeAllContent();
    dispatch(clearAllLiked());
};
export default contentLikeReducer;
