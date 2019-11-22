import React from "react";
import HomePage from "../pages/HomePage.jsx";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ItemPage from "../pages/ItemPage.jsx";
import IntroPage from "../pages/IntroPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import SignupPage from "../pages/SignupPage.jsx";
import UserPage from "../pages/UserPage.jsx";
import NotFound from "../NotFound.jsx";
import CartPage from "../pages/CartPage.jsx";
//import {HomePage, ItemPage, IntroPage, LoginPage, SignupPage, UserPage, NotFound, CartPage} from "../../modules/Barrel.js";


export const AuthContext = React.createContext(null); 

class App extends React.PureComponent{

    //switch returns first match
    render(){
        return(
        <Router>
            <Switch>
            <Route path="/intro" exact component={IntroPage}/>
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" exact component = {SignupPage} />
            <Route path="/users/:userId" exact component = {UserPage} />
            <Route path="/" exact component={HomePage} />
            <Route path="/items/:itemId" exact component={ItemPage} />
            <Route path="/items/:userId/cart" exact component={CartPage} />
            <Route exact component={NotFound}/>
            </Switch>
        </Router>
        );
    }
}
export default App;