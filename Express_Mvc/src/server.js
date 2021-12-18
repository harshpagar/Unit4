const express = require("express");
const app = express();

const port = process.env.PORT || 6000;
app.use(express.json());
const connect = require("./configs/db.connect");

const studentControlller = require("./controllers/students.controller");


app.use("/student", studentControlller);

const start = async () => {
  await connect();

  app.listen(port, () => {
    console.log(`Listning to port ${port}`);
  });
};

module.exports = start;