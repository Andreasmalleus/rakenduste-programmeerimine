import React from "react";
import "../public/css/notfound.css";

class NotFound extends React.PureComponent{
    render(){
        return(
            <div className="pagenotfound"> 
            <img className="image-404" srcSet="/Images/404_Error.jpg"></img>
            </div>
        );
    }
}

export default NotFound;