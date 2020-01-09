const initialState = {
    isClicked: false,
}

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case "CLICKED":
            return {
                ...state,
               [action.isClicked]: true,
            };
        case "NOT_CLICKED":
            return {
                ...state,
                [action.isClicked]: false,
            };
        default:
            return state;
    }
}
export default searchReducer