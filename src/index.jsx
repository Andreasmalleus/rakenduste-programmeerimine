//const homepage = require("./homepage.js");
//const itempage = require("./itempage.js");

import ReactDom from "react-dom";
import React from "react";
import App from "./components/App.jsx";


const root = document.getElementById("app");


ReactDom.render(
    <App />,
    root
);



