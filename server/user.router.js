const express = require('express');
const router = express();
const cors = require('cors');
const models = require('../models/user.model.js');


const User = models.User;

router.param("userId", (req, res, next, userId) => {
    User.findById(userId, (err, user) => {
      if(!err || !user) return res.status(500).send("Error user params");
      req.user = user;
      next();
    });
  });

router.param("itemId", (req, res, next, itemId) => {
    Item.findById(itemId, (err, item) => {
      if(!err || !item) return res.status(500).send("Error item params");
      req.item = item;
      next();
    });
});

//add item to cart
router.put("/items/:userId/cart", (req, res) => {
    req.user.cart.push(req.item._id.toString());
    req.user.save( (err) => {
      if(err) {
        console.log(err);
        return res.status(500).send("Error cart save");
      }
      res.send(req.user);
    });
  });

//delete item from cart
router.delete("/items/:userId/cart", (req, res) => {

const index = req.user.cart.findIndex(itemId => itemId === req.item._id.toString());
req.user.cart.splice(index, 1);

req.user.save( (err) => {
    if(err) {
    console.log(err);
    return res.status(500).send("Error cart delete");
    }
    res.send(req.user);
});
});

//Get all users
router.get("/users", cors(),(req,res) => {
    User.find({},(err, users) => {
        if(err)return res.status(500);
        res.json(users)
    })
})

//Get user by id
router.get("/user/:userId", cors(), (req,res) => {
    User.findById((req.params.userId), (err, user) => {
        if(err) return res.status(500)
        res.send(user);
    });
});

//Delete all users
router.delete("/users", cors(), (req,res)=> {
    User.deleteMany({}, (err) => {
        if(err)return res.status(500);
    })
})

module.exports = router;