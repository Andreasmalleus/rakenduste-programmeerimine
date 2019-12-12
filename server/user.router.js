const express = require('express');
const router = express();
const userModels = require('../models/user.model.js');
const itemModels = require('../models/item.model.js');

const User = userModels.User;
const Item = itemModels.Item;

router.param("userId", (req, res, next, userId) => {
    User.findById(userId, (err, user) => {
      if(!user) return res.status(500).send("Error user params");
      req.user = user;
      next();
    });
  });

router.param("itemId", (req, res, next, itemId) => {
    Item.findById(itemId, (err, item) => {
      if(!item) return res.status(500).send("Error item params");
      req.item = item;
      next();
    });
});

router.post("/:userId/checkout", async (req,res) => {
    console.log(req.user.getCartAmount());
    const amount = await req.user.getCartAmount();
    console.log(amount, "This is the cart amount");  
    res.send(200);
});

//add item to cart 
router.put("/users/:userId/cart/:itemId", (req, res) => {
  console.log(req.user);
    req.user.cart.push(req.item._id.toString());
    req.user.save( (err) => {
      if(err) {
        console.log(err);
        return res.status(500).send("Error cart save");
      }
      return res.sendStatus(200);
    });
});

//delete item from cart
router.delete("/users/:userId/cart/:itemId", (req, res) => {

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
router.get("/users",(req,res) => {
    User.find({},(err, users) => {
        if(err)return res.status(500);
        res.json(users)
    })
})

//Get user by id
router.get("/users/:userId", (req,res) => {
    User.findById((req.params.userId), (err, user) => {
        if(err) return res.status(500)
        res.send(user);
    });
});

//Delete all users
router.delete("/users", (req,res)=> {
    User.deleteMany({}, (err) => {
        if(err)return res.status(500);
    })
})


module.exports = router;