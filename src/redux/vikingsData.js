import { rerenderEntireTree } from "../render";

let vikingsData = {
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
        video: "https://www.youtube.com/watch?v=IGnoxboek3g",
        name: "Vikings trailer 1",
        description: "about Ragnar"
      },
      {
        id: 5,
        image: "https://wallpaperaccess.com/full/782445.jpg",
        name: "The Vikings invasion to England",
        story:
          'According to the Anglo-Saxon Chronicles, Viking raiders struck England in 793 and raided Lindisfarne, the monastery that held Saint Cuthbert`s relics. The raiders killed the monks and captured the valuables. The raid marks the beginning of the "Viking Age of Invasion", made possible by the Viking longship. Great but sporadic violence occurred from the last decade of the eighth century on England`s northern and eastern shores; Viking raids continued on a small scale across coastal England. While the initial raiding groups were small, a great amount of planning is believed to have been involved. The Norwegians raided during the winter of 840–841, rather than the usual summer, having waited on an island off Ireland. In 850, Vikings overwintered for the first time in England, on the island of Thanet, Kent. In 854, a raiding party overwintered a second time, at the Isle of Sheppey in the Thames estuary. In 864, they reverted to Thanet for their winter encampment.'
      },
      {
        id: 6,
        image: "https://wallpaperaccess.com/full/782445.jpg",
        name: "The Vikings invasion to Irland",
        story:
          "The Vikings pillaged monasteries on Ireland`s west coast in 795, and then spread out to cover the rest of the coastline. The north and east of the island were most affected. During the first 40 years, the raids were conducted by small, mobile Viking groups. By 830, the groups consisted of large fleets of Viking ships. From 840, the Vikings began establishing permanent bases at the coasts. Dublin was the most significant settlement in the long term. The Irish became accustomed to the Viking presence. In some cases, they became allies and married each other."
      },
      {
        id: 7,
        image:
          "https://hdqwalls.com/download/vikings-ragnar-4k-92-1920x1080.jpg",
        name: "The Vikings invasion to Scotland",
        story:
          "While few records are known, the Vikings are thought to have led their first raids in Scotland on the holy island of Iona in 794, the year following the raid on the other holy island of Lindisfarne, Northumbria. In 839, a large Norse fleet invaded via the River Tay and River Earn, both of which were highly navigable, and reached into the heart of the Pictish kingdom of Fortriu. They defeated Eogán mac Óengusa, king of the Picts, his brother Bran, and the king of the Scots of Dál Riata, Áed mac Boanta, along with many members of the Pictish aristocracy in battle. The sophisticated kingdom that had been built fell apart, as did the Pictish leadership, which had been stable for more than 100 years since the time of Óengus mac Fergusa (The accession of Cináed mac Ailpín as king of both Picts and Scots can be attributed to the aftermath of this event)."
      }
    ],
    contentImage: [
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
        image:
          "https://i2.wp.com/www.criticbay.com/wp-content/uploads/2018/11/maxresdefault-6-1024x636-center.jpg?fit=1024%2C636&ssl=1",
        name: "The Vikings Season 1 description",
        story:
          "Vikings is a historical drama television series,[1] written and created by Michael Hirst for the television channel History.[2] The series broadly follows the exploits of the legendary Viking chieftain Ragnar Lothbrok and his crew, and in later seasons those of his sons. The first season premiered on March 3, 2013 in Canada and concluded on April 28, 2013, consisting of nine episodes. It begins at the start of the Viking Age, marked by the Lindisfarne raid in 793, and follows Ragnar`s quest to become Earl, and his desire to raid England."
      }
    ],
    contentImage: [
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
};

export let addImage = currentImage => {
  let newImage = {
    id: 100,
    image: currentImage
  };
  vikingsData.season1.contentImage.push(newImage);
  rerenderEntireTree();
};
export default vikingsData;
