import React from "react";
import {Link} from "react-router-dom";

class NotFound extends React.PureComponent{
    render(){
        return(
            <div className="pagenotfound"> 
            <div>Page not found</div>
            <Link to={"/home"}><div>Go back to home</div></Link>
            </div>
        );
    }
}

export default NotFound;