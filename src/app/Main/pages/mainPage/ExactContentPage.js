import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Player from "../../../../common/Player.js";
import { connect } from "react-redux";
import { exactContentId } from "../../../selectors/exactContent-selectors";
import { initializeApp } from "../../../../store/InitializeReducer";
import Preloader from "../../CommonComonents/Preloader";
import EditContentReduxForm from "../../../Form-Controls/EditContentForm";
import { updateContentThunk } from "../../../../store/DataReducer";
import { ContentContext } from "./ContentContext.js";

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

const ExactContent = (props) => {
    return (
        <div>
            <div className="ExactContentName">
                {props.Data[props.match.params.id].name}
            </div>
            <Player
                video={props.Data[props.match.params.id].video}
                playerStyle={"react-player2"}
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
                        props.EditContent();
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

export default connect(mapStateToProps, { initializeApp, updateContentThunk })(
    ExactContentPage
);
