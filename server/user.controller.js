const models = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = models.User;

const hash = (pass) => {
    return bcrypt.hashSync(pass, saltRounds);
}

exports.login = (req,res) =>{
    User.findOne({username : req.body.username}, (err,user)=> {
        if(err)return console.log(err);
        if(bcrypt.compareSync(req.body.password, user.password)){
            console.log("Correct password");
        }else{
            console.log("Wrong password");
        }
        jwt.sign({foo : 'bar'}, process.env.TOKEN_SECRET,function(err,token){
            if(err)return console.log(err);
            res.status(200).send({
                user,
                token
            })
        })

        //Comparing passwords
    });
}

exports.signup = (req,res) => {
    //schema to model
   const user = new User({
       ...req.body,
       password : hash(req.body.password)
   });
   user.save((err, user)=> {
       if(err)return console.log(err);
       res.send(user); 
   });
}

exports.verify = (req,res) => {
    const brearerHeader = req.headers["authorization"];
    if(!brearerHeader) return res.sendStatus(400);
    const token = brearerHeader.split(" ")[1];
    if(!token)return res.sendStatus(400);
    jwt.verify( token, process.env.TOKEN_SECRET, (err, decoded) => {
      if(err)return res.sendStatus(400);
      res.send({
          decoded,
          status : "success"
      })
    });
}