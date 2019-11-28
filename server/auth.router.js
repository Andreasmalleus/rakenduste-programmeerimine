const express = require('express');
const router = express();
const {check, validationResult} = require('express-validator');
const userController = require('./user.controller.js');
require('dotenv').config();



/*const validationMiddleware  = (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }*/

//Checking if user exists if not then create
router.post("/login", userController.login);

//Creating a user
router.post("/signup",userController.signup);

router.post("/verify",userController.verify);
    
      
        
    /*check('email').isEmail().withMessage('Email must be correct'),
    // password must be at least 5 chars long
    check('password').not().isIn(['123', 'password1', 'parool1']).withMessage('Do not use a common word as the password')
    .isLength({ min: 5 }).withMessage('Must be atleast 5 characters long')
    .matches(/\d/).withMessage('must contain a number'),
    check('username').isLength({ min: 5 }).withMessage('Must be atleast 5 characters long')
    .withMessage('Must be atleast 5 characters long')
], userController.signup);*/
//validationMiddleware() viskab errori

module.exports = router;