
const initialState = {
    chosen: false,
    stateSlides: "vikingsSlides",
    logo: "../../images/logo.png",
    season: 1,
    movie: "vikings",
    Season: "Season 4-6"
}
const movieChoseReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MOVIEGROUP1CLICK":
            return {
                ...state,
                chosen: state.chosen = true,
                stateSlides: state.stateSlides = "GOTSlides",
                logo: state.logo = "../../images/got.png",
                season: 1,
                movie: "got",
                Season: state.Season = "Season 4-8",
            }
        case "MOVIEGROUP2CLICK":
            return {
                ...state,
                chosen: state.chosen = false,
                stateSlides: state.stateSlides = "vikingsSlides",
                logo: state.logo = "../../images/logo.png",
                season: 1,
                movie: "vikings",
                Season: state.Season = "Season 4-6"
            }
        case "VIKINGSSEASON1":
            return {
                ...state,
                chosen: state.chosen = false,
                stateSlides: state.stateSlides = "vikingsSlides",
                logo: state.logo = "../../images/logo.png",
                season: 1,
                movie: "vikings",
                Season: state.Season = "Season 4-6"
            }
        case "VIKINGSSEASON2":
            return {
                ...state,
                chosen: state.chosen = false,
                stateSlides: state.stateSlides = "vikingsSlides",
                logo: state.logo = "../../images/logo.png",
                season: 2,
                movie: "vikings",
                Season: state.Season = "Season 4-6"
            }
        case "GOTSEASON1":
            return {
                ...state,
                chosen: state.chosen = true,
                stateSlides: state.stateSlides = "GOTSlides",
                logo: state.logo = "../../images/got.png",
                season: 1,
                movie: "got",
                Season: state.Season = "Season 4-8"
            }
        case "GOTSEASON2":
            return {
                ...state,
                chosen: state.chosen = true,
                stateSlides: state.stateSlides = "GOTSlides",
                logo: state.logo = "../../images/got.png",
                season: 2,
                movie: "got",
                Season: state.Season = "Season 4-8"
            }
        default:
            return state;
    }
}

export default movieChoseReducer