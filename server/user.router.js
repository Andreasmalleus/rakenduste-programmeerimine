const express = require('express');
const userRouter = express();
const mongoose = require('mongoose');
const cors = require('cors');
const models = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;




const User = models.User;

const hash = (pass) => {
        return bcrypt.hashSync(pass, saltRounds);
}

//Checking if user exists if not then create
userRouter.post("/api/users/login", cors(), (req,res) =>{
    User.findOne({username : req.body.username}, (err,user)=> {
        if(err)return console.log(err);
        if(bcrypt.compareSync(req.body.password, user.password)){
            console.log("Correct password");
        }else{
            console.log("Wrong password");
        }
        console.log(user);
        //Comparing passwords
    })
})

//Creating a user
userRouter.post("/api/users/signup", cors(),(req,res) => {
     //schema to model
    const user = new User({
        ...req.body,
        password : hash(req.body.password)
    });
    user.save((err, user)=> {
        if(err)return console.log(err);
        console.log(user);
    })
})

//Get all users
userRouter.get("/api/users", cors(),(req,res) => {
    User.find({},(err, users) => {
        if(err)return console.log(err);
        res.json(users)
    })
})

//Delete all users
userRouter.delete("/api/users", cors(), (req,res)=> {
    User.deleteMany({}, (err) => {
        if(err)return console.log(err);
    })
})

module.exports = userRouter;