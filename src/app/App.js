import React from "react";
import { connect } from "react-redux";
import "../common/reset.css";
import "../common/base.css";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";
import { initializeApp } from "../store/InitializeReducer";
import Preloader from "./Main/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (this.props.initialized === false) {
            return <Preloader />;
        }
        return (
            <div className="app">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    logo: state.movieChose1.logo,
    initialized: state.initializeApp.initialized
});

export default connect(mapStateToProps, { initializeApp })(App);
