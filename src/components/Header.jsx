import React from "react";
import { Link } from "react-router-dom";
import { cartIcon, loginIcon, userIcon } from "../icons.js";
import "../../public/css/header.css";//possible because of css and style loader
import AuthConsumer from "./AuthConsumer.jsx";
import ProtectedRedirect from "./ProtectedRedirect.jsx";




const Header = (props) => {

    return (
                        <div className={"heading"}>
                        <Link to= {"/home"}>
                            <div className={"logo"}>
                                <img srcSet="/static/Images/bethehype1.png" className="logo-img"></img>
                            </div>
                        </Link>
                        {check(props)}
                        </div>
    );
};
const check = (param) => {
    if(param.user.username == null){
        return (
            <div className={"headerButtons"}>
                <div className={"headerButton"}>
                    <Link to={"/login"} >
                    <img src={loginIcon} className="headerButtonIcon"></img>
                    </Link> 
                    <div className="headerButtonText">Login/Register</div>
                </div>
                <div className={"headerButton"}>
                <Link to={"cart"}>
                    <img src={cartIcon} className="headerButtonIcon"></img>
                </Link>
                    <div className="headerButtonText">Cart</div>
                </div>
            
            </div>
           
        );
    }else{
        return(
            <div className={"headerButtons"}>
                <div>Hello, {param.user.username}</div>
                    <div className={"headerButton"}>
                    <Link to={"/user"}>
                        <img src={userIcon} className="userButtonIcon"></img>
                    </Link>
                        <div className="headerButtonText">User</div>
                    </div>
               
                
                <div className={"headerButton"}>
                    <Link to={"/cart"}>
                    <img src={cartIcon} className="headerButtonIcon"></img>
                    </Link>
                    <div className="headerButtonText">Cart</div>
                </div>
              

            </div>
        );
    }
};

export default AuthConsumer(ProtectedRedirect(Header));
