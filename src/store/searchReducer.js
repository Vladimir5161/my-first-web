const initialState = {
    clicked: false,
    search: "searchField",
}

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SEARCHON":

            return {
                ...state,
                search: action.newSearch =  "searchFieldActive",
            }
        case "CLICKEDON" :
            return {
                clicked:  action.newClicked = true,
           }
        case "CLICKEDOFF" :
            return {
                clicked:  action.newClicked2 = false,
            }
        case "SEARCHOFF":
            return {
                search: action.newSearch2 = "searchField"
            }
        default:
            return state;
    }
}
export default searchReducer