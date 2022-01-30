const express= require('express');
const User = require('../models/User');
const router= express.Router();


// Create a user using: POST method "/ap/auth". NOTE- It doesn't require any authentication
router.get('/',(req,res)=>{
    console.log(req.body);
    const user= new User(req.body);
    console.log(user);
    user.save(); // TO save the user in the db. 
    res.send("This is my page!!!")
});

module.exports= router;