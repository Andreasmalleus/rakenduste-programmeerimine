import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ItemList from "./ItemList.jsx";
//import {newClothesReede, hoodiesReede, shoesReede} from "./database.js";
//import {newClothesEnd, hoodiesEnd, shoesEND} from "./database.js";



class HomePage extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            items : [],
            selectedCategory : "New This Week | END."
        };
    }

    componentDidMount(){
            this.fetchItems();
        }

    fetchItems  = () => {
        fetch("http://localhost:3000/api/items")
        .then(results => {
            console.log("results");
            return results.json();
        })
        .then(items => {
            console.log("items", items);
            this.setState({
                items
            });
        })
        .catch(err => {
            console.log("err", err);
        });

    }

    setVisibleItems =() => {
        return this.state.items.filter(item => item.category === this.state.selectedCategory);
    }

    handleDropDown(event){
        console.log(event.target.value);
        this.setState({
            selectedCategory : event.target.value
        });

    }

    render(){
    return (
        <>
        <Header />
        <div className={"catagory-view"}>
        <label className={"categoryText"} htmlFor="category-select">Choose category</label>
            <select onChange={this.handleDropDown.bind(this)} className="category-select">
                <option value={""}>Please choose an option</option>
                <option value={"New This Week | END."}>New clothes</option>
                <option value={"Sneakers | END."}>Shoes</option>
                <option value={"Sweats | END."}>Hoodies</option>
            </select>
        </div>
        <ItemList items={this.setVisibleItems()}/>
        <Footer />
        </>
    );
    }
}

export default HomePage;