//const homepage = require("./homepage.js");
//const itempage = require("./itempage.js");

import HomePage from "./pages/HomePage.jsx";
import ReactDom from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import ItemPage from "./pages/ItemPage.jsx";
import IntroPage from "./pages/IntroPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import UserPage from "./pages/UserPage.jsx";


const root = document.getElementById("app");


ReactDom.render(
    <Router>
        <Route path="/" exact component={IntroPage}/>
        <Route path="/login" exact component = {LoginPage} />
        <Route path="/signup" exact component = {SignupPage} />
        <Route path="/users" exact component = {UserPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/home/items/:itemId" exact component={ItemPage} />   
    </Router>,
    root
);



