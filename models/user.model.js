const mongoose = require('mongoose');
const Item = require("./item.model.js");

require('dotenv').config();
//module that loads environment variables from env file


const userSchema = new mongoose.Schema({
    username: {type : String, required : true, unique : true},
    email : {type : String, required : true, unique : true},
    password: {type : String, required : true},
    createdAt: {type : Date, default : Date.now},
    cart : {type: [String], default: []}
});
const User = mongoose.model('User' , userSchema);

//instance method 
userSchema.methods.getCartAmount = async function(){
    console.log(this.cart, "thiscarttttt");
    const items = await Item.getItems(this.cart);
    console.log(items);
    const amount = items.reduce((acc, item) => acc + item);
    return amount
}

module.exports = {
    User
}