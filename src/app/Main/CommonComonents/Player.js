import React from "react";

import ReactPlayer from "react-player";

class Player extends React.Component {
  render() {
    const { video, playerStyle } = this.props;
    return (
      <div className="player-wrapper">
        <div className="VideoContent">
          <ReactPlayer
            className={playerStyle}
            url={video}
            width="320"
            height="auto"
            controls={true}
          />
        </div>
      </div>
    );
  }
}

export default Player;
