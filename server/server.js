const express = require('express')
const cors = require('cors');
const app = express()
const path = require("path");
const port = process.env.PORT || 3000;//heroku vajab process.env.porti
const itemRouter = require('./item.js');
const models = require('../models/items.js');

app.use(itemRouter);

app.get('/', cors(),(req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
})

app.get('/home/', cors(),(req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
})

app.get('/home/items/*',cors(), (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
})


app.use(express.static('dist'));


models.connectDb().then(async () =>{
    app.listen(port, () => {
        console.log(`Our app is running on port ${ port }`);
        console.log(`http://localhost:${ port }`);
    });
})