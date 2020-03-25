import { stopSubmit, reset } from "redux-form"
import { webAPI} from "../app/api/api"

const initialState = {
  Data: [],
  GOTSlides: [
    {
      id: 40,
      image:
        "https://theholyshrine.files.wordpress.com/2013/08/game-of-thrones-01.jpg",
      h2: "The best story of all times",
      text: "HBO Chanel",
      h1: "Which side will you choose?",
      movie: "got",
      button: "Get Started"
    },
    {
      id: 41,
      image:
        "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2018%2F04%2FIron-Throne-promotional-season-1.jpg&c=sc&w=736&h=485",
      h2: "GOT",
      text: "HBO Chanel",
      h1: "Become a part of an action",
      button: "Watch on Youtube",
      movie: "got",
      href: "https://www.youtube.com/watch?v=gy_4WOQidjI&t=3s"
    }
  ],
  vikingsSlides: [
    {
      id: 37,
      image:
        "https://i.pinimg.com/originals/98/57/fa/9857fa2582acee2a3e36ebcdf6ccf3c6.jpg",
      h2: "The Story of Ragnar Lothbrok",
      h1: "The History chanel presents",
      text: "The most impressive story of all times.",
      movie: "vikings",
      button: "Get Started"
    },
    {
      id: 38,
      image: "https://images3.alphacoders.com/691/thumb-1920-691818.jpg",
      h2: "Vikings invasion",
      h1: "They are coming",
      text: "Become a part of an action",
      button: "Watch on Youtube",
      movie: "vikings",
      href: "https://www.youtube.com/watch?v=Y7d0A5re7-0&t=2s"
    },
    {
      id: 39,
      image:
        "https://cdns.kinguin.net/media/category/s/s/ss_97648b570dd8e7061e32b2e623cfed4c5c20fce9.1920x1080_1517652254.jpg",
      h2: "Total war Thrones of britannia",
      h1: "Vikings total war",
      text:
        "Thy the only one game where you can conquer England playing for vikings.",
        movie: "vikings",
      button: "Press to buy now"
    }
  ],
  imagesCount: 3,
  videosCount: 2,
  storiesCount: 2,
  firstContent: {
    image: [],
    video: [],
    story: []
  },
  canPush: false
}


const DataReducer = (state = initialState, action) => {
  let newState = { ...state };
  newState.Data = [...state.Data];
  switch (action.type) {
    case "CHANGECONTENTSCOUNT":
      let ContentAll = newState.Data.filter(item => item.movie === action.movie)
      let ContentType = ContentAll.filter(item => item.season === action.season)
      let Content = ContentType.filter(item => item[action.contentType])
      let countFunc = (CountType, contentType) => {
        let count = newState.firstContent[contentType].length === newState[CountType] && newState.firstContent[contentType].length  !== Content.length ? (newState[CountType] + action.additionalCount) : action.additionalCount 
        return count
      }
      if (action.contentType === "image") {
        return {
          ...state,
          imagesCount: state.imagesCount = countFunc(`imagesCount`, action.contentType)
        }
      } else if (action.contentType === "video") {
        return {
          ...state,
          videosCount: state.videosCount = countFunc(`videosCount`, action.contentType)
        }
      } else if (action.contentType === "story") {
        return {
          ...state,
          storiesCount: state.storiesCount = countFunc(`storiesCount`, action.contentType)
        }
      } else return state
    case "ONDEFAULTCOUNTS":
      return {
        ...state,
        imagesCount: state.imagesCount = 3,
        videosCount: state.videosCount = 2,
        storiesCount: state.storiesCount = 2
      }
    case "UPLOADCONTENT":
      let currentContent = []
      let ContentNew = newState.Data.filter(item => item.movie === action.movie)
      let ContentTypes = ContentNew.filter(item => item.season === action.season)
      let ContentOf = ContentTypes.filter(item => item[action.contentType])
      let lastItem = (action.itemsCount > ContentOf.length ? ContentOf.length : action.itemsCount)
      let newItems = ContentOf.slice(0, lastItem)
      for (let i = 0; i < lastItem; i++) {
        let item = newItems.shift()

        currentContent.push(item)
      }
        return {
          ...newState, firstContent: { ...newState.firstContent, [action.contentType]: currentContent }
        }
      case "DOWNLOADCONTENT":
        let array = [];
        for(let item of action.responce) {
          if(newState.Data.length === 0) {
            array.push(item)
          } else if(newState.Data.some((element) =>element.id === item.id)) {
              return state
            } else array.push(item) 
            console.log(state.Data)
        }
                  return {
                    ...state,
                    Data: state.Data.concat(array)
                    
                  }
      case "DELETECONTENT": 
        return {
          ...state, Data: [ ...state.Data.filter(id => id !== action.id)]
        }
    default:
      return state;

  }

}
export const ShowMore = (additionalCount, season, movie, contentType) => ({ type: "CHANGECONTENTSCOUNT", additionalCount, season, movie, contentType })
export const uploadContent = (season, itemsCount, movie, contentType) => ({ type: "UPLOADCONTENT", season, itemsCount, movie, contentType })
export const downloadContent = (responce) => ({ type: "DOWNLOADCONTENT", responce})
export const DeleteContent = (id) => ({type: "DELETECONTENT", id})

export const deleteContent = (keyFirebase, id, contentType) =>async(dispatch) => {
  try {
    await webAPI.deleteContent(keyFirebase, contentType);
    setTimeout(()=>dispatch(DeleteContent(id)), 1000)
  } catch {
    return "something went wrong"
  }
}

export const getContents = (season, itemsCount, movie, contentType) => async (dispatch, getState) => {
    try {
      let responce = await webAPI.getContent(contentType)
      let contentArray = Object.entries(responce)
      contentArray.map(item => (
        item[1].keyFirebase = item[0]
      ))
      contentArray.map(item => (
        item[1].id = item[0]
      ))
        await dispatch(downloadContent(Object.values(responce)))
        await dispatch(uploadContent(season, itemsCount, movie, contentType))
        getState().Data.vikingsSlides.map(i => (
          webAPI.pushSlides(i)
        ))

    } catch {
      return "something went wrong"
    }
}
export const addContent = (
  movie,
  season,
  addImage,
  addVideo,
  addVideoName,
  addStory,
  addStoryText,
  addStoryImage,
  contentType) => async(dispatch, getState) => {
    let Data = getState().Data.Data
    let newId = () => {
      if(Data.length < 1) {
        return `1`
      } else {
      let idCount = Data.pop();
      Data.push(idCount);
      let newId = idCount.id + 1;
      return newId;
    }}
    let Arrey = []
    Data.filter(item => item[contentType]).map(i => {
      if ((i.image === addImage && i.image !== undefined) ||
        (i.video === addVideo && i.video !== undefined) ||
        (i.storyImage === addStoryImage && i.storyImage !== undefined)) {
        let ids = 1
        Arrey.push(ids++)
      } return undefined
    })
    if (Arrey.length > 0) {
      dispatch(stopSubmit("addContent", { _error: "Dublicate content" }))
    } else {
      if (contentType === "image") {
        let newImage = {
          id: newId(),
          season: season,
          movie: movie,
          image: addImage,
        };
        try {await webAPI.addContent(newImage, contentType)
          await webAPI.getContent(contentType)
          dispatch(reset('addContent'))
        }
        catch {
          return "some error"
        }
      } else if (contentType === "video") {
        let newVideo = {
          id: newId(),
          season: season,
          movie: movie,
          video: addVideo,
          name: addVideoName,
        };
        try {await webAPI.addContent(newVideo, contentType)
          await webAPI.getContent(contentType)
          dispatch(reset('addContent'))
        }
        catch {
          return "some error" 
        }
      } else if (contentType === "story") {
        let newStory = {
          id: newId(),
          season: season,
          movie: movie,
          story: addStory,
          name: addStoryText,
          imageContent: addStoryImage,
        };
        try {await webAPI.addContent(newStory, contentType)
          await webAPI.getContent(contentType)
          dispatch(reset('addContent'))
        }
        catch {
          return "some error"
        }
      } 
    }
  }
export default DataReducer