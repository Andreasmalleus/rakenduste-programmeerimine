const express = require('express')
const cors = require('cors');
const app = express()
const path = require("path");
const port = process.env.PORT || 3000;//heroku vajab process.env.porti
const itemRouter = require('./item.router.js');
const userRouter = require('./user.router.js');
const authRouter = require('./auth.router.js');
const models = require('../models/item.model.js');
const database = require("./database.js");
const bodyParser = require('body-parser');
const connection = require('./connection.js');


app.use(bodyParser.json());

app.use("/api/v1/auth",authRouter);
app.use("/api/v1/",userRouter);
app.use("/api/v1/",itemRouter);

app.use("/static", express.static("dist/static"));//for images and css

app.use("/*", express.static("dist"));//for index.html

//vastavad otspunktid
app.get('/', cors(),(req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
})

app.get('/login', cors(),(req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
})

app.get('/signup', cors(),(req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
})

app.get('/user', cors(),(req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
})

app.get('/home', cors(),(req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
})

app.get('/home/items/*',cors(), (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
})

app.get('/cart', cors(),(req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
})


app.use(express.static('dist'));

connection.connectDb().then(async () =>{
    app.listen(port, () => {
        console.log(`Our app is running on port ${ port }`);
        console.log(`http://localhost:${ port }`);
    });
})

const Item = models.Item;


//deletes all of the documents
const deleteAllItems = () => {
    Item.deleteMany({}, (err) => {
        console.log(err);
    })
}

//gets the count of all items
const migrate = () => {
    Item.countDocuments({}, (err, countNR) => {
        console.log(countNR);
        if(err)return console.log(err);
        if(countNR == 0){
            const items = database.getItems();
            items.forEach((item) => {
                const document = new Item(item, {_id : false})
                document.save((err, item) => {
                    if(err)return console.log(err);
                    console.log(item);
                })
            })
        }
    })
}
