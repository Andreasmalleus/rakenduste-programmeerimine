import React from "react";
import "../../public/css/signuppage.css";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

class SignupPage extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : "",
            email : "",
        };

    }

    

    handleChange = (event) => {
        //console.log(event.target.name, event.target.value);
        this.setState({
            [event.target.name] : event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();//dont refresh browser
        //console.log(this.state);
        //console.log(event);
        fetch("/api/v1/auth/signup", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(this.state)
        }).then(result => {//needed to get resolved promise
            return result.json();
        }).then(data => { //then when promise is resolved
            console.log(data);
            if(typeof data!= "undefined"){
                this.props.history.push("/login");
            }
        }).catch(err => {
            console.log(err);
        });
    }

    render(){
        return(
            <div className="signupContainer">
                <div className="signupPageForm" onSubmit={this.handleSubmit.bind(this)}>
                <h1 className="signupHeader">Sign up</h1>
                <form>
                    <div className="usernameInput" data-validate="Username is required">
                        <div className="signupInput-1-text">Username</div>
                        <input className="signupInput-1" type="text" name="username" onChange={this.handleChange.bind(this)} value={this.state.username} placeholder="Username"/>
                        
					</div>
                    <br></br>
                    <div className="emailInput" data-validate="Email is required">
					<div className="signupInput-2-text">Email</div>
                    <input className="signupInput-2" type="email" name="email" onChange={this.handleChange.bind(this)} value={this.state.email} placeholder="Email"/>
					</div>
                    <br></br>
                    <div className="passwordInput" data-validate="Password is required">
                        <div className="signupInput-4-text">Password</div>
						<input className="signupInput-4" type="password" name="password" onChange={this.handleChange.bind(this)} value={this.state.password} placeholder="Password"/>
					</div>
                    <br></br>
                    <button className="submitSignup">
							Sign Up
					</button>
                <div className="links">    
                    <Link to={"/login"}>
                        <div className="loginInstead">
                            <p>Back to loginpage</p>
                        </div>
                    </Link>
                </div>
                </form>
                </div>  
            </div>          
            );
    }
}

SignupPage.propTypes = {

    history : propTypes.object
        
};

export default SignupPage;