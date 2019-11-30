import { rerenderEntireTree } from "../render";

let Data = {
  vikingsData: {
    season1: {
      content: [
        {
          id: 1,
          video: "https://www.youtube.com/watch?v=Y7d0A5re7-0",
          name: "Vikings trailer 1",
          description: "season 6"
        },
        {
          id: 2,
          video: "https://www.youtube.com/watch?v=M7Bu5ed0NvE",
          name: "Vikings trailer 1",
          description: "season 6"
        },
        {
          id: 3,
          video: "https://www.youtube.com/watch?v=IGnoxboek3g",
          name: "Vikings trailer 1",
          description: "about Ragnar"
        },
        {
          id: 4,
          video: "https://www.youtube.com/watch?v=MLJyFzdQfK8",
          name: "Ragnar Lothbrok",
          description: "about Ragnar"
        },
        {
          id: 5,
          imageContent: "https://wallpaperaccess.com/full/782445.jpg",
          name: "The Vikings invasion to England",
          story:
            'According to the Anglo-Saxon Chronicles, Viking raiders struck England in 793 and raided Lindisfarne, the monastery that held Saint Cuthbert`s relics. The raiders killed the monks and captured the valuables. The raid marks the beginning of the "Viking Age of Invasion", made possible by the Viking longship. Great but sporadic violence occurred from the last decade of the eighth century on England`s northern and eastern shores; Viking raids continued on a small scale across coastal England. While the initial raiding groups were small, a great amount of planning is believed to have been involved. The Norwegians raided during the winter of 840–841, rather than the usual summer, having waited on an island off Ireland. In 850, Vikings overwintered for the first time in England, on the island of Thanet, Kent. In 854, a raiding party overwintered a second time, at the Isle of Sheppey in the Thames estuary. In 864, they reverted to Thanet for their winter encampment.'
        },
        {
          id: 6,
          imageContent: "https://wallpaperaccess.com/full/782445.jpg",
          name: "The Vikings invasion to Irland",
          story:
            "The Vikings pillaged monasteries on Ireland`s west coast in 795, and then spread out to cover the rest of the coastline. The north and east of the island were most affected. During the first 40 years, the raids were conducted by small, mobile Viking groups. By 830, the groups consisted of large fleets of Viking ships. From 840, the Vikings began establishing permanent bases at the coasts. Dublin was the most significant settlement in the long term. The Irish became accustomed to the Viking presence. In some cases, they became allies and married each other."
        },
        {
          id: 7,
          imageContent:
            "https://hdqwalls.com/download/vikings-ragnar-4k-92-1920x1080.jpg",
          name: "The Vikings invasion to Scotland",
          story:
            "While few records are known, the Vikings are thought to have led their first raids in Scotland on the holy island of Iona in 794, the year following the raid on the other holy island of Lindisfarne, Northumbria. In 839, a large Norse fleet invaded via the River Tay and River Earn, both of which were highly navigable, and reached into the heart of the Pictish kingdom of Fortriu. They defeated Eogán mac Óengusa, king of the Picts, his brother Bran, and the king of the Scots of Dál Riata, Áed mac Boanta, along with many members of the Pictish aristocracy in battle. The sophisticated kingdom that had been built fell apart, as did the Pictish leadership, which had been stable for more than 100 years since the time of Óengus mac Fergusa (The accession of Cináed mac Ailpín as king of both Picts and Scots can be attributed to the aftermath of this event)."
        },
        {
          id: 8,
          image:
            "https://hdqwalls.com/download/vikings-ragnar-4k-92-1920x1080.jpg"
        },
        {
          id: 9,
          image: "https://wallpaperaccess.com/full/782445.jpg"
        },
        {
          id: 10,
          image: "https://wallpaperplay.com/walls/full/5/9/a/55928.jpg"
        }
      ]
    },
    season2: {
      content: [
        {
          id: 14,
          video: "https://www.youtube.com/watch?v=f5av6OqFwz0",
          name: "Vikings season 1 trailer",
          description: "season 1"
        },
        {
          id: 15,
          imageContent:
            "https://i2.wp.com/www.criticbay.com/wp-content/uploads/2018/11/maxresdefault-6-1024x636-center.jpg?fit=1024%2C636&ssl=1",
          name: "The Vikings Season 1 description",
          story:
            "Vikings is a historical drama television series,[1] written and created by Michael Hirst for the television channel History.[2] The series broadly follows the exploits of the legendary Viking chieftain Ragnar Lothbrok and his crew, and in later seasons those of his sons. The first season premiered on March 3, 2013 in Canada and concluded on April 28, 2013, consisting of nine episodes. It begins at the start of the Viking Age, marked by the Lindisfarne raid in 793, and follows Ragnar`s quest to become Earl, and his desire to raid England."
        },
        {
          id: 16,
          image:
            "https://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2018/08/vikings_season_1.jpg?itok=iMCh4zOv"
        },
        {
          id: 17,
          image:
            "https://vignette.wikia.nocookie.net/bbf6279a-757d-4dd4-b874-cf6b60a6e1e3/scale-to-width-down/800"
        },
        {
          id: 18,
          image:
            "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2013/02/vikings_tv_review_a_l.jpg"
        },
        {
          id: 19,
          image:
            "https://spotlightreport.net/wp-content/uploads/2014/03/vikings-season-1-review.jpg"
        },
        {
          id: 20,
          image:
            "https://mindreels.files.wordpress.com/2015/11/vikings-season-2-promo.png"
        },
        {
          id: 11,
          image: "https://wallpaperaccess.com/full/782445.jpg"
        }
      ]
    },
    slides: {
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
      ]
    }
  },
  gotData: {
    season1: {
      content: [
        {
          id: 28,
          video: "https://www.youtube.com/watch?v=gcTkNV5Vg1E",
          name: "Season 1 trailer",
          description: "season 1"
        },
        {
          id: 29,
          video: "https://www.youtube.com/watch?v=WSP4iIB_wnY",
          name: "Season 1 - top 10 best scenes",
          description: "season 1"
        },
        {
          id: 30,
          video:
            "https://www.youtube.com/watch?v=tBRH5s2lsxc&list=PLxs8sC_ZcV3r6Zo_aTfm9Othwqjms3Atn&index=3",
          name: "House Stark season 1",
          description: "season 1"
        },
        {
          id: 31,
          imageContent:
            "https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2019/04/game_of_thrones_season_1_episode_1_winter_is_coming.jpg",
          name: "Season 1 description",
          story:
            'King Robert Baratheon and his Queen, Cersei Lannister, travel north to make his old friend Eddard "Ned" Stark, Lord of Winterfell, the offer to be the new Hand of the King after the previous one, Jon Arryn died under mysterious circumstances.Across the narrow sea, the exiled Prince Viserys Targaryen offers to trade his sister Daenerys to a violent Dothraki horse lord in exchange for his army. He hopes to use them to take back the throne which was taken from his father by Cersei`s brother, Jaime.Back in Winterfell, Ned`s 10-year-old son Bran discovers that Cersei and Jaime are involved in an incestuous relationship. Jaime pushes Bran out of the window to keep him from telling anyone.'
        },
        {
          id: 32,
          image:
            "https://static01.nyt.com/images/2011/04/10/arts/THRONES-6/THRONES-6-superJumbo-v2.jpg"
        },
        {
          id: 33,
          image:
            "https://oblacco.com/wp-content/uploads/2016/09/Game-of-Thrones-season-1.jpg"
        },
        {
          id: 34,
          image:
            "http://www.cheatsheet.com/wp-content/uploads/2015/02/tyrion.png"
        },
        {
          id: 35,
          image:
            "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/episodes/1/2/the-kingsroad-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg"
        },
        {
          id: 36,
          image:
            "https://www.newshub.co.nz/dam/form-uploaded-images-ordered/2019/05/15/HBO_jaime-jon-season-1_140519_1120.jpg"
        }
      ]
    },
    season2: {
      content: [
        {
          id: 28,
          video: "https://www.youtube.com/watch?v=XuKfFzk1uQs",
          name: "Season 2 trailer",
          description: "season 2"
        },
        {
          id: 29,
          video: "https://www.youtube.com/watch?v=Iv5o7MxnRfM",
          name: "The Adventures of Tyrion the Imp (Season 2) - Game of Thrones",
          description: "season 2"
        },
        {
          id: 31,
          imageContent: "https://i.ytimg.com/vi/kzSicCwtJI4/maxresdefault.jpg",
          name: "Season 2 description",
          story:
            "Game of Thrones Season 2 drops Thrones fans into a world torn apart by the death of Eddard Stark. The Game of Thrones second season aired on HBO in 2012, and with all the plot twists and new characters GoT throws at viewers with each new season, and even each new episode, it`s always good to refresh your memory with a quick summary, and that`s exactly what you`ll find in this Game of Thrones season 2 recap.As GoT season 2 opens, The War of the Five Kings is raging on, and Robb Stark`s army is growing while Stannis and his Red Priestess plan to take over the kingdom. There are dragons in Essos, white walkers beyond the wall, and Greyjoys holding Winterfell. Each of the Game of Thrones season 2 episodes seemed to be more complex than the previous one. Refresh your memory with this Game of Thrones season 2 episode list and summary."
        },
        {
          id: 32,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Nghuq09YNhbozPL_qEK0vdqlYY7lPpZEzlKm6yjo9yKFg4-a&s"
        },
        {
          id: 33,
          image:
            "http://images5.fanpop.com/image/photos/30200000/Game-Of-Thrones-Season-2-Weeks-Ahead-Trailer-game-of-thrones-30265948-1280-720.jpg"
        },
        {
          id: 34,
          image:
            "https://www.slantmagazine.com/wp-content/uploads/2015/07/tv_gameofthrones0205.jpg"
        },
        {
          id: 35,
          image: "http://i1.ytimg.com/vi/dcqrNXKv628/maxresdefault.jpg"
        }
      ]
    },
    slides: {
      GOTSlides: [
        {
          id: 40,
          image:
            "https://theholyshrine.files.wordpress.com/2013/08/game-of-thrones-01.jpg",
          h2: "The best story of all times",
          h1: "HBO Chanel",
          text: "Which side will you choose?",
          button: "Get Started"
        },
        {
          id: 41,
          image:
            "http://www.photobackgroundhd.com/wp-content/uploads/2019/04/latest-game-of-thrones-photo.jpg",
          h2: "GOT",
          h1: "HBO Chanel",
          text: "Become a part of an action",
          button: "Watch on Youtube",
          href: "https://www.youtube.com/watch?v=gy_4WOQidjI&t=3s"
        }
      ]
    }
  },
  newImage: "",
  newVideoText: "",
  newName: "",
  newDescription: "",
  newStory: ""
};

export let newTextInTextAreaImage = newText => {
  Data.newImage = newText;
  rerenderEntireTree();
};
export let newTextInTextAreaVideo = newText => {
  Data.newVideo = newText;
  rerenderEntireTree();
};
export let newTextInTextAreaName = newText => {
  Data.newName = newText;
  rerenderEntireTree();
};
export let newTextInTextAreaDescription = newText => {
  Data.newDescription = newText;
  rerenderEntireTree();
};
export let newTextInTextAreaStory = newText => {
  Data.newStory = newText;
  rerenderEntireTree();
};
export let addVideo = (currentVideo, currentName, currentDescription) => {
  let newVideo = {
    id: "",
    video: currentVideo,
    name: currentName,
    description: currentDescription
  };
  Data.vikingsData.season1.content.push(newVideo);
  rerenderEntireTree();
};
export let addImage = currentImage => {
  let newImage = {
    id: 100,
    image: currentImage
  };
  Data.vikingsData.season1.content.push(newImage);
  rerenderEntireTree();
};

export let addStory = (currentStory, currentName, currentImage) => {
  let newStory = {
    id: 100,
    story: currentStory,
    name: currentName,
    image: currentImage
  };
  Data.vikingsData.season1.content.push(newStory);
  rerenderEntireTree();
};

export let getContentMap = arrey => {
  return arrey.reduce(
    (map, product) => ({
      ...map,
      [product.id]: product
    }),
    {}
  );
};

export default Data;
