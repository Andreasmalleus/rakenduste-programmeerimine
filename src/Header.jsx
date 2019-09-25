import React from "react";

const Header = () => {
    function handleLogoClick(){
        window.location.reload();
    }
    return (
        <div className={"heading"}>
            <a onClick={handleLogoClick}>
            <div className={"logo"}>
                <img srcSet="Images/logo.jpg"></img>
            </div>
            </a>
            <div className={"buttons"}>
                <button className={"loginSignupButton"}>Login/Signup</button>
                <button className={"cartButton"}>Cart</button>
            </div>
        </div>
    );
}

export default Header;