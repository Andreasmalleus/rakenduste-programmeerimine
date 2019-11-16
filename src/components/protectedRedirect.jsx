import React from "react";
import propTypes from "prop-types";
import { Redirect } from "react-router";


const ProtectedRedirect = (WrappedComponent) => {
    return class extends React.PureComponent{
        static displayName= "protectedRedirect-hoc";
        static propTypes = {
            user : propTypes.string
        }
        render(){
                if(this.props.user == null){
                    return <Redirect to="/home/"/>;
                }

                    return <WrappedComponent {...this.props}/>;
                }
        };
    };


export default ProtectedRedirect;