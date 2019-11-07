import React from "react";
import Header from "../components/Header.jsx";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "../../public/css/cartpage.css";

class CartPage extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            items : []
        };
    }

    componentDidMount(){
        this.fetchItems();
    }

    handleClick = () => {
        console.log("to the payment page we go");
    }

    fetchItems = () => {
        fetch("http://localhost:3000/api/v1/items")
        .then(results => {
            console.log("results");
            return results.json();
        })
        .then(items => {
            console.log("items", items);
            this.setState({
                items
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    
    render(){
        return(
            <Header />, 
            <div className={"content"}>
            <button className="cart-button" onClick={this.handleClick.bind(this)}>Continue to payment</button>
            <h1 className="title">Cart page and sum is: {this.state.items.map((item) => item.price).reduce((a,b) => a+b, 0)}</h1>
                {this.state.items.map((item, index) => {
                    return(
                        <div className="item" key={index}>
                            <img srcSet={item.imgSrc} className="item-img"></img>
                            <div className="item-name">{item.title}</div>
                            <div className="item-price">{item.price + " $"}</div>
                            <div className="item-remove">
                                <IoIosCloseCircleOutline className="icon-img"/>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }


}



export default CartPage;