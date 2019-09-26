import React from "react";
import ReactDom from "react-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ItemList from "./ItemList.jsx";
import ItemPage from "./ItemPage.jsx";
import {new_clothes, hoodies, shoes} from "./database.js";



class HomePage extends React.PureComponent {
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

export default HomePage;