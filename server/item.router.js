const express = require('express');
const itemRouter = express();
const db = require('./database.js');
const mongoose = require('mongoose');
const cors = require('cors');
const models = require('../models/item.model.js');



const Item = models.Item;

//Create an item
itemRouter.post("/api/items", cors(), (req, res) => {
    const props = {
        id: "clothing-1",
        imgSrc: "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg",
        title: "Kenzo",
        price: 12,
        category: "new clothing",
    }
    const item = new Item(props);
    item.save((err, item) => {
        if(err)return console.log(err);
        console.log(item);
    })
});

//Delete an item
itemRouter.delete("/api/items/:itemId", cors() , (req,res) => {
    Item.deleteOne({_id : mongoose.Types.ObjectId(req.params.itemId)},(err) =>{
        if(err)return console.log(err);
    })
})

//Get an item by id
itemRouter.get("/api/items/:itemId", cors(), (req,res) => {
    Item.findById((req.params.itemId), (err, item) => {
        if(err) return console.log(err);
        res.send(item);
    });
});

//Get all items
itemRouter.get("/api/items", cors(), (req,res) => {
    Item.find({},(err, items) =>{
        if(err) return console.log(err);
        res.send(items);
    });
});

module.exports = itemRouter;