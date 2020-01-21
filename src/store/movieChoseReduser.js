


let vikingsSlide = "vikingsSlides";

const initialState = {
        chosen: false,
        stateSlides: vikingsSlide,
        logo: "../../images/logo.png",
        wayStory: item => item.movieVikingsSeason1Story,
        wayVIdeo: item => item.movieVikingsSeason1Video,
        wayImage: item => item.movieVikingsSeason1Image,
        filterWay: true,
        filterWay1: false,
        filterWay2: false,
        filterWay3: false,
        Season: "Season 4-6"
    }
const movieChoseReducer = (state = initialState, action) => {
    const GOTSlide = "GOTSlides";
    switch(action.type) {
        case "MOVIEGROUP1CLICK":
            return {
                ...state,
                chosen: state.chosen = true,
                stateSlides: state.stateSlides = GOTSlide,
                logo: state.logo = "../../images/got.png",
                wayStory: state.wayStory = (item => item.movieGoTSeason1Story),
                wayVIdeo: state.wayVIdeo = (item => item.movieGoTSeason1Video),
                wayImage: state.wayImage = (item => item.movieGoTSeason1Image),
                filterWay: state.filterWay = true,
                filterWay1: state.filterWay1 = false,
                filterWay2: state.filterWay2 = false,
                filterWay3: state.filterWay3 = false,
                Season: state.Season = "Season 4-8",
            }
            case "MOVIEGROUP2CLICK":
            return {
                ...state,
                chosen: state.chosen = false,
                stateSlides: state.stateSlides = vikingsSlide,
                logo: state.logo = "../../images/logo.png",
                wayStory: state.wayStory = (item => item.movieVikingsSeason1Story),
                wayVIdeo: state.wayVIdeo = (item => item.movieVikingsSeason1Video),
                wayImage: state.wayImage = (item => item.movieVikingsSeason1Image),
                filterWay: state.filterWay = false,
                filterWay1: state.filterWay1 = false,
                filterWay2: state.filterWay2 = true,
                filterWay3: state.filterWay3 = false,
                Season: state.Season = "Season 4-6"
            }
            case "VIKINGSSEASON1":
            return {
                ...state,
                chosen: state.chosen = false,
                stateSlides: state.stateSlides = vikingsSlide,
                logo: state.logo = "../../images/logo.png",
                wayStory: state.wayStory = (item => item.movieVikingsSeason1Story),
                wayVIdeo: state.wayVIdeo = (item => item.movieVikingsSeason1Video),
                wayImage: state.wayImage = (item => item.movieVikingsSeason1Image),
                filterWay: state.filterWay = true,
                filterWay1: state.filterWay1 = false,
                filterWay2: state.filterWay2 = false,
                filterWay3: state.filterWay3 = false,
                Season: state.Season = "Season 4-6"
            }
            case "VIKINGSSEASON2":
            return {
                ...state,
                chosen: state.chosen = false,
                stateSlides: state.stateSlides = vikingsSlide,
                logo: state.logo = "../../images/logo.png",
                wayStory: state.wayStory = (item => item.movieVikingsSeason2Story),
                wayVIdeo: state.wayVIdeo = (item => item.movieVikingsSeason2Video),
                wayImage: state.wayImage = (item => item.movieVikingsSeason2Image),
                filterWay: state.filterWay = false,
                filterWay1: state.filterWay1 = true,
                filterWay2: state.filterWay2 = false,
                filterWay3: state.filterWay3 = false,
                Season: state.Season = "Season 4-6"
            }
            case "GOTSEASON1":
            return {
                ...state,
                chosen: state.chosen = true,
                stateSlides: state.stateSlides = GOTSlide,
                logo: state.logo = "../../images/got.png",
                wayStory: state.wayStory = (item => item.movieGoTSeason1Story),
                wayVIdeo: state.wayVIdeo = (item => item.movieGoTSeason1Video),
                wayImage: state.wayImage = (item => item.movieGoTSeason1Image),
                filterWay: state.filterWay = false,
                filterWay1: state.filterWay1 = false,
                filterWay2: state.filterWay2 = true,
                filterWay3: state.filterWay3 = false,
                Season: state.Season = "Season 4-8"
            }
            case "GOTSEASON2":
            return {
                ...state,
                chosen: state.chosen = true,
                stateSlides: state.stateSlides = GOTSlide,
                logo: state.logo = "../../images/got.png",
                wayStory: state.wayStory = (item => item.movieGoTSeason2Story),
                wayVIdeo: state.wayVIdeo = (item => item.movieGoTSeason2Video),
                wayImage: state.wayImage = (item => item.movieGoTSeason2Image),
                filterWay: state.filterWay = false,
                filterWay1: state.filterWay1 = false,
                filterWay2: state.filterWay2 = false,
                filterWay3: state.filterWay3 = true,
                Season: state.Season = "Season 4-8"
            }
            default:
                return state;
    }
}

export default movieChoseReducer