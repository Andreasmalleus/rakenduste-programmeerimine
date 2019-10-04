import React from "react";
import { Link } from "react-router-dom";
import { cartIcon, loginIcon } from "./icons";

console.log(cartIcon, "-- this is cartICon");

const Header = () => {
    return (
        <div className={"heading"}>
        <Link to= {"/"}>
            <div className={"logo"}>
                <img srcSet="/Images/logo.jpg"></img>
            </div>
        </Link>
            <div className={"buttons"}>
                <button className={"loginSignupButton"}>Login/Signup</button>
                <button className={"cartButton"}>Cart</button>
                <img className="CartIcon" src={cartIcon} width="100"></img> 
                <img className="LoginIcon" src={loginIcon} width="100"></img> 

            </div>
        </div>
    );
};

export default Header;