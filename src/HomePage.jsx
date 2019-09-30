import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ItemList from "./ItemList.jsx";
//import {newClothesReede, hoodiesReede, shoesReede} from "./database.js";
import {newClothesEnd, hoodiesEnd, shoesEND} from "./database.js";



class HomePage extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            items : newClothesEnd
        };
    }
    handleChange(event){
        switch(event.target.value){
            case "New Clothes":{
                this.setState({
                    items: newClothesEnd
                });
                break;
            }
            case "Shoes":{
                    this.setState({
                        items: shoesEND
                    });
                    break;
                }
            case "Hoodies":{
                    this.setState({
                        items: hoodiesEnd
                    });
                    console.log(event.target.value);
                    break;
                }
        }
        console.log(event.target.value);
    }
    render(){
    return (
        <>
        <Header />
        <div className={"catagory-view"}>
        <label className={"categoryText"} htmlFor="category-select">Choose category</label>
            <select onChange={this.handleChange.bind(this)} className="category-select">
                <option value={""}>Please choose an option</option>
                <option value={"New Clothes"}>New clothes</option>
                <option value={"Shoes"}>Shoes</option>
                <option value={"Hoodies"}>Hoodies</option>
            </select>
        </div>
        <ItemList new_items={this.state.items}/>
        <Footer />
        </>
    );
    }
}

export default HomePage;