import React from "react";
import Header from ".././components/Header.jsx";
import PropTypes from "prop-types";
import "../../public/css/itempage.css";
import FancyButton from "../components/FancyButton.jsx";
require("typeface-roboto");
//import {newClothesEnd, hoodiesEnd, shoesEND} from "./database.js";
import {connect} from "react-redux";
import { addItem } from "../store/store.js";
import {ToastContainer,toast} from "react-toastify";




class ItemPage extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    notify = () => toast("Item added to cart", {autoClose : 100});
    
    componentDidMount(){
        this.fetchItem();
    }

    fetchItem = () => {
        fetch(`http://localhost:3000/api/v1/items/${this.props.match.params.itemId}`)
        
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

    handleBuy = () => {
        this.notify();
        this.props.dispatch(addItem(this.state));
    }

    render(){
        //console.log("match", this.props.match);
        //console.log(this.state);
        return (
        <>
            <Header/>
            <div id={"container"}>
            <ToastContainer/>
                <img src={this.state.imgSrc} className="itemPage-img"></img>
                <h1 className="itemPage-name">{this.state.title}</h1>
                <h1 className="itemPage-price">{this.state.price + " $"}</h1>
                <FancyButton handleClick={this.handleBuy} text="Add to cart"/>        
            </div>
        </>
        );
    }
}

ItemPage.propTypes = {

    //location : PropTypes.string,
    match : PropTypes.object.isRequired,
    src : PropTypes.string,
    title : PropTypes.string,
    price : PropTypes.number,
    dispatch : PropTypes.func,

};
//connects the component to the store
export default connect()(ItemPage);
