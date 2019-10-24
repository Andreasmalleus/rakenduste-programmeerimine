const models = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
        console.log(user);
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
       console.log(user);
   });
}
