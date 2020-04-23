export const getSlides = (state) => {
    let movie = state.movieChose1.movie
    return state.Data.SlidesData.filter(item => item.movie === movie)
}