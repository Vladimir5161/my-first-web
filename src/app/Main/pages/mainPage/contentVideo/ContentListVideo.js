import React from "react";
import { Link } from "react-router-dom";
import ContentListItem from "../ContentListItem.js";
import { connect } from "react-redux"


const ContentListVideo = ({
  videos,
  wayVIdeo,
  DataArrey,
}) => {
    return (
      <div className={videos}>
        <div className="contentBlockName ">Videos</div>
        <div className="ContentList">
          {DataArrey
            .filter(wayVIdeo)
            .map(({ name, description, video, id }) => (
              <div className="Content" key={id}>
                <ContentListItem
                  video={video}
                  name={name}
                  description={description}
                  id={id}
                />
                <Link to={`/content/${id}`}>
                  <button className="Add-content Know-more">Know More</button>
                </Link>
              </div>
            ))}
        </div>
      </div>
    );
  }
const mapStateToProps = state => ({
  DataArrey: state.Data.Data
})

export default connect(mapStateToProps)(ContentListVideo);
