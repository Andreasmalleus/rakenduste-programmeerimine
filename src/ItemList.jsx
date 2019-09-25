import React from "react";

const ItemList = (props) => {
    return (
        <div className={"content"} id={"item_content"}>
            {
                props.new_items.map((clothing) => {
                    return <Item 
                        src = {clothing.imgSrc}
                        cost = {clothing.price}
                        name = {clothing.title}

                    />
                })
            }
            
        </div>
    )

}

const Item = (props) => {
    return (
    <div className="item">
        <img srcSet={props.src} className="item_img"></img>
        <div className="item_name">{props.name}</div>
        <div className="item_price">{props.cost}</div>
    </div>
    )
}


export default ItemList;