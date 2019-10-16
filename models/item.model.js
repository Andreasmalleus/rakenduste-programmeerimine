const mongoose = require('mongoose');
require('dotenv').config();


const itemSchema = new mongoose.Schema({
    id: {type : String, required : true},
    imgSrc: {type : String, required : true},
    title: {type : String, required : true},
    price: {type : Number, required : true},
    category: {type : String, required : true},
    createdAt: {type : Date, default : Date.now}
});
const Item = mongoose.model('Item' , itemSchema);

const connectDb = () => {
    return mongoose.connect( `${process.env.DB_CONNECTION}`, {useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = {
    Item, connectDb 
}