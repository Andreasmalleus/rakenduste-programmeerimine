//const homepage = require("./homepage.js");
//const itempage = require("./itempage.js");
import homepage from "./homepage.js";
import itempage from "./itempage.js";
import React from "react";
import ReactDom from "react-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ItemList from "./ItemList.jsx";

const new_clothes = [{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/n/i/nike-air-force-1-prm-multi-1.jpg","title":"Nike Air Force PRM 1 - sail / imperial blue","price":"135,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-genoa-tee-blk.jpg","title":"Makia Genoa Tee - black","price":"35,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-algot-ls.jpg","title":"Makia Algot Longsleeve - navy / white","price":"55,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-symbol-sweat-blk.jpg","title":"Makia Symbol Sweatshirt - black","price":"75,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-roll-neck-knit-blk.jpg","title":"Makia Roll Neck Knit - black","price":"110,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-boreal-parka-olive-1.jpg","title":"Makia Boreal Parka - olive","price":"230,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-lined-avenue-boot-1.jpg","title":"Makia Lined Avenue Boot - black","price":"160,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-w-island-tee-red-1.jpg","title":"Makia Women's Island Tee - red","price":"35,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-covet-sweat-lilac.jpg","title":"Makia Women's Covet Sweatshirt - light lilac","price":"75,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-halla-parka-2-navy-1.jpg","title":"Makia Women's Halla Parka 2.0 - dark blue","price":"210,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-deal-beanie-charcoal.jpg","title":"Makia Deal Beanie - dark grey","price":"45,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-thin-merino-hat-red_1.jpg","title":"Makia Merino Thin Cap - red","price":"35,00 €","category":"Uus kaup"}]
const shoes = [{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/n/i/nike-city-react-blk-1.jpg","title":"Nike React City - black","price":"160,00 €","category":"Jalatsid - Mehed"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-district-boot-blk-1.jpg","title":"Makia District Boot - black","price":"160,00 €","category":"Jalatsid - Mehed"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/d/r/drmartens-1460-wp-blk-1.jpg","title":"Dr. Martens 1460 WP - black","price":"220,00 €","category":"Jalatsid - Mehed"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/j/o/jordan-4-retro-se-fiba-1-1.jpg","title":"Air Jordan 4 Retro SE \"FIBA\" - gym red","price":"190,00 €","category":"Jalatsid - Mehed"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/n/i/nike-zoom-2k-blk-1.jpg","title":"Nike Zoom 2K - black","price":"95,00 €","category":"Jalatsid - Mehed"}]
const hoodies = [{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-waves-sweat-navy.jpg","title":"Makia Waves Light Sweatshirt - dark blue","price":"60,00 €","category":"Pusad - Mehed"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-symbol-hood-blk.jpg","title":"Makia Symbol Hoodie - black","price":"85,00 €","category":"Pusad - Mehed"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/p/o/polar-velour-zip-neck-blk-1.jpg","title":"Polar Velour Zip Neck - black","price":"110,00 €","category":"Pusad - Mehed"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/s/t/stussy-basic-hood-black-2_2.jpg","title":"Stussy Basic Stüssy Hood - black","price":"105,00 €","category":"Pusad - Mehed"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/h/a/han-casual-hoodie-grey-1.jpg","title":"Han Kjobenhavn Casual Hoodie - grey melange logo","price":"120,00 €","category":"Pusad - Mehed"}]



const root = document.getElementById("app");

class App extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            items : new_clothes
        }
    }
    handleChange(event){
        switch(event.target.value){
            case "Uus kaup":{
                this.setState({
                    items: new_clothes
                });
                break;
            }
            case "Jalatsid":{
                    this.setState({
                        items: shoes
                    });
                    break;
                }
            case "Pusad":{
                    this.setState({
                        items: hoodies
                    });
                    console.log(event.target.value);
                    break;
                }
        }
        console.log(event.target.value);
    };
    render(){
    return (
        <>
        <Header />
        <div className={"catagory-view"}>
        <label for="category-select">Choose category</label>
            <select onChange={this.handleChange.bind(this)} class="category-select">
                <option value={""}>Please choose an option</option>
                <option value={"Uus kaup"}>New clothes</option>
                <option value={"Jalatsid"}>Shoes</option>
                <option value={"Pusad"}>Hoodies</option>
            </select>
        </div>
        <ItemList new_items={this.state.items}/>
        <Footer />
        </>
    )
    }
}

ReactDom.render(
    <App />,
    root
)


console.log("I am index file");


window.addEventListener("load", () => {
    homepage.setup();
    itempage.setup();

})
