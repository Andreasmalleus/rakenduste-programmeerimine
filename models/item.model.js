const mongoose = require('mongoose');
if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
  }


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
    return mongoose.connect( 'mongodb+srv://'+ process.env.DB_USER+':'+ process.env.DB_PASS +'@cluster0-fv8du.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = {
    Item, connectDb 
}