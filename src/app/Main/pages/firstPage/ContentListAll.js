import React from "react";

import ContentListItem from "./ContentListItem.js";
import ContentListImagesItem from "./contentImage/ContentListImagesItem.js";
import contentImage from "./contentImage/contentImage.js";
import contentVideo from "./contentVideo/contentVideo.js";
import contentStory from "./contentStory/contentStory.js";

class ContentListAll extends React.Component {
  render() {
    const { OnLike, OnLiked } = this.props;

    return (
      <div>
        <div>
          <div className="contentBlockName">Videos</div>
          <div className="ContentList">
            {contentVideo.map(
              ({ video, story, name, description, text, id }) => (
                <div className="Content" key={id}>
                  <ContentListItem
                    video={video}
                    story={story}
                    name={name}
                    text={text}
                    description={description}
                    OnLike={OnLike}
                    OnLiked={OnLiked}
                  />
                  <button className="Add-content Know-more">Know More</button>
                </div>
              )
            )}
          </div>
        </div>
        <div>
          <div className="contentBlockName">Images</div>
          <div className="ContentList">
            {contentImage.map(({ image, id }) => (
              <div className="Content-images" key={id}>
                <ContentListImagesItem
                  image={image}
                  OnLike={OnLike}
                  OnLiked={OnLiked}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="contentBlockName">Stories</div>
          <div className="ContentList">
            {contentStory.map(
              ({ image, video, story, name, description, text, id }) => (
                <div className="Content" key={id}>
                  <ContentListItem
                    video={video}
                    story={story}
                    image={image}
                    name={name}
                    text={text}
                    description={description}
                    OnLike={OnLike}
                    OnLiked={OnLiked}
                  />
                  <button className="Add-content Know-more">Know More</button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default ContentListAll;
