const express = require('express');
const userRouter = express();
const cors = require('cors');
const models = require('../models/user.model.js');


const User = models.User;

//Get all users
userRouter.get("/users", cors(),(req,res) => {
    User.find({},(err, users) => {
        if(err)return console.log(err);
        res.json(users)
    })
})

//Delete all users
userRouter.delete("/users", cors(), (req,res)=> {
    User.deleteMany({}, (err) => {
        if(err)return console.log(err);
    })
})

module.exports = userRouter;