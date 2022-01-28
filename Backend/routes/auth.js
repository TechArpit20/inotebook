const express= require('express');
const router= express.Router();

router.get('/',(req,res)=>{
    res.send({
        name:"Arpit",
        age: 20
    })
});

module.exports= router;