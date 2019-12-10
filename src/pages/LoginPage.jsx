import React from "react";
import "../../public/css/loginpage.css";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import { userUpdate } from "../store/actions.js";
import { tokenUpdate } from "../store/actions.js";
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as services from "../../services.js";



class LoginPage extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : ""
        };

    }

    componentWillMount(){
        document.body.style.backgroundImage = "url(/static/Images/skate.jpg)";
    }
    
    componentWillUnmount(){
        document.body.style.backgroundImage = null;
    }


    //A promise is a mechanism for tracking a value that will be assigned some time in the future.
    //Promise is at the pending state at the beginning

    handleSubmit = (event) => {
        toast.error("Unsuccessful login" , {
            autoClose : 1500, position: toast.POSITION.TOP_CENTER 
        });
        event.preventDefault();
        services.login(this.state)
        .then(this.handleSuccess)
        .catch(err =>{
          console.log(err);
        });
      };

    handleChange = (event) => {
        //console.log(event.target.name, event.target.value);
        this.setState({
            [event.target.name] : event.target.value,
        });
    }

    handleSuccess = ({token,user}) => {
        toast.success("Successful login" , {
            autoClose : 3000, position: toast.POSITION.TOP_CENTER 
        });
        this.props.dispatch(userUpdate(user));
        this.props.dispatch(tokenUpdate(token));
        this.props.history.push(`/users/${user._id}`);
    }

    render(){
        return(
            <div className="login-body">
            <div className="form-body" onSubmit={this.handleSubmit.bind(this)}>
            <form className="box">
            <h1>Login</h1>
            <input type="text" name="username" placeholder="Username" onChange={this.handleChange.bind(this)} value={this.state.username}/>
            <input type="password" name="password" placeholder="Password"onChange={this.handleChange.bind(this)} value={this.state.password}/>
            <input type="submit" name="" value="Login"/>
            <div className="links">
                <Link to= {"/signup"}>
                    <h2 className="home-button">
                        Signup
                    </h2>
                </Link>
                <Link to= {"/"}>
                    <h2 className="signup-button">
                        Home
                    </h2>
                </Link>
            </div>
            <ToastContainer/>
            </form>
            </div>
            </div>
            );
    }
}

LoginPage.propTypes = {

    onLogin : propTypes.func,
    history : propTypes.object,
    dispatch : propTypes.func
          
};

export default connect()(LoginPage);
