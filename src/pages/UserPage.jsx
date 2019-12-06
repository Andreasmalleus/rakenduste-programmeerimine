import React from "react";
import {Link} from "react-router-dom";
import "../../public/css/userpage.css";
import ProtectedRedirect from "../components/ProtectedRedirect.jsx";
import propTypes from "prop-types";
import {connect} from "react-redux";
import FancyButton from "../components/FancyButton.jsx";
import {userUpdate, tokenUpdate} from "../store/actions.js";
import * as selectors from "../store/selectors.js";


class UserPage extends React.PureComponent{

    handleLogout = () => {
        this.props.dispatch(userUpdate(null));
        this.props.dispatch(tokenUpdate(null));
        this.props.history.push("/");
    }

    render(){
        console.log("hello");
        return(

                    <div className="userContent">
                        <div className="user-container">
                    <div>
                        <img srcSet="/static/Images/user-img.png"/>
                    </div>
                    <div className="user-text">You are logged in as {this.props.user.username}</div>
                    <div className="user-text">{this.props.user.email}</div>
                    <FancyButton handleClick={this.handleLogout} text="Logout"/>
                    <Link to={"/"}>
                        <div>Go back home</div>
                    </Link>  
                        </div>
                    </div>
        );
    }
}




UserPage.propTypes = {
    user : propTypes.object,
    username : propTypes.string,
    email : propTypes.string,
    dispatch : propTypes.func,
    history : propTypes.func,
    push : propTypes.func

};

const mapStateToProps = (store) => {
    return{
        user : selectors.getUser(store)
    };
};

export default connect(mapStateToProps)(ProtectedRedirect(UserPage));


