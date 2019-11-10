import ReactDom from "react-dom";
import React from "react";
import App from "./components/App.jsx";

import "typeface-roboto";

import {Provider} from "react-redux";
import store from "./store/store.js";

const root = document.getElementById("app");


ReactDom.render(
    <Provider store={store}>
    <App />
    </Provider>,
    root
);



