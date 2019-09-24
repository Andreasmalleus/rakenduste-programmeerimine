//const homepage = require("./homepage.js");
//const itempage = require("./itempage.js");
import homepage from "./homepage.js";
import itempage from "./itempage.js";
import React from "react";
import ReactDom from "react-dom";

const root = document.getElementById("app");

ReactDom.render(

    <button>Hello world</button>,
    root

);

console.log("I am index file");


window.addEventListener("load", () => {
    homepage.setup();
    itempage.setup();

})
