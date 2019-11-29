import React from "react";
import Header from "../components/Header.jsx";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "../../public/css/cartpage.css";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { removeItem } from "../store/actions.js";
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as selectors from "../store/selectors.js";
import * as services from "../../services.js";
import Modal from "../components/Modal.jsx";
import Stripe from "../components/Stripe.jsx";

class CartPage extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            cartItems : [],
            show : false
        };
    }

    componentDidMount() {
        this.fetchItems();
    }

    componentDidUpdate(prevProps) {
        const currentCart = this.props.cartItemIds.join("");
        const previousCart = prevProps.cartItemIds.join("");
        if(currentCart !== previousCart){
            this.fetchItems();
        }
      }

    handleRemove = (_id) => {
        toast.success("Item removed from cart", {autoClose : 1500, position: toast.POSITION.TOP_CENTER});
        this.props.dispatch(removeItem(_id));
    }

    handleModal = ()=> {
        this.setState({
                show : !this.state.show
            });
    }

    

    handleRedirect = () => {
        console.log("to the payment page we go");
    }

    fetchItems = ()=>{
        const promises = this.props.cartItemIds.map(
            itemId =>
            services.getItem({itemId}
            ));
            Promise.all(promises).then( items => {
              this.setState({
                cartItems: items,
              });
              
            }).catch(err => {
              console.log(err);
              toast.error("Failed fetching items");
            });
    }

    
    render(){
        if(this.state.cartItems.length != 0){
            return(
                <>
                <Header />
                <div className={"cart-content"}>
                <ToastContainer/>
                <Modal show={this.state.show} close={this.handleModal}>This is the message
                <Stripe/>
                </Modal>
                    <table className="product-table">
                        <tbody>
                            <tr>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                            </tr>
                            {this.state.cartItems.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td><img srcSet={item.imgSrc} className="cart-item-img"></img></td>
                                    <td className="cart-item-name">{item.title}</td>
                                    <td className="cart-item-category">{item.category}</td>
                                    <td className="cart-item-price">{item.price + "$"}</td>
                                    <td><IoIosCloseCircleOutline className="cart-icon-img" onClick={()=> this.handleRemove(item._id)}/></td>
                                </tr>
                            );
                            })}
                        </tbody>
                    </table>
                    <div className="info-box">
                    <div className="cart-total-sum">Total sum: {this.state.cartItems.map((item) => item.price).reduce((a,b) => a+b, 0)} $</div>
                    <div className="checkout-button-container"> 
                        <button className="checkout-button" onClick={() => this.handleModal()}>Checkout</button>
                    </div>
                </div>
                </div>
                </>
            );
        }else{
            return(
                <>
                 <Header />
                 <div className="empty-cart">
                    <img className="empty-cart-img" srcSet="/static/Images/empty-cart.png"></img>
                 </div>
                </>
            );
        }

    }


}

const mapStateToProps = (store) => {
    return{
        cartItemIds: selectors.getCart(store)
    };
};

CartPage.propTypes= {
    cart : PropTypes.arr,
    cartItemIds : PropTypes.arr,
    cartItems : PropTypes.arr,
    map : PropTypes.func,
    dispatch : PropTypes.func
};

export default connect(mapStateToProps)(CartPage);