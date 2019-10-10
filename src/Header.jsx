import React from "react";
import { Link } from "react-router-dom";
import { cartIcon, loginIcon } from "./icons";
import "../public/css/header.css";

const Header = () => {
    return (
        <div className={"heading"}>
        <Link to= {"/home"}>
            <div className={"logo"}>
                <img srcSet="/Images/logo.png"></img>
            </div>
        </Link>
            <div className={"headerButtons"}>
                <div className={"headerButton"}>
                    
                    <img src={loginIcon} className="headerButtonIcon"></img>
                    <div className="headerButtonText">Login/Signup</div>
                </div>
                <div className={"headerButton"}>
                    <img src={cartIcon} className="headerButtonIcon"></img>
                    <div className="headerButtonText">Cart</div>
                </div>

            </div>
        </div>
    );
};

export default Header;