import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ItemLists = (props) => {//komponent
    return (
        <div className={"content"} id={"item_content"}>
            {
                //map creates a new array
                props.items.map( clothing => {
                    return <Item 
                        //kui mapid või võtad listist midagi siis tuleb alati panna juurde key
                        key = {clothing._id}
                        id = {clothing._id}
                        src = {clothing.imgSrc}
                        price = {clothing.price}
                        title = {clothing.title}

                    />;
                })
            }
            
        </div>
    );

};


const Item = (props) => {
    return (
        <Link to={`/items/${props.id}`} >
            <div className="item">
                <img srcSet={props.src} className="item-img"></img>
                <div className="item-name">{props.title}</div>
                <div className="item-price">{props.price + " $"}</div>
            </div>
        </Link>
        );
};

//prototypes for validation
Item.propTypes = {
    src : PropTypes.string,
    title : PropTypes.string,
    price : PropTypes.number,
    items : PropTypes.array,
    _id : PropTypes.string,
    id : PropTypes.string
};

ItemLists.propTypes = {
    items : PropTypes.array
};


export default ItemLists;