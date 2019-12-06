import React from "react";
import {StripeProvider} from "react-stripe-elements";
import {CardElement} from "react-stripe-elements";
import {Elements} from "react-stripe-elements";
import {injectStripe} from "react-stripe-elements";
import PropTypes from "prop-types";
import * as services from "../../services.js";
import * as selectors from "../store/selectors.js";
import {connect} from "react-redux";



class Stripe extends React.PureComponent{

    render(){
        return(
            <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
                <Elements>
                    <InjectedForm/>
                </Elements>
            </StripeProvider>
        );
    }
}

class checkoutForm extends React.PureComponent{

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.stripe.createToken().then((result)=>{
            console.log(result);
            console.log(this.props.userId);
            services.checkout({token : result, userId : this.props.userId})
            .then(result => {
                console.log("checkout",result);
            })
            .catch(err => {
                console.log(err);
            });
        });

    }
    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <CardElement style={{base: {fontSize: "18px"}}} />
                <button>Pay 100 eur</button>
            </form>
        );
    }
}

Stripe.propTypes= {
    stripe : PropTypes.func,
    handleCardPayment : PropTypes.func,

};

checkoutForm.propTypes= {
    stripe : PropTypes.func,
    createToken : PropTypes.func,
    userId : PropTypes.string

};

const mapStateToProps = (store) => {
    return{
        userId: selectors.getUserId(store)
    };
};

const InjectedForm = connect(mapStateToProps)(injectStripe(checkoutForm));

export default Stripe;