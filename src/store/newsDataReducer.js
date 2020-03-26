import { webAPI } from "../app/api/api";

const initialState = {
  NewsData: []
}

const newsDataReducer = (state = initialState, action ) => {
  let newState = {...state}
    switch(action.type) {
      case "SETNEWS":
          let arrayNews = [];
          for(let i of action.news) {
            if(newState.NewsData.length === 0) {
              arrayNews.push(i)
            } else if(newState.NewsData.some((element) =>element.id === i.id)) {
                return state
              } else arrayNews.push(i) 
          }
                    return {
                      ...state,
                      NewsData: state.NewsData.concat(arrayNews)
                      
                    }
        default: 
            return state;
    }
}
export const setNews = (news) => ({type: 'SETNEWS', news})

export const getNews = () => async dispatch => {
 try {
    let responce = await webAPI.getNews()
    debugger
  let contentArray = Object.entries(responce)
  contentArray.map(item => (
    item[1].keyFirebase = item[0]
  ))
  contentArray.map(item => (
    item[1].id = item[0]
  ))
  await dispatch(setNews(Object.values(responce)))
 } catch {
    return "something went wrong"
 }
} 
export default newsDataReducer