import React from "react";
import "../common/reset.css";
import "../common/base.css";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";
import { connect } from "react-redux";
import { initializeApp } from "../store/InitializeReducer";
import { Auth } from "../store/AuthReducer";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
        this.props.Auth();
    }
    render() {
        return (
            <div className="app">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}
export default connect(null, { initializeApp, Auth })(App);
