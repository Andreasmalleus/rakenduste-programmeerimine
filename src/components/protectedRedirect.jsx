import React from "react";
import propTypes from "prop-types";


const protectedRedirect = (WrappedComponent) => {
    return class extends React.PureComponent{
        static displayName= "protectedRedirect-hoc";
        static propTypes = {
            user : propTypes.string
        }
        render(){

                    return <WrappedComponent {...this.props}/>;
                }
        };
    };



export default protectedRedirect;