import React from "react";
import "../../public/css/signuppage.css";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class SignupPage extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : "",
            email : "",
        };

    }
    
    componentDidMount(){
        document.body.style.backgroundImage = "url(/static/Images/skate.jpg)";
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
        fetch("http://localhost:3000/api/v1/auth/signup", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(this.state)
        }).then(res => {//needed to get resolved promise
            if(!res.ok) throw "signup failed";
            return res.json();
        }).then(data => { //then when promise is resolved
            console.log(data);
            toast.success("Successful signup" , {
                autoClose : 1500, position: toast.POSITION.TOP_CENTER 
            });
            if(typeof data!= "undefined"){
                this.props.history.push("/login");
            }
        }).catch(err => {
            console.log(err);
            toast.error("Unsuccessful signup" , {
                autoClose : 1500, position: toast.POSITION.TOP_CENTER 
            });
        });
    }

    render(){
        return(
            <div className="form-body" onSubmit={this.handleSubmit.bind(this)}>
            <form className="box">
            <h1>Signup</h1>
            <input type="text" name="username" placeholder="Username" onChange={this.handleChange.bind(this)} value={this.state.username}/>
            <input type="email" name="email" placeholder="Email"onChange={this.handleChange.bind(this)} value={this.state.email}/>
            <input type="password" name="password" placeholder="Password"onChange={this.handleChange.bind(this)} value={this.state.password}/>
            <input type="submit" name="" value="Signup"/>
            <div className="links">
                <Link to= {"/login"}>
                    <h2 className="signup-button">
                        Back to login
                    </h2>
                </Link>
            </div>
            <ToastContainer/>
            </form>
            </div>       
            );
    }
}

SignupPage.propTypes = {

    history : propTypes.object
        
};

export default SignupPage;