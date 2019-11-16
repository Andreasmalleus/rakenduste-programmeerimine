import React from "react";
import {Link} from "react-router-dom";
import "../../public/css/userpage.css";
import ProtectedRedirect from "../components/ProtectedRedirect.jsx";
import propTypes from "prop-types";
import {connect} from "react-redux";
import FancyButton from "../components/FancyButton.jsx";
import {userUpdate, tokenUpdate} from "../store/actions.js";

class UserPage extends React.PureComponent{

    handleLogout = () => {
        this.props.dispatch(userUpdate(null));
        this.props.dispatch(tokenUpdate(null));
        this.props.history.push("/home");
    }

    render(){
        console.log("hello");
        return(

                    <div className="userContent">
                    <Link to={"/home"}>
                        <div>Go back home</div>
                    </Link>
                    <div>{this.props.user.username}</div>
                    <div>{this.props.user.email}</div>
                    <FancyButton handleClick={this.handleLogout} text="Logout"/>  
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
        user : store.user
    };
};

export default connect(mapStateToProps)(ProtectedRedirect(UserPage));


