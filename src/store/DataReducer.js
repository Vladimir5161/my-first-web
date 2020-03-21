import { stopSubmit, reset } from "redux-form"
const initialState = {
  Data: [
    {
      id: 4,
      season: 1,
      movie: "vikings",
      video: "https://www.youtube.com/watch?v=MLJyFzdQfK8",
      name: "Ragnar Lothbrok",
      description: "about Ragnar"
    },
    {
      id: 5,
      season: 1,
      movie: "vikings",
      imageContent: "https://wallpaperaccess.com/full/782445.jpg",
      name: "The Vikings invasion to England",
      story:
        'According to the Anglo-Saxon Chronicles, Viking raiders struck England in 793 and raided Lindisfarne, the monastery that held Saint Cuthbert`s relics. The raiders killed the monks and captured the valuables. The raid marks the beginning of the "Viking Age of Invasion", made possible by the Viking longship. Great but sporadic violence occurred from the last decade of the eighth century on England`s northern and eastern shores; Viking raids continued on a small scale across coastal England. While the initial raiding groups were small, a great amount of planning is believed to have been involved. The Norwegians raided during the winter of 840–841, rather than the usual summer, having waited on an island off Ireland. In 850, Vikings overwintered for the first time in England, on the island of Thanet, Kent. In 854, a raiding party overwintered a second time, at the Isle of Sheppey in the Thames estuary. In 864, they reverted to Thanet for their winter encampment.'
    },
    {
      id: 8,
      season: 1,
      movie: "vikings",
      image: "https://hdqwalls.com/download/vikings-ragnar-4k-92-1920x1080.jpg"
    },
    {
      id: 9,
      season: 1,
      movie: "vikings",
      image: "https://wallpaperaccess.com/full/782445.jpg"
    },
    {
      id: 10,
      season: 1,
      movie: "vikings",
      image: "https://www.elsetge.cat/myimg/f/2-28775_download-full-hd-1080p-vikings-pc-wallpaper-id.jpg"
    },
    {
      id: 14,
      season: 1,
      movie: "vikings",
      video: "https://www.youtube.com/watch?v=f5av6OqFwz0",
      name: "Vikings season 1 trailer",
      description: "season 1"
    },
    {
      id: 15,
      season: 1,
      movie: "vikings",
      imageContent:
        "https://i2.wp.com/www.criticbay.com/wp-content/uploads/2018/11/maxresdefault-6-1024x636-center.jpg?fit=1024%2C636&ssl=1",
      name: "The Vikings Season 1 description",
      story:
        "Vikings is a historical drama television series,[1] written and created by Michael Hirst for the television channel History.[2] The series broadly follows the exploits of the legendary Viking chieftain Ragnar Lothbrok and his crew, and in later seasons those of his sons. The first season premiered on March 3, 2013 in Canada and concluded on April 28, 2013, consisting of nine episodes. It begins at the start of the Viking Age, marked by the Lindisfarne raid in 793, and follows Ragnar`s quest to become Earl, and his desire to raid England."
    },
    {
      id: 16,
      season: 1,
      movie: "vikings",
      image:
        "https://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2018/08/vikings_season_1.jpg?itok=iMCh4zOv"
    },
    {
      id: 17,
      season: 1,
      movie: "vikings",
      image:
        "https://vignette.wikia.nocookie.net/bbf6279a-757d-4dd4-b874-cf6b60a6e1e3/scale-to-width-down/800"
    },
    {
      id: 18,
      season: 1,
      movie: "vikings",
      image:
        "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2013/02/vikings_tv_review_a_l.jpg"
    },
    {
      id: 123,
      season: 1,
      movie: "vikings",
      image:
        "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2013/02/vikings_tv_review_a_l.jpg"
    },
    {
      id: 19,
      season: 1,
      movie: "vikings",
      image:
        "https://spotlightreport.net/wp-content/uploads/2014/03/vikings-season-1-review.jpg"
    },
    {
      id: 20,
      season: 1,
      movie: "vikings",
      image:
        "https://mindreels.files.wordpress.com/2015/11/vikings-season-2-promo.png"
    },
    {
      id: 28,
      season: 1,
      movie: "got",
      video: "https://www.youtube.com/watch?v=gcTkNV5Vg1E",
      name: "Season 1 trailer",
      description: "season 1"
    },
    {
      id: 80,
      season: 1,
      movie: "got",
      video: "https://www.youtube.com/watch?v=WSP4iIB_wnY",
      name: "Season 1 - top 10 best scenes",
      description: "season 1"
    },
    {
      id: 30,
      season: 1,
      movie: "got",
      video:
        "https://www.youtube.com/watch?v=tBRH5s2lsxc&list=PLxs8sC_ZcV3r6Zo_aTfm9Othwqjms3Atn&index=3",
      name: "House Stark season 1",
      description: "season 1"
    },
    {
      id: 31,
      season: 1,
      movie: "got",
      imageContent:
        "https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2019/04/game_of_thrones_season_1_episode_1_winter_is_coming.jpg",
      name: "Season 1 description",
      story:
        'King Robert Baratheon and his Queen, Cersei Lannister, travel north to make his old friend Eddard "Ned" Stark, Lord of Winterfell, the offer to be the new Hand of the King after the previous one, Jon Arryn died under mysterious circumstances.Across the narrow sea, the exiled Prince Viserys Targaryen offers to trade his sister Daenerys to a violent Dothraki horse lord in exchange for his army. He hopes to use them to take back the throne which was taken from his father by Cersei`s brother, Jaime.Back in Winterfell, Ned`s 10-year-old son Bran discovers that Cersei and Jaime are involved in an incestuous relationship. Jaime pushes Bran out of the window to keep him from telling anyone.'
    },
    {
      id: 32,
      season: 1,
      movie: "got",
      image:
        "https://static01.nyt.com/images/2011/04/10/arts/THRONES-6/THRONES-6-superJumbo-v2.jpg"
    },
    {
      id: 33,
      season: 1,
      movie: "got",
      image:
        "https://oblacco.com/wp-content/uploads/2016/09/Game-of-Thrones-season-1.jpg"
    },
    {
      id: 74,
      season: 1,
      movie: "got",
      image: "https://www.cheatsheet.com/wp-content/uploads/2015/02/tyrion.png"
    },
    {
      id: 78,
      season: 1,
      movie: "got",
      image:
        "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/episodes/1/2/the-kingsroad-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg"
    },
    {
      id: 61,
      season: 1,
      movie: "got",
      image:
        "https://www.newshub.co.nz/dam/form-uploaded-images-ordered/2019/05/15/HBO_jaime-jon-season-1_140519_1120.jpg"
    },
    {
      id: 81,
      season: 1,
      movie: "got",
      video: "https://www.youtube.com/watch?v=XuKfFzk1uQs",
      name: "Season 2 trailer",
      description: "season 2"
    },
    {
      id: 82,
      season: 1,
      movie: "got",
      video: "https://www.youtube.com/watch?v=Iv5o7MxnRfM",
      name: "The Adventures of Tyrion the Imp (Season 2) - Game of Thrones",
      description: "season 2"
    },
    {
      id: 55,
      season: 1,
      movie: "got",
      imageContent: "https://i.ytimg.com/vi/kzSicCwtJI4/maxresdefault.jpg",
      name: "Season 2 description",
      story:
        "Game of Thrones Season 2 drops Thrones fans into a world torn apart by the death of Eddard Stark. The Game of Thrones second season aired on HBO in 2012, and with all the plot twists and new characters GoT throws at viewers with each new season, and even each new episode, it`s always good to refresh your memory with a quick summary, and that`s exactly what you`ll find in this Game of Thrones season 2 recap.As GoT season 2 opens, The War of the Five Kings is raging on, and Robb Stark`s army is growing while Stannis and his Red Priestess plan to take over the kingdom. There are dragons in Essos, white walkers beyond the wall, and Greyjoys holding Winterfell. Each of the Game of Thrones season 2 episodes seemed to be more complex than the previous one. Refresh your memory with this Game of Thrones season 2 episode list and summary."
    },
    {
      id: 56,
      season: 1,
      movie: "got",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Nghuq09YNhbozPL_qEK0vdqlYY7lPpZEzlKm6yjo9yKFg4-a&s"
    },
    {
      id: 57,
      season: 1,
      movie: "got",
      image:
        "https://www.slantmagazine.com/wp-content/uploads/2015/07/tv_gameofthrones0205.jpg"
    },
    {
      id: 58,
      season: 1,
      movie: "got",
      image: "https://i1.ytimg.com/vi/dcqrNXKv628/maxresdefault.jpg"
    },
    {
      id: 1,
      season: 2,
      movie: "vikings",
      filter: "true",
      video: "https://www.youtube.com/watch?v=Y7d0A5re7-0",
      name: "Vikings trailer 6",
      description: "season 6"
    },
    {
      id: 2,
      season: 2,
      movie: "vikings",
      video: "https://www.youtube.com/watch?v=M7Bu5ed0NvE",
      name: "Vikings trailer 6",
      description: "season 6"
    },
    {
      id: 36,
      season: 2,
      movie: "vikings",
      imageContent:
        "https://ontvse.com/wp-content/uploads/2019/12/aq2yEMgRQBPfRkrO0Repo2qhUAT.jpg",
      name: "The Vikings invasion to Scotland",
      story:
        "While few records are known, the Vikings are thought to have led their first raids in Scotland on the holy island of Iona in 794, the year following the raid on the other holy island of Lindisfarne, Northumbria. In 839, a large Norse fleet invaded via the River Tay and River Earn, both of which were highly navigable, and reached into the heart of the Pictish kingdom of Fortriu. They defeated Eogán mac Óengusa, king of the Picts, his brother Bran, and the king of the Scots of Dál Riata, Áed mac Boanta, along with many members of the Pictish aristocracy in battle. The sophisticated kingdom that had been built fell apart, as did the Pictish leadership, which had been stable for more than 100 years since the time of Óengus mac Fergusa (The accession of Cináed mac Ailpín as king of both Picts and Scots can be attributed to the aftermath of this event)."
    },
    {
      id: 38,
      season: 2,
      movie: "vikings",
      image: "https://www.moviedeskback.com/wp-content/uploads/2016/01/Vikings_Season_4_wallpapers_1920x1080-12.jpg"
    },
    {
      id: 39,
      season: 2,
      movie: "vikings",
      image: "http://alexhoeghandersenspain.com/wp-content/uploads/2017/01/vikings-4x20-alexhoeghandersenspain-5-1080x675.jpg"
    },
    {
      id: 40,
      season: 2,
      movie: "vikings",
      image: "https://wallpapercave.com/wp/wp2696932.jpg"
    },
    {
      id: 41,
      season: 2,
      movie: "vikings",
      image: "https://wallpaperaccess.com/full/782457.jpg"
    },
    {
      id: 6,
      season: 2,
      movie: "vikings",
      imageContent: "https://cdn.hipwallpaper.com/i/75/13/hP2OH0.jpg",
      name: "The Vikings invasion to Irland",
      story:
        "The Vikings pillaged monasteries on Ireland`s west coast in 795, and then spread out to cover the rest of the coastline. The north and east of the island were most affected. During the first 40 years, the raids were conducted by small, mobile Viking groups. By 830, the groups consisted of large fleets of Viking ships. From 840, the Vikings began establishing permanent bases at the coasts. Dublin was the most significant settlement in the long term. The Irish became accustomed to the Viking presence. In some cases, they became allies and married each other."
    },
    {
      id: 43,
      season: 2,
      movie: "got",
      video: "https://www.youtube.com/watch?v=A0pLbTXPHng",
      name: "Season 5 trailer",
      description: "season 5"
    },
    {
      id: 44,
      season: 2,
      movie: "got",
      video:
        "https://www.youtube.com/watch?v=yu8eRaq1FUM",
      name: "Season 6 trailer",
      description: "season 6"
    },
    {
      id: 51,
      season: 2,
      movie: "got",
      video:
        "https://www.youtube.com/watch?v=giYeaKsXnsI",
      name: "Season 7 trailer",
      description: "season 7"
    },
    {
      id: 45,
      season: 2,
      movie: "got",
      imageContent:
        "https://assets3.thrillist.com/v1/image/2697107/size/gn-gift_guide_variable_c.jpg",
      name: "Season 7 description",
      story:
        'The seventh and penultimate season of the fantasy drama television series Game of Thrones premiered on HBO on July 16, 2017, and concluded on August 27, 2017.[1][2][3] Unlike previous seasons, which consisted of ten episodes each, the seventh season consisted of only seven episodes.[4] Like the previous season, it largely consisted of original content not found in George R. R. Martin`s A Song of Ice and Fire series, while also incorporating material that Martin revealed to showrunners about the upcoming novels in the series.[5][better source needed] The series was adapted for television by David Benioff and D. B. Weiss.The penultimate season focuses primarily on the convergence of the show`s main plotlines in preparation for the final season. Daenerys Targaryen arrives in Westeros with her army and three dragons and begins to wage war against the Lannisters while Jon Snow continues his efforts to find ways to defeat the Army of the Dead. He forges an alliance with Daenerys in an attempt to unite their forces against the White Walker army.HBO ordered the seventh season on April 21, 2016, three days before the premiere of the show`s sixth season, and began filming on August 31, 2016. The season was filmed primarily in Northern Ireland, Spain, Croatia and Iceland.Game of Thrones features a large ensemble cast, including Peter Dinklage, Nikolaj Coster-Waldau, Lena Headey, Emilia Clarke, and Kit Harington. The season introduces several new cast members, including Jim Broadbent and Tom Hopper.The series received 22 nominations for the 70th Primetime Emmy Awards,[6] and won for Outstanding Drama Series and Dinklage won for Outstanding Supporting Actor in a Drama Series.[7]'
    },
    {
      id: 46,
      season: 2,
      movie: "got",
      image:
        "https://specials-images.forbesimg.com/imageserve/5cad32a8a7ea436c70f23654/960x0.jpg?fit=scale"
    },
    {
      id: 47,
      season: 2,
      movie: "got",
      image:
        "https://static01.nyt.com/images/2016/06/28/arts/28thrones3/28thrones3-superJumbo-v2.jpg"
    },
    {
      id: 48,
      season: 2,
      movie: "got",
      image: "https://pmcvariety.files.wordpress.com/2019/05/game-of-thrones-season-7-episode-7.jpg?w=1000"
    },
    {
      id: 49,
      season: 2,
      movie: "got",
      image:
        "https://media.newyorker.com/photos/598872045839136c88e91dfb/master/pass/Larson-GoT-Season-7-Episode-4-Recap.jpg"
    },
    {
      id: 50,
      season: 2,
      movie: "got",
      image:
        "https://blogs-images.forbes.com/erikkain/files/2017/08/eastwatch.jpg"
    },
  ],
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
  let newId = () => {
    let idCount = newState.Data.pop();
    newState.Data.push(idCount);
    let newId = idCount.id + 1;
    return newId;
  }
  let newState = { ...state };
  newState.Data = [...state.Data];
  switch (action.type) {
    case "ADDCONTENT":
      if (action.contentType === "image") {
        let newImage = {
          id: newId(),
          season: action.season,
          movie: action.movie,
          image: action.addImage,
        };
        newState.Data.push(newImage)
        debugger;
        return newState
      } else if (action.contentType === "video") {
        let newVideo = {
          id: newId(),
          season: action.season,
          movie: action.movie,
          video: action.addVideo,
          name: action.addVideoName,
          description: action.addVideoDescription,
        };
        newState.Data.push(newVideo)
        return newState
      } else if (action.contentType === "story") {
        let newStory = {
          id: newId(),
          season: action.season,
          movie: action.movie,
          story: action.addStory,
          name: action.addStoryText,
          imageContent: action.addStoryImage,
        };
        newState.Data.push(newStory)
        return newState
      } else return state
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
    default:
      return state;

  }

}
export const ShowMore = (additionalCount, season, movie, contentType) => ({ type: "CHANGECONTENTSCOUNT", additionalCount, season, movie, contentType })
export const uploadContent = (season, itemsCount, movie, contentType) => ({ type: "UPLOADCONTENT", season, itemsCount, movie, contentType })
export const addNewContent = (
  movie,
  season,
  addImage,
  addVideo,
  addVideoName,
  addVideoDescription,
  addStory,
  addStoryText,
  addStoryImage,
  contentType, canPush) => (
    {
      type: "ADDCONTENT",
      movie,
      season,
      addImage,
      addVideo,
      addVideoName,
      addVideoDescription,
      addStory,
      addStoryText,
      addStoryImage,
      contentType,
      canPush
    })


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
  contentType) => (dispatch, getState) => {
    let Data = getState().Data.Data
    debugger
    let Arrey = []
    Data.filter(item => item[contentType]).map(i => {
      debugger
      if ((i.image === addImage && i.image !== undefined) ||
        (i.video === addVideo && i.video !== undefined) ||
        (i.storyImage === addStoryImage && i.storyImage !== undefined)) {
        let ids = 1
        Arrey.push(ids++)
      } return undefined
    })
    console.log(Arrey.length)
    if (Arrey.length > 0) {
      dispatch(stopSubmit("addContent", { _error: "Dublicate content" }))
    } else {
      dispatch(addNewContent(
        movie,
        season,
        addImage,
        addVideo,
        addVideoName,
        addVideoDescription,
        addStory,
        addStoryText,
        addStoryImage,
        contentType))
      dispatch(reset('addContent'))
    }
  }
  
export default DataReducer