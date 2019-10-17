import React from "react";
import { Link } from "react-router-dom";
import "../../public/css/intropage.css";

class IntroPage extends React.PureComponent{

    render(){
        return(
            <div className="section">
            <div className="button">
            <Link to={"/Home/"}>
                <div className="randombutt">
                <button >helloo</button>
                </div>
            </Link>
            </div>
            </div>
        );
        
    }
}

export default IntroPage;