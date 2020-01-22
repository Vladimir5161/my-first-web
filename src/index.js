import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./store/rootReducer";

const store = createStore(rootReducer);

const render = () => {

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
  }
  render(store);