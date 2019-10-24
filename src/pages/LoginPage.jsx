import React from "react";
import "../../public/css/loginpage.css";
import { Link } from "react-router-dom";
import propTypes from "prop-types";


class LoginPage extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : ""
        };

    }

    

    handleChange = (event) => {
        //console.log(event.target.name, event.target.value);
        this.setState({
            [event.target.name] : event.target.value,
        });
    }

    //A promise is a mechanism for tracking a value that will be assigned some time in the future.
    //Promise is at the pending state at the beginning
    handleSubmit = (event) => {
        event.preventDefault();//dont refresh browser
        fetch("/api/v1/auth/login", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(this.state),
            
        }).then(result => {//needed to get resolved promise
            return result.json();
        }).then(data => { //then when promise is resolved
            console.log(data);
            this.props.onLogin({
                token : data.token,
                user : data.user
            });
            if(typeof data!= "undefined"){
                //acts as a router and redirects if successful
                this.props.history.push(`/users/${data.user._id}`);
            }
        }).catch(err => {
            console.log(err);
        });
        
    }

    render(){
        return(
            <div className="loginContainer">
                <div className="loginPageForm" onSubmit={this.handleSubmit.bind(this)}>
                <h1 className="loginHeading">Sign in</h1>
                <form>
                    <div className="usernameInput" data-validate = "Username is required">
                        <div className="loginInput-1-text">Username</div>
						<input className="loginInput-1" type="text" name="username" onChange={this.handleChange.bind(this)} value={this.state.username} placeholder="username"/>
					</div>
                    <br></br>
                    <div className="passwordInput" data-validate = "Password is required">
                        <div className="loginInput-2-text">Password</div>
						<input className="loginInput-2" type="password" name="password" onChange={this.handleChange.bind(this)} value={this.state.password} placeholder="password"/>
					</div>
                    <br></br>
                    <button className="submitLogin">
							Log in
					</button>
                <div className="links" > 
                    <Link to={"/signup"}>
                        <div className="SignupInstead">
                            <p>Sign up</p>
                        </div>
                    </Link>
                    <Link to= {"/home"}>
                        <div className="backtohome">
                            <p>Home</p>
                        </div>
                    </Link>
                </div> 
                </form>
                </div>
            </div>
            );
    }
}

LoginPage.propTypes = {

    onLogin : propTypes.func,
    history : propTypes.object
          
};

export default LoginPage;
