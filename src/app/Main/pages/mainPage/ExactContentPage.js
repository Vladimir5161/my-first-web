import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Player from "../../../../common/Player.js";
import { connect } from "react-redux";
import { exactContentId } from "../../../selectors/exactContent-selectors";
import { initializeApp } from "../../../../store/InitializeReducer";
import Preloader from "../../CommonComonents/Preloader";
import EditStoryReduxForm from "../../../Form-Controls/EditStoryForm";
import { updateStory } from "../../../../store/DataReducer";
import { ContentContext } from "./ContentContext.js";

const ExactContentPage = ({
    match,
    Data,
    playerStyle = "react-player2",
    initialized,
    updateStory,
}) => {
    let [edit, changeEdit] = useState("false");
    let { movie, season, isAuth } = useContext(ContentContext);
    const EditStory = () => {
        changeEdit(true);
    };
    const onSubmit = (formData) => {
        changeEdit(false);
        updateStory(
            match.params.id,
            formData.name,
            formData.imageContent,
            formData.story,
            movie,
            season,
            "story",
            Data[match.params.id].keyFirebase
        );
    };
    return initialized ? (
        <div className="containerMain">
            <div className="ExactContent">
                {edit === true ? (
                    <EditStoryReduxForm
                        initialValues={Data[match.params.id]}
                        onSubmit={onSubmit}
                        match={match}
                        Data={Data}
                    />
                ) : (
                    <ExactContent
                        EditStory={EditStory}
                        match={match}
                        Data={Data}
                        playerStyle={playerStyle}
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

const ExactContent = (props) => {
    return (
        <div>
            <div className="ExactContentName">
                {props.Data[props.match.params.id].name}
            </div>
            <Player
                video={props.Data[props.match.params.id].video}
                playerStyle={props.playerStyle}
            />
            <div className="ButtonGoBackDiv">
                <Link to="/">
                    <button className="ButtonGoBack"></button>
                </Link>
            </div>
            {props.isAuth ? (
                <button
                    className="saveContentButton"
                    onClick={() => {
                        props.EditStory();
                    }}
                >
                    Edit
                </button>
            ) : null}
            <div className="ExactContentInfo">
                <img
                    className="ExactContentImage"
                    src={props.Data[props.match.params.id].imageContent}
                    alt=""
                />
                <div className="ExactContentText">
                    {props.Data[props.match.params.id].story}
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, { initializeApp, updateStory })(
    ExactContentPage
);
