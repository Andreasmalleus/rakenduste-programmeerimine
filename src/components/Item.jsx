import React from "react";

const Item = (props) => {
    return (
            <div className="item">
                <img srcSet={props.src} className="item-img"></img>
                <div className="item-name">{props.title}</div>
                <div className="item-price">{props.price + " $"}</div>
            </div>
        );
};

export default Item;