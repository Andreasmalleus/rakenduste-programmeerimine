import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import PropTypes from "prop-types";
//import {newClothesEnd, hoodiesEnd, shoesEND} from "./database.js";



class ItemPage extends React.PureComponent{
    render(){
        return (
        <>
            <Header/>
            <div id={"container"}>
                <img src={this.props.location.src} className="item_page_img"></img>
                <h1 className="item_title">{this.props.location.title}</h1>
                <h1 className="item_price">{this.props.location.price}</h1>
            </div>
            <Footer/>
        </>
        );
    }
}

ItemPage.propTypes = {

    location : PropTypes.string,
    src : PropTypes.string,
    title : PropTypes.string,
    price : PropTypes.string

};



export default ItemPage;
