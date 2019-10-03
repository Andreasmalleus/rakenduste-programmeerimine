import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ItemList = (props) => {//komponent
    return (
        <div className={"content"} id={"item_content"}>
            {
                //map creates a new array
                props.items.map((clothing) => {
                    return <Item 
                        //kui mapid või võtad listist midagi siis tuleb alati panna juurde key
                        key = {clothing.id}
                        id = {clothing.id}
                        src = {clothing.imgSrc}
                        price = {clothing.price}
                        title = {clothing.title}

                    />;
                })
            }
            
        </div>
    );

};



/*const Item = (props) => {//kutsutakse seda komponendiks

    //pass information via link with an object
    const itemInformation = {
        pathname : "/item",
        src : props.src,
        title : props.title,
        price : props.price

    };

    return (
    <Link to={itemInformation} >
        <div className="item">
            <img srcSet={props.src} className="item_img"></img>
            <div className="item_name">{props.title}</div>
            <div className="item_price">{props.price}</div>
        </div>
    </Link>
    );``
};*/

const Item = (props) => {
    return (
        <Link to={`/items/${props.id}`} >
            <div className="item">
                <img srcSet={props.src} className="item_img"></img>
                <div className="item_name">{props.title}</div>
                <div className="item_price">{props.price}</div>
            </div>
        </Link>
        );
};

//prototypes for validation
Item.propTypes = {
    src : PropTypes.string,
    title : PropTypes.string,
    price : PropTypes.string,
    items : PropTypes.array,
    id : PropTypes.string
};

ItemList.propTypes = {
    items : PropTypes.array
};


export default ItemList;