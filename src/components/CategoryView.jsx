import React from "react";
import { shoeIcon, newIcon, shirtIcon } from "../icons";
import "../../public/css/categoryview.css";
import propTypes from "prop-types";
//import HomePage from "./HomePage.jsx";

class CategoryView extends React.PureComponent{


render(){


        //changing value depending on the button
        return(
            
            <div className={"catagory-view"}>
                <div className="items-length">
                    Tooteid on antud lehel: {this.props.itemsLen}
                </div>
                <img src={newIcon} className="categoryNew" onClick={()=> this.props.onChange("New This Week | END.")}></img>
                <img src={shoeIcon} className="categoryShoes" onClick={()=> this.props.onChange("Sneakers | END.")} ></img>
                <img src={shirtIcon} className="categoryShirts" onClick={()=> this.props.onChange("Sweats | END.")}></img>
             </div>
            
        );


}
}

CategoryView.propTypes = {
    onChange : propTypes.func,
    itemsLen : propTypes.number
};

export default CategoryView;