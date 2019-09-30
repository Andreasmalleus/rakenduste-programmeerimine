//const homepage = require("./homepage.js");
//const itempage = require("./itempage.js");

import HomePage from "./HomePage.jsx";
import ReactDom from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import ItemPage from "./ItemPage.jsx";


const root = document.getElementById("app");


ReactDom.render(
    <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/item" exact component={ItemPage} />
    </Router>,
    root
);



