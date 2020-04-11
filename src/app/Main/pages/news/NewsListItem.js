import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NewsContext } from "./NewsContext";

const NewsListItem = ({
    newsImage,
    newsText,
    newsName,
    data,
    time,
    id,
    editModeClass,
    editModeNews,
    keyFirebase,
}) => {
    let { deleteNews, isFetching } = useContext(NewsContext);
    return (
        <div className="newsState">
            {editModeNews ? (
                <button
                    disabled={isFetching.some((item) => item === id)}
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
