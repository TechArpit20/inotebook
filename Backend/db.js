const mongoose=require('mongoose');
require('dotenv').config();

const uri = process.env.URI;

var conn=async ()=>{
    await mongoose.connect(uri).then(()=>{
        console.log("Success!!!");
    }).catch((err)=>{
        console.log("Error Occured: "+err);
    })
}; 

module.exports=conn;