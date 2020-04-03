import React, { useContext } from "react";
import { ContentContext } from "../Main/pages/mainPage/ContentContext";

export const ControlButtonHoc = (Component) => {
    const ComponentBtn = (props) => {
        let { season, movie, DataArrey } = useContext(ContentContext);
        const getContentType = (contentType, movie, season, DataArrey) => {
            let Content = DataArrey.Data.filter((item) => item.movie === movie);
            let ContentAll = Content.filter((item) => item[contentType]);
            let ContentTypes = ContentAll.filter(
                (item) => item.season === season
            ); //a type of content(image,story or video) for filter
            return ContentTypes; //an arrey filtered by season, movie and type, content
        };
        const funcControlButtonName = (contentType, additionalCount) => {
            let ContentTypes = getContentType(
                contentType,
                movie,
                season,
                DataArrey
            );
            if (
                ContentTypes.length <=
                    DataArrey.firstContent[contentType].length +
                        additionalCount &&
                ContentTypes.length !==
                    DataArrey.firstContent[contentType].length
            ) {
                return true;
            } else {
                return false;
            }
        };
        return (
            <Component
                {...props}
                funcControlButtonName={funcControlButtonName}
                getContentType={getContentType}
            />
        );
    };
    const ControlButtonHocComponent = ComponentBtn;
    return ControlButtonHocComponent;
};
