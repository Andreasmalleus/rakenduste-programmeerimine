import React from "react";
import HomePage from "../pages/HomePage.jsx";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ItemPage from "../pages/ItemPage.jsx";
import IntroPage from "../pages/IntroPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import SignupPage from "../pages/SignupPage.jsx";
import UserPage from "../pages/UserPage.jsx";
import NotFound from "../NotFound.jsx";

export const AuthContext = React.createContext(null); 

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
    //switch returns first match
    render(){
        return(
        <AuthContext.Provider value={this.state}>
        <Router>
            <Switch>
            <Route path="/" exact component={IntroPage}/>
            <Route path="/login" exact render={(props) => <LoginPage 
                {...props}
                onLogin = {this.handleLogin}
            />
            }/>
            <Route path="/signup" exact component = {SignupPage} />
            <Route path="/user" exact component = {UserPage} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/home/items/:itemId" exact component={ItemPage} />
            <Route component={NotFound}/>
            </Switch>
        </Router>
        </AuthContext.Provider>
        );
    }
}

export default App;