const user = require("./user")
const express = require('express');
const app  = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Welcome To Home Page");
})


app.get('/user/', (req, res) => {
    res.send(user)
})

app.listen(0234, ()=> {
    console.log("Listening on port 0234");
})