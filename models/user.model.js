const mongoose = require('mongoose');

require('dotenv').config();


const userSchema = new mongoose.Schema({
    username: {type : String, required : true, unique : true},
    email : {type : String, required : true, unique : true},
    password: {type : String, required : true},
    createdAt: {type : Date, default : Date.now},
    cart : {type: [String], default: []}
});
const User = mongoose.model('User' , userSchema);



module.exports = {
    User
}