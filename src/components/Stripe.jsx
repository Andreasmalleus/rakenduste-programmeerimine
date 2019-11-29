import React from "react";
import {StripeProvider} from "react-stripe-elements";
import {CardElement} from "react-stripe-elements";
import {Elements} from "react-stripe-elements";
import {injectStripe} from "react-stripe-elements";
import PropTypes from "prop-types";



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
        this.props.stripe.createToken().then(function(result){
            console.log(result);
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
    stripe : PropTypes.obj,
    createToken : PropTypes.func,

};

const InjectedForm = injectStripe(checkoutForm);


export default Stripe;