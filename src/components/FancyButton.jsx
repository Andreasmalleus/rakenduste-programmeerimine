import React from "react";
import {IoIosArrowForward} from "react-icons/io";
import PropTypes from "prop-types";
import "../../public/css/fancybutton.css";

const FancyButton = (props) => {
    return(
        <div className="fancy-button" onClick={props.handleClick}>
        <div className="button-inner">
            {props.text}
            <IoIosArrowForward className="arrow-icon"/>
        </div>
        </div>
    );

};



FancyButton.propTypes = {

    //location : PropTypes.string,
    text : PropTypes.string,
    handleClick : PropTypes.func

};

export default FancyButton;