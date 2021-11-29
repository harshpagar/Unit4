const express = require("express");

const app = express();
const port = process.env.PORT || 12345;

app.post("/",(req,res)=>{
    res.send("Hi");
});
app.listen(port,() =>{
    console.log(`connection is setup at ${port}`);
})