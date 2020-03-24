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
      button: "Get Started"
    },
    {
      id: 38,
      image: "https://images3.alphacoders.com/691/thumb-1920-691818.jpg",
      h2: "Vikings invasion",
      h1: "They are coming",
      text: "Become a part of an action",
      button: "Watch on Youtube",
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
      button: "Press to buy now"
    }
  ],
  imagesCount: 3,
  videosCount: 2,
  storiesCount: 2,
  firstContent: {
    images: [],
    videos: [],
    stories: []
  },
  canPush: false
}


const DataReducer = (state = initialState, action) => {

  let newState = { ...state };
  newState.Data = [...state.Data];
  switch (action.type) {
    case "ADDCONTENT":
      return {
        ...state,
        Data: [...state.Data, action.content]
      }
    case "CHANGECONTENTSCOUNT":
      let Content = newState.Data.filter(item => item.movie === action.movie)
      let ContentSeasons = Content.filter(item => item.season === action.season)
      let ContentTypes = ContentSeasons.filter(item => item[action.contentType])
      let countFunc = (type, CountType) => {
        let count = newState.firstContent[type].length === newState[CountType] && newState.firstContent[type].length  !== ContentTypes.length ? (newState[CountType] + action.additionalCount) : action.additionalCount 
        return count
      }
      if (action.contentType === "image") {
        return {
          ...state,
          imagesCount: state.imagesCount = countFunc(`images`, `imagesCount`)
        }
      } else if (action.contentType === "video") {
        return {
          ...state,
          videosCount: state.videosCount = countFunc(`videos`, `videosCount`)
        }
      } else if (action.contentType === "story") {
        return {
          ...state,
          storiesCount: state.storiesCount = countFunc(`stories`, `storiesCount`)
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
      let ContentAll = newState.Data.filter(item => item.movie === action.movie)
      let ContentSeason = ContentAll.filter(item => item.season === action.season)
      let ContentType = ContentSeason.filter(item => item[action.contentType])
      let lastItem = (action.itemsCount > ContentType.length ? ContentType.length : action.itemsCount)
      let newItems = ContentType.slice(0, lastItem)
      for (let i = 0; i < lastItem; i++) {
        let item = newItems.shift()

        currentContent.push(item)
      }
      if (action.contentType === "video") {
        return {
          ...newState, firstContent: { ...newState.firstContent, videos: currentContent }
        }
      } else if (action.contentType === "image") {
        return {
          ...newState, firstContent: { ...newState.firstContent, images: currentContent }
        }
      } else if (action.contentType === "story") {
        return {
          ...newState, firstContent: { ...newState.firstContent, stories: currentContent }
        }
      } else return state
      case "DOWNLOADCONTENT":
        return {
          ...state, Data: [...action.responce]
        }
      case "DELETECONTENT": 
        return {
          ...state, Data: [ state.Data.filter(id => id !== action.id)]
        }
    default:
      return state;

  }

}
export const ShowMore = (additionalCount, season, movie, contentType) => ({ type: "CHANGECONTENTSCOUNT", additionalCount, season, movie, contentType })
export const uploadContent = (season, itemsCount, movie, contentType) => ({ type: "UPLOADCONTENT", season, itemsCount, movie, contentType })
export const downloadContent = (responce) => ({ type: "DOWNLOADCONTENT", responce})
export const addNewContent = (content) => ({ type: "ADDCONTENT",content})
export const DeleteContent = (id) => ({type: "DELETECONTENT", id})

export const deleteContent = (keyFirebase, id) =>async(dispatch) => {
  try {
    await webAPI.deleteContent(keyFirebase)
    dispatch(DeleteContent(id))
  }
  catch {
    return "something went wrong"
  }

}

export const getContents = (season, itemsCount, movie, contentType) => async (dispatch, getState) => {
    try {
      let Data = getState().Data.Data
      let responce = await webAPI.getContent()
      let contentArray = Object.entries(responce)
      contentArray.map(item => (
        item[1].keyFirebase = item[0]
      ))
      if(Object.values(responce).length !== Data.length) {
      dispatch(downloadContent(Object.values(responce)))
      }
      dispatch(uploadContent(season, itemsCount, movie, contentType))
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
  addVideoDescription,
  addStory,
  addStoryText,
  addStoryImage,
  contentType) => async(dispatch, getState) => {
    let Data = getState().Data.Data
    let newId = () => {
      let idCount = Data.pop();
      Data.push(idCount);
      let newId = idCount.id + 1;
      return newId;
    }
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
        try {await webAPI.addContent(newImage)
          dispatch(addNewContent(newImage))
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
          description: addVideoDescription,
        };
        try {await webAPI.addContent(newVideo)
          dispatch(addNewContent(newVideo))
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
        try {await webAPI.addContent(newStory)
          dispatch(addNewContent(newStory))
          dispatch(reset('addContent'))
        }
        catch {
          return "some error"
        }
      } 
    }
  }
export default DataReducer