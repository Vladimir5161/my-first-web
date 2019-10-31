import React from "react";

const ContentListItem = ({ image, name, description, text }) => {
  return (
    <div className="content-list-item">
      <div className="content-image">
        <img src={image} alt="" />
      </div>
      <div className="content-text">{text} </div>
      <h2 className="content-name">{name}</h2>
      <p className="content-description">"{description}"</p>
      <button className="Add-content">Know More</button>
    </div>
  );
};

export default ContentListItem;
