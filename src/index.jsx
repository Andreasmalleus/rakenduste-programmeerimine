import ReactDom from "react-dom";
import React from "react";
import App from "./components/App.jsx";

import "typeface-roboto";

import {Provider} from "react-redux";
import configureStore from "./store/configureStore.js";
import { PersistGate } from "redux-persist/integration/react";

const root = document.getElementById("app");

const {store,persistor} = configureStore();

ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    root
);