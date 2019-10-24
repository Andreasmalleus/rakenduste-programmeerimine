import React from "react";
import { Link } from "react-router-dom";
import { cartIcon, loginIcon } from "../icons.js";
import "../../public/css/header.css";



const Header = (props) => {

    return (
        <div className={"heading"}>
        <Link to= {"/home"}>
            <div className={"logo"}>
                <img srcSet="/Images/logo.png"></img>
            </div>
        </Link>
        {check(props)}
        </div>
    );
};

const check = (param) => {
    if(!param.user){
        return (
            <div className={"headerButtons"}>
            <Link to={"/login"} >   
                <div className={"headerButton"}>
                    <img src={loginIcon} className="headerButtonIcon"></img>
                    <div className="headerButtonText">Login/Register</div>
                </div>
            </Link>    
                <div className={"headerButton"}>
                    <img src={cartIcon} className="headerButtonIcon"></img>
                    <div className="headerButtonText">Cart</div>
                </div>

            </div>
        );
    }else{
        return(
            <div className={"headerButtons"}>
                <div>Hello, {param.user.username}</div>
                <div className={"headerButton"}>
                    <img src={cartIcon} className="headerButtonIcon"></img>
                    <div className="headerButtonText">Cart</div>
                </div>

            </div>
        );
    }
};

export default Header;