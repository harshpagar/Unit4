const express=require('express');
const connect = require('./configs/db');

const app=express()
const userController=require("./controllers/user.controller")
const gallerycontroller=require("./controllers/gallery.controller")
const port=8000;
app.use(express.json())
app.use("/user",userController)
app.use("/gallery",gallerycontroller)
const start=async ()=>{
    const con =await connect();
    console.log("connection Established")
    app.listen(port,()=>{
        console.log(`Listening on port ${port}`);
    })
}

module.exports=start;