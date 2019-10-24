import React from "react";
import HomePage from "../pages/HomePage.jsx";
import { BrowserRouter as Router, Route} from "react-router-dom";
import ItemPage from "../pages/ItemPage.jsx";
import IntroPage from "../pages/IntroPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import SignupPage from "../pages/SignupPage.jsx";
import UserPage from "../pages/UserPage.jsx";
import Header from "../components/Header.jsx";

class App extends React.PureComponent{
    constructor(props){
        super(props);
        this.state= {
            token : null,
            user : {
                username : null,
                email : null,
                _id : null,
                createdAt : null
            }
        };
    }

    handleLogin = (response) => {
        this.setState({
            token : response.token,
            user : response.user
        });
        console.log(this.state);
    }

    render(){
        return(
        <Router>
            <Route path="/" exact component={IntroPage}/>
            <Route path="/login" exact render={(props) => <LoginPage 
                {...props}
                onLogin = {this.handleLogin}
            />
            }/>
            <Route path="/signup" exact component = {SignupPage} />
            <Route path="/users" exact component = {UserPage} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/home/items/:itemId" exact component={ItemPage} />   
            <Route path="/" render={(props) => <Header {
                ...props}
                token = {this.state.token}
                user = {this.state.user}
                />
                }
            />
        </Router>
        );
    }
}

export default App;