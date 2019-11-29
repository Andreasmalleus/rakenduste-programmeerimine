import React from "react";
import Header from ".././components/Header.jsx";
import PropTypes from "prop-types";
import "../../public/css/itempage.css";
import FancyButton from "../components/FancyButton.jsx";
require("typeface-roboto");
//import {newClothesEnd, hoodiesEnd, shoesEND} from "./database.js";
import {connect} from "react-redux";
import { addItem } from "../store/actions.js";
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as services from "../../services.js";
import * as selectors from "../store/selectors.js";




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
        return services.getItem({itemId: this.props.match.params.itemId})
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
        console.log(this.state);
        this.props.dispatch(addItem(this.state));
        toast.success("Item added to cart", {autoClose : 1500, position: toast.POSITION.TOP_CENTER});
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
                <FancyButton handleClick={this.handleBuy} text="Add to cart"/>      
                <ToastContainer/>  
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
    user : PropTypes.object,
    token : PropTypes.string

};

const mapStateToProps = (store) => {
    return{
        user : selectors.getUser(store),
        token : selectors.getToken(store)
    };
};

//connects the component to the store
export default connect(mapStateToProps)(ItemPage);
