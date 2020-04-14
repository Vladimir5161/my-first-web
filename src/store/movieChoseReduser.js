const initialState = {
    chosen: false,
    logo: "../../images/logo.png",
    season: 1,
    movie: "vikings",
    Season: "Season 4-6",
};
const movieChoseReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MOVIEGROUP1CLICK":
            return {
                ...state,
                chosen: (state.chosen = true),
                logo: (state.logo = "../../images/got.png"),
                season: 1,
                movie: "got",
                Season: (state.Season = "Season 4-8"),
            };
        case "MOVIEGROUP2CLICK":
            return {
                ...state,
                chosen: (state.chosen = false),
                logo: (state.logo = "../../images/logo.png"),
                season: 1,
                movie: "vikings",
                Season: (state.Season = "Season 4-6"),
            };
        case "CONTENTCHANGE":
            if (action.movie === "vikings" && action.season === 1) {
                return {
                    ...state,
                    chosen: (state.chosen = false),
                    logo: (state.logo = "../../images/logo.png"),
                    season: 1,
                    movie: "vikings",
                    Season: (state.Season = "Season 4-6"),
                };
            } else if (action.movie === "vikings" && action.season === 2) {
                return {
                    ...state,
                    chosen: (state.chosen = false),
                    logo: (state.logo = "../../images/logo.png"),
                    season: 2,
                    movie: "vikings",
                    Season: (state.Season = "Season 4-6"),
                };
            } else if (action.movie === "got" && action.season === 1) {
                return {
                    ...state,
                    chosen: (state.chosen = true),
                    logo: (state.logo = "../../images/got.png"),
                    season: 1,
                    movie: "got",
                    Season: (state.Season = "Season 4-8"),
                };
            } else if (action.movie === "got" && action.season === 2) {
                return {
                    ...state,
                    chosen: (state.chosen = true),
                    logo: (state.logo = "../../images/got.png"),
                    season: 2,
                    movie: "got",
                    Season: (state.Season = "Season 4-8"),
                };
            } else return state;
        default:
            return state;
    }
};

export const ContentChange = (movie, season) => ({
    type: "CONTENTCHANGE",
    movie,
    season,
});
export const MovieGroup1Click = () => ({ type: "MOVIEGROUP1CLICK" });
export const MovieGroup2Click = () => ({ type: "MOVIEGROUP2CLICK" });

export default movieChoseReducer;
