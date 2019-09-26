import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import {new_clothes, hoodies, shoes} from "./database.js";

const DisplayedItem = () => {

        return(
            <div id={"container"}>
                <img src="" className="item_page_img"></img>
                <h1 className="item_title"></h1>
                <h1 className="item_price"></h1>
            </div>
        )
        
}

class ItemPage extends React.PureComponent{
    render(){
        return (
        <>
            <Header/>
                <DisplayedItem />
            <Footer/>
        </>
        )
    }
}

export default ItemPage;
