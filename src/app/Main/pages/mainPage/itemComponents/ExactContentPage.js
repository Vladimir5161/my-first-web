import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Player from "../../../CommonComonents/Player.js";
import { connect } from "react-redux";
import { exactContentId } from "../../../../selectors/exactContent-selectors";
import { initializeApp } from "../../../../../store/InitializeReducer";
import Preloader from "../../../CommonComonents/Preloader";
import EditContentReduxForm from "../../../../Form-Controls/EditContentForm";
import { updateContentThunk } from "../../../../../store/DataReducer";
import { ContentContext } from "../ContentContext.js";

const ExactContentPage = ({ match, Data, initialized, updateContentThunk }) => {
    let [edit, changeEdit] = useState("false");
    let { movie, season, isAuth } = useContext(ContentContext);
    const EditContent = () => {
        changeEdit(true);
    };
    const onSubmit = (formData) => {
        updateContentThunk(
            match.params.id,
            formData.name,
            formData.video,
            formData.imageContent,
            formData.story,
            movie,
            season,
            Object.keys(Data[match.params.id]).some((n) => n === "story")
                ? "story"
                : "video",
            Data[match.params.id].keyFirebase
        ).then(() => changeEdit(false));
    };
    return initialized ? (
        <div className="containerMain">
            <div className="ExactContent">
                {edit === true ? (
                    <EditContentReduxForm
                        initialValues={Data[match.params.id]}
                        onSubmit={onSubmit}
                        match={match}
                        Data={Data}
                    />
                ) : (
                    <ExactContent
                        EditContent={EditContent}
                        match={match}
                        Data={Data}
                        isAuth={isAuth}
                    />
                )}
            </div>
        </div>
    ) : (
        <Preloader />
    );
};
const mapStateToProps = (state) => ({
    Data: exactContentId(state),
    initialized: state.initializeApp.initialized,
});

const ExactContent = ({ Data, match, isAuth, EditContent }) => {
    return (
        <div>
            <div className="ExactContentName">{Data[match.params.id].name}</div>
            <Player
                video={Data[match.params.id].video}
                playerStyle={"react-player2"}
            />
            <div className="ButtonGoBackDiv">
                <Link to="/">
                    <button className="ButtonGoBack"></button>
                </Link>
            </div>
            {isAuth ? (
                <button
                    className="saveContentButton"
                    onClick={() => {
                        EditContent();
                    }}
                >
                    Edit
                </button>
            ) : null}
            <div className="ExactContentInfo">
                <img
                    className="ExactContentImage"
                    src={Data[match.params.id].imageContent}
                    alt=""
                />
                <div className="ExactContentText">
                    {Data[match.params.id].story}
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, { initializeApp, updateContentThunk })(
    ExactContentPage
);
