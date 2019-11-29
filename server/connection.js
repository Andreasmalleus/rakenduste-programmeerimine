const mongoose = require('mongoose');
if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
  }

const connectDb = () => {
    return mongoose.connect( 'mongodb+srv://'+ process.env.DB_USER+':'+ process.env.DB_PASS +'@cluster0-fv8du.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports= {
    connectDb
}