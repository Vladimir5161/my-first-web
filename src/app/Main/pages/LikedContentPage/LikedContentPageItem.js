import React from "react";
import Player from "./../../../../common/Player.js";
import ButtonClose from "./ButtonClose";
import ButtonCloseImage from "../mainPage/ButtonCloseImage";
import { Link } from "react-router-dom";

class LikedContentPageItem extends React.Component {
  state = {
    imageContent: "imageContent-full",
    fullScreenBlock: "fullScreenBlock",
    ButtonCloseImage: "ButtonCloseImage",
    fullScreenImageFixedBlock: "fullScreenImageFixedBlock"
  };
  OnClickedImage = () => {
    this.setState(prevState => ({
      imageContent: (prevState.imageContent = "imageContent-full-clicked")
    }));
    this.setState({ fullScreenBlock: "fullScreenBlock-clicked" });
    this.setState({ ButtonCloseImage: "ButtonCloseImage-clicked" });
    this.setState({
      fullScreenImageFixedBlock: "fullScreenImageFixedBlock-clicked"
    });
  };
  OnClickImage = () => {
    this.setState(prevState => ({
      imageContent: (prevState.imageContent = "imageContent-full")
    }));
    this.setState({ fullScreenBlock: "fullScreenBlock" });
    this.setState({ ButtonCloseImage: "ButtonCloseImage" });
    this.setState({ fullScreenImageFixedBlock: "fullScreenImageFixedBlock" });
  };
  render() {
    const { product,  contentId, playerStyle = "react-player3"} = this.props;
    return (
      <div>
        <ButtonClose
          contentId={contentId}
        />
        <div className="content-list-item-images-liked">
          <img
            className="likedImageContent"
            src={product.image}
            alt=""
            onClick={() => {
              this.OnClickedImage();
            }}
          />

          <div className={this.state.fullScreenImageFixedBlock}>
            <img
              className={this.state.imageContent}
              src={product.image}
              alt=""
            />
            <ButtonCloseImage
              OnClickImage={this.OnClickImage}
              ButtonCloseImage={this.state.ButtonCloseImage}
            />
          </div>
        </div>
        <div className="likedContent">
          <h2 className="likedContent-name">{product.name}</h2>
          <Player video={product.video} playerStyle={playerStyle}/>
          <div className="likedContent-image">
            <img src={product.imageContent} alt="" />
          </div>
        </div>
        <Link to={`/content/${contentId}`} className="likedContent-button">
                      <button className="Add-content Know-more">Read the Story</button>
          </Link>
      </div>
    );
  }
}
export default LikedContentPageItem;
