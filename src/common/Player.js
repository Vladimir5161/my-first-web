import React from "react";

import ReactPlayer from "react-player";

class Player extends React.Component {
  render() {
    const { video } = this.props;
    return (
      <div className="player-wrapper">
        <div className="VideoContent">
          <ReactPlayer
            className="react-player"
            url={video}
            width="320"
            height="auto"
          />
        </div>
      </div>
    );
  }
}

export default Player;
