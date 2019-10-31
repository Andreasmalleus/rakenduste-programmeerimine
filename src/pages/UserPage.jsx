import React from "react";
import { AuthContext } from "../components/App.jsx";
import {Link} from "react-router-dom";
import "../../public/css/userpage.css";


class UserPage extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <AuthContext.Consumer>
                {value => (
                    <div className="userContent">
                    <Link to={"/home"}>
                        <div>Go back home</div>
                    </Link>
                    <div>{value.user.username}</div>
                    <div>{value.user.email}</div>
                    </div>
                )}
            </AuthContext.Consumer>
        );
    }
}

export default UserPage;