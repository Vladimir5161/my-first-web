import React from "react";
import { Link } from "react-router-dom";

const NewsListItem = ({
    newsImage,
    newsText,
    newsName,
    data,
    time,
    id,
    deleteNews,
    editModeClass,
    editModeNews,
    keyFirebase
}) => {
    return (
        <div className="newsState">
            {editModeNews ? (
                <button
                    className={editModeClass}
                    onClick={() => {
                        deleteNews(id, keyFirebase);
                    }}
                ></button>
            ) : null}
            <div className="newsTimeData">
                <div>{data}</div>
                <div>{time}</div>
            </div>
            <h3 className="newsName">{newsName}</h3>
            <div className="news">
                <img className="newsImage" src={newsImage} alt="" />
                <div className="newsText">{newsText}</div>
            </div>
            <Link to={`/news/${id}`}>
                <button className="readMore">Read More</button>
            </Link>
        </div>
    );
};

export default NewsListItem;
