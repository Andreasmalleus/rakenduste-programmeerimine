import React from "react";
import { Link } from "react-router-dom";
import { cartIcon, loginIcon, userIcon } from "../icons.js";
import "../../public/css/header.css";//possible because of css and style loader
import {connect} from "react-redux";
import PropTypes from "prop-types";

import * as selectors from "../store/selectors.js";


const Header = ({user}) => {
    return (
                        <div className={"heading"}>
                        <Link to= {"/"}>
                            <div className={"logo"}>
                                <img srcSet="/static/Images/bethehype1.png" className="logo-img"></img>
                            </div>
                        </Link>
                        <div className={"headerButtons"}>
                        {check(user)}
                        </div>
                        </div>
    );
};
const check = (user) => {
    if(user == null){
        console.log("hello");
        return unlogged();
    }else{
        return logged(user);
    }
};

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        size++;
    }
    console.log(key);
    return size;
};

const Badge = (props) => {
    if(props != null){
        return(<span className="cart-counter">{Object.size(props.user.cart)}</span>);
    }else{
        return null;
    }
};




const unlogged = () => {
    return(
        <div className={"headerButtons"}>
        <div className={"headerButton"}>
        <Link to={"/login"} >
        <img src={loginIcon} className="headerButtonIcon"></img>
        </Link> 
        <div className="headerButtonText">Login/Register</div>
        </div>
        <div className={"headerButton"}>
        <Badge />
        <Link to={"/items/notlogged/cart"}>
        <img src={cartIcon} className="headerButtonIcon"></img>
        </Link>
        <div className="headerButtonText">Cart</div>
        </div>
        </div>
    );
};

const logged = (user) => {
    return (
        <div className={"headerButtons"}>
        <div>Hello, {user.username}</div>
        <div className={"headerButton"}>
        <Link to={`/users/${user._id}`}>
            <img src={userIcon} className="userButtonIcon"></img>
        </Link>
            <div className="headerButtonText">User</div>
        <div className={"headerButton"}></div>
        <Badge user={user}/>
        <Link to={`/users/${user._id}/cart`}>
        <img src={cartIcon} className="headerButtonIcon"></img>
        </Link>
        <div className="headerButtonText">Cart</div>
        </div>
        </div>
    );
};

Header.propTypes = {

    //location : PropTypes.string,
    cart : PropTypes.array,
    user : PropTypes.object,

};

Badge.propTypes = {

    len : PropTypes.number,

};


const mapStateToProps = (store) => {
    return{
        user : selectors.getUser(store),

    };
};

export default connect(mapStateToProps)(Header);
