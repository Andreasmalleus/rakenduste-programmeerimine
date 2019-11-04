import React from "react";
import {Redirect} from "react-router-dom";
import propTypes from "prop-types";


const protectedRedirect = (WrappedComponent) => {
    return class extends React.PureComponent{
        static displayName= "protectedRedirect-hoc";
        static propTypes = {
            user : propTypes.string
        }
        render(){
                if(this.props.user.username == null){
                    return <Redirect to="/home"/>;
                }
                return <WrappedComponent {...this.props}/>;
                }
        };
    };



export default protectedRedirect;