import React from "react";
import { Link } from "react-router-dom";
import Player from "../../../../common/Player.js";
import { connect } from "react-redux";
import { exactContentId } from "../../../selectors/exactContent-selectors";
import { initializeApp } from "../../../../store/InitializeReducer";
import Preloader from "../../CommonComonents/Preloader";

class ExactContentPage extends React.Component {
    render() {
        let {
            match,
            Data,
            playerStyle = "react-player2",
            initialized
        } = this.props;
        return initialized ? (
            <div className="containerMain">
                <div className="ExactContent">
                    <h3 className="ExactContentName">
                        {Data[match.params.id].name}
                    </h3>
                    <Player
                        video={Data[match.params.id].video}
                        playerStyle={playerStyle}
                    />
                    <div className="ButtonGoBackDiv">
                        <Link to="/">
                            <button className="ButtonGoBack"></button>
                        </Link>
                    </div>
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
            </div>
        ) : (
            <Preloader />
        );
    }
}
const mapStateToProps = state => ({
    Data: exactContentId(state),
    initialized: state.initializeApp.initialized
});

export default connect(mapStateToProps, { initializeApp })(ExactContentPage);
