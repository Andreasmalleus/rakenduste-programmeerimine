import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ItemLists from "./ItemLists.jsx";
import CategoryView from "./CategoryView.jsx";
import SortDropdown from "./SortDropdown.jsx";
//import {newClothesReede, hoodiesReede, shoesReede} from "./database.js";
//import {newClothesEnd, hoodiesEnd, shoesEND} from "./database.js";



class HomePage extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            items : [],
            selectedCategory : "New This Week | END.",
            sortDirection : -1
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

    //handle need to be in parent
    handleCategory = (value) =>{
        //console.log(value);
        this.setState({
            selectedCategory : value
        });       
    };

    handleSortDropdown = (value) => {
        //console.log(value);
        this.setState({
            sortDirection : value
        });
    }

    setVisibleItems =() => {
        return this.state.items
        .filter(item => item.category === this.state.selectedCategory)
        .sort((a,b) => {
            switch(this.state.sortDirection){
                case -1: return b.price - a.price;
                case 1: return a.price - b.price;
            }
        });
    }

    showItemCount = () => {
        return this.state.items.filter(item => item.category == this.state.selectedCategory).length;
    }


    render(){
    return (
        <>
        <Header />
        <SortDropdown onChange={this.handleSortDropdown}/>
        <CategoryView onChange={this.handleCategory} itemsLen={this.showItemCount()}/>
        <ItemLists items={this.setVisibleItems()}/>
        <Footer />
        </>
    );
    //sending event hande as prop
    }
}

export default HomePage;