const express = require('express');
const router = express();

const Model = "mingi model"

router.get("/otsi",(req,res) => {
    Model.find({},(err, users) => {
        if(err)return res.status(500);
        res.json(users)
    })
})

router.get("/otsi_id_abil/:id",(req,res) => {
    Model.findById((req.params.id),(err, users) => {
        if(err)return res.status(500);
        res.json(users)
    })
})

router.post("/lisa", (req, res) => {
    const props = {
        id: "clothing-1",
        imgSrc: "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg",
        title: "Kenzo",
        price: 12,
        category: "new clothing",
    }
    const item = new Model(props);
    item.save((err, item) => {
        if(err)return console.log(err);
        console.log(item);
    })
});