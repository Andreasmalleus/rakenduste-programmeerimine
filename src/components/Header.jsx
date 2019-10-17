import React from "react";
import { Link } from "react-router-dom";
import { cartIcon, loginIcon } from "../icons.js";
import "../../public/css/header.css";

const Header = () => {
    return (
        <div className={"heading"}>
        <Link to= {"/home"}>
            <div className={"logo"}>
                <img srcSet="/Images/logo.png"></img>
            </div>
        </Link>
            <div className={"headerButtons"}>
            <Link to={"/loginPage"} >   
                <div className={"headerButton"}>
                    <img src={loginIcon} className="headerButtonIcon"></img>
                    <div className="headerButtonText">Login</div>
                </div>
            </Link>    
                <div className={"headerButton"}>
                    <img src={cartIcon} className="headerButtonIcon"></img>
                    <div className="headerButtonText">Cart</div>
                </div>

            </div>
        </div>
    );
};

export default Header;