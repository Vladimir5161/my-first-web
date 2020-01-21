
let rerenderEntireTree = () => {
  console.log("s");
};
let Data = {
  AddImage: {
    newImage: ""
  },
  AddVideo: {
    newVideo: "",
    newVideoName: "",
    newVideoDescription: ""
  },
  AddStory: {
    newStoryImage: "",
    newStoryName: "",
    newStoryText: ""
  }
};
export let newTextImage = newText => {
  Data.AddImage.newImage = newText;
  rerenderEntireTree(Data);
};

export let newTextVideo = newText => {
  Data.AddVideo.newVideo = newText;
  rerenderEntireTree(Data);
};
export let newTextVideoName = newText => {
  Data.AddVideo.newVideoName = newText;
  rerenderEntireTree(Data);
};
export let newTextVideoDescription = newText => {
  Data.AddVideo.newVideoDescription = newText;
  rerenderEntireTree(Data);
};
export let newTextStoryImage = newText => {
  Data.AddStory.newStoryImage = newText;
  rerenderEntireTree(Data);
};
export let newTextStoryName = newText => {
  Data.AddStory.newStoryName = newText;
  rerenderEntireTree(Data);
};
export let newTextStoryText = newText => {
  Data.AddStory.newStoryText = newText;
  rerenderEntireTree(Data);
};
export let addVideo = (
  currentVideo,
  currentName,
  currentDescription,
  filterWay,
  filterWay1,
  filterWay2,

) => {
  let newVideo = {
    id: newId(),
    movieVikingsSeason1Video: true,
    video: currentVideo,
    name: currentName,
    description: currentDescription,

  };
  let newVideo1 = {
    id: newId(),
    movieVikingsSeason2Video: true,
    video: currentVideo,
    name: currentName,
    description: currentDescription,

  };
  let newVideo2 = {
    id: newId(),
    movieGoTSeason1Video: true,
    video: currentVideo,
    name: currentName,
    description: currentDescription,

  };
  let newVideo3 = {
    id: newId(),
    movieGoTSeason2Video: true,
    video: currentVideo,
    name: currentName,
    description: currentDescription,

  };
  const chosenAdd = () => {
    filterWay
      ? Data.vikingsData.push(newVideo)
      : filterWay1
      ? Data.vikingsData.push(newVideo1)
      : filterWay2
      ? Data.vikingsData.push(newVideo2)
      : Data.vikingsData.push(newVideo3);
  };
  chosenAdd();
  rerenderEntireTree(Data);
};

export let addImage = (currentImage, filterWay, filterWay1, filterWay2) => {
  let newImage = {
    id: newId(),
    movieVikingsSeason1Image: true,
    image: currentImage,

  };
  let newImage1 = {
    id: newId(),
    movieVikingsSeason2Image: true,
    image: currentImage,

  };
  let newImage2 = {
    id: newId(),
    movieGoTSeason1Image: true,
    image: currentImage,

  };
  let newImage3 = {
    id: newId(),
    movieGoTSeason2Image: true,
    image: currentImage,

  };
  const chosenAdd = () => {
    filterWay
      ? Data.vikingsData.push(newImage)
      : filterWay1
      ? Data.vikingsData.push(newImage1)
      : filterWay2
      ? Data.vikingsData.push(newImage2)
      : Data.vikingsData.push(newImage3);
  };
  chosenAdd();
  rerenderEntireTree(Data);
};

export let addStory = (
  currentStory,
  currentName,
  currentImage,
  filterWay,
  filterWay1,
  filterWay2
) => {
  let newStory = {
    id: newId(),
    movieVikingsSeason1Story: true,
    story: currentStory,
    name: currentName,
    imageContent: currentImage,

  };
  let newStory1 = {
    id: newId(),
    movieVikingsSeason2Story: true,
    story: currentStory,
    name: currentName,
    imageContent: currentImage,

  };
  let newStory2 = {
    id: newId(),
    movieGoTSeason1Story: true,
    story: currentStory,
    name: currentName,
    imageContent: currentImage,

  };
  let newStory3 = {
    id: newId(),
    movieGoTSeason2Story: true,
    story: currentStory,
    name: currentName,
    imageContent: currentImage,

  };
  const chosenAdd = () => {
    filterWay
      ? Data.vikingsData.push(newStory)
      : filterWay1
      ? Data.vikingsData.push(newStory1)
      : filterWay2
      ? Data.vikingsData.push(newStory2)
      : Data.vikingsData.push(newStory3);
  };
  chosenAdd();
  rerenderEntireTree(Data);
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

export let reloader = observer => {
  rerenderEntireTree = observer;
};
let newId = () => {
  let idCount = Data.vikingsData.pop();
  Data.vikingsData.push(idCount);
  let newId = idCount.id + 1;
  return newId;
}
console.log(Data.vikingsData)
export default Data;
