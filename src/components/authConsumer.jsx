import React from "react";
import { AuthContext } from "./App.jsx";
//hoc basically is a function that takes a component and passes data to it or enhances the original in some way
//in this particular function we use context
//context is basically a global variable of some sort
const authConsumer = (WrappedComponent) => {
    return class extends React.PureComponent{
        static displayName = "authconsumer-hoc";
        render(){
            return( 
                <AuthContext.Consumer>
                    {
                        (value) => <WrappedComponent {...this.props} {...value}/>//this.props is for when props are sent to authConsumer itself
                    }
                </AuthContext.Consumer>
            );
        
        }
    };
    

};


export default authConsumer;
