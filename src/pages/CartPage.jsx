import React from "react";
import Header from "../components/Header.jsx";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "../../public/css/cartpage.css";
import FancyButton from "../components/FancyButton.jsx";

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
            <>
            <Header />, 
            <div className={"content"}>
            <table className="product-table">
                <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Total sum: {this.state.items.map((item) => item.price).reduce((a,b) => a+b, 0)}</th>
                </tr>
                {this.state.items.slice(0,3).map((item, index) => {
                    return(
                            <tr key={index}>
                                <td><img srcSet={item.imgSrc} className="item-img"></img></td>
                                <td className="item-name">{item.title}</td>
                                <td className="item-category">{item.category}</td>
                                <td className="item-price">{item.price + "$"}</td>
                                <td><IoIosCloseCircleOutline className="icon-img"/></td>
                            </tr>
                    );
                })}
                </table>
                <FancyButton className="cart-button" onClick={this.handleClick} text={"Continue to payment"}></FancyButton> 
            </div>
            </>
        );
    }


}



export default CartPage;