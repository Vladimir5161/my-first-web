import React from "react"
import { connect } from "react-redux"

const Filter = ({
    OnClickAllContent,
    OnClickImage,
    OnClickStory,
    OnClickVideo
}) => {
    return(
        <div className="filter">
              <ul>
                <li>
                  <div
                    className="buttonFilter"
                    onClick={() => {
                      OnClickImage();
                    }}
                  >
                    Photo
                  </div>
                </li>
                <li>
                  <div
                    className="buttonFilter"
                    onClick={() => {
                      OnClickVideo();
                    }}
                  >
                    Video
                  </div>
                </li>
                <li>
                  <div
                    className="buttonFilter"
                    onClick={() => {
                      OnClickStory();
                    }}
                  >
                    Stories
                  </div>
                </li>
                <li>
                  <div
                    className="buttonFilter"
                    onClick={() => {
                      OnClickAllContent();
                    }}
                  >
                    All
                  </div>
                </li>
              </ul>
            </div>
    )
}

const mapDispatchToProps = dispatch => ({
    OnClickImage: () =>dispatch({
        type: "ONCLICKPHOTO",
    }),
    OnClickVideo: () =>dispatch({
        type: "ONCLICKVIDEO",
    }),
    OnClickStory: () =>dispatch({
        type: "ONCLICKSTORY",
    }),
    OnClickAllContent: () =>dispatch({
        type: "ONCLICKALL",
    })
})

export default connect(null, mapDispatchToProps)(Filter)