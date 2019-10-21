import React from "react";
import Footer from ".././components/Footer.jsx";
import Header from ".././components/Header.jsx";
import PropTypes from "prop-types";
import "../../public/css/itempage.css";
//import {newClothesEnd, hoodiesEnd, shoesEND} from "./database.js";



class ItemPage extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    componentDidMount(){
        this.fetchItem();
    }

    fetchItem = () => {
        fetch(`http://localhost:3000/api/items/${this.props.match.params.itemId}`)
        
        .then(results => {
            return results.json();
            
        })
        .then(item => {
            this.setState({
                ...item
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    render(){
        //console.log("match", this.props.match);
        //console.log(this.state);
        return (
        <>
            <Header/>
            <div id={"container"}>
                <img src={this.state.imgSrc} className="itemPage-img"></img>
                <h1 className="itemPage-name">{this.state.title}</h1>
                <h1 className="itemPage-price">{this.state.price + " $"}</h1>
            </div>
            <Footer/>
        </>
        );
    }
}

ItemPage.propTypes = {

    //location : PropTypes.string,
    match : PropTypes.object.isRequired,
    src : PropTypes.string,
    title : PropTypes.string,
    price : PropTypes.number

};



export default ItemPage;
