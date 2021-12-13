const express = require("express");
const connect = require("./configs/db");
const app = express();

const userController = require("./controllers/user.controller");
const movieController = require("./controllers/movie.controller");
const theatreController = require("./controllers/theatre.controller");
const screenController = require("./controllers/screen.controller");

app.use(express.json());

app.use("/user", userController);
app.use("/movie", movieController);
app.use("/theatre", theatreController);
app.use("/screen", screenController);

const start = async () => {
  await connect();

  app.listen(7000, () => {
    console.log("Lisning to port 7000");
  });
};

module.exports = start;