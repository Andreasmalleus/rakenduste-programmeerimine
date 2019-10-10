import React from "react";
import "../public/css/sortdropdown.css";
import PropTypes from "prop-types";

const SortDropdown = (props) => {
    return (
                <ul>
                    <li className="drop">
                        <a>Sort by..</a>
                        
                        <div className="dropdownContain">
                            <div className="dropOut">
                                <div className="triangle"></div>
                                <ul>
                                    <li onClick={()=> props.onChange(-1)}>Price high to low</li>
                                    <li onClick={()=> props.onChange(1)}>Price low to high</li>
                                </ul>
                            </div>
                        </div>
                    
                    </li>
                </ul>
    );
};

SortDropdown.propTypes = {
    onChange : PropTypes.func
        
    
};

export default SortDropdown;
