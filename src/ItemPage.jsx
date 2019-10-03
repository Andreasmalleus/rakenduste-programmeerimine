import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import PropTypes from "prop-types";
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
        //console.log("itemId", this.props.match.params.itemId);
        //console.log("match", this.props.match);
        //console.log(this.state);
        return (
        <>
            <Header/>
            <div id={"container"}>
                <img src={this.state.imgSrc} className="item_page_img"></img>
                <h1 className="item_page_name">{this.state.title}</h1>
                <h1 className="item_page_price">{this.state.price}</h1>
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
    price : PropTypes.string

};



export default ItemPage;