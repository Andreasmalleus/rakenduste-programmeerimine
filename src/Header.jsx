import React from "react";
import { Link } from "react-router-dom";


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
            </div>
        </div>
    );
};

export default Header;