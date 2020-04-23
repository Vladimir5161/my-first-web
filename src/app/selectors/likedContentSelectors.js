import { getLikedContentMap } from "../../store/DataReducer";

export const getLikedId = (state, keyFirebase) => {
    return state.likedContent.IdArrey;
};
export const getCount = (state) => {
    return state.likedContent.IdArrey.length;
};

export const contentReduce = (state) => {
    return getLikedContentMap(state.Data.Data);
};
