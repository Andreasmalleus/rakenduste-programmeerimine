import React from "react";
import {Link} from "react-router-dom";
import "../../public/css/userpage.css";
import authConsumer from "../components/authConsumer.jsx";
import protectedRedirect from "../components/protectedRedirect.jsx";
import propTypes from "prop-types";
import Header from "../components/Header.jsx"; 


class UserPage extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                    <Header />
                    <div className="userContent">
                    <Link to={"/home"}>
                        <div>Go back home</div>
                    </Link>
                    <div>{this.props.user.username}</div>
                    <div>{this.props.user.email}</div>
                    </div>
            </>
        );
    }
}

export default authConsumer(protectedRedirect(UserPage));

UserPage.propTypes = {
    user : propTypes.object,
    username : propTypes.string,
    email : propTypes.string,

};

