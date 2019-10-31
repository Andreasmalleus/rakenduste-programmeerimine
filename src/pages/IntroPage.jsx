import React from "react";
import { Link } from "react-router-dom";
import "../../public/css/intropage.css";

class IntroPage extends React.PureComponent{

    render(){
        return(
            <div className="section">
            
            <div className="sectionForm">
            <div className="sectionText">Hey there feel free to go crazy</div>
            <Link to={"/home"}>
                <div className="shopButton">
                <button >Go shoppin!</button>
                </div>
            </Link>
            </div>
            </div>
        );
        
    }
}

export default IntroPage;