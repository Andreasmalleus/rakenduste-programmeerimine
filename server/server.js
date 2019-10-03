const express = require('express')
const cors = require('cors');
const app = express()
const path = require("path");
const port = process.env.PORT || 3000;//heroku vajab process.env.porti
const DataBase = require('./newDatabase.js');


//esimene parameeter on path teine callback

/*app.use((req,res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
})*/

//npm install cors (package)
//app.use(cors());
//app.get("/api/items",cors(),(req,res);

app.get("/api/items",cors(), (req,res) => {
    res.json(DataBase.getItems());
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
})

app.get("/api/items/:itemId",cors(),(req,res) =>{
    res.send(DataBase.getItem(req.params.itemId));
})

app.get('/items/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "...dist", "index.html"));
})


app.use(express.static('dist'));



app.listen(port, () => {
    console.log(`Our app is running on port ${ port }`);
    console.log(`http://localhost:${ port }`);
});