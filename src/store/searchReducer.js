const initialState = {
    clicked: false,
    search: "searchField"
}

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SEARCHON":
            return {
                [action.search]: action.search = "searchFieldActive",
            }
        case "CLICKEDON" :
            return {
                [action.clicked]: true,
            }
        case "CLICKEDOFF" :
            return {
                [action.clicked]: false,
            }
        case "SEARCHOFF":
            return {
                [action.search]: action.search = "searchFiled",
            }
        default:
            return state;
    }
}
export default searchReducer