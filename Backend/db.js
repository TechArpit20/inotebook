const mongodb = require('mongodb').MongoClient;
const uri = process.env.URI;

const conn=()=>{
    mongodb.connect(uri,()=>{
    console.log("Connected To the Database");
})};

module.exports=conn;