//-FILE DESCRIPTION: Main server file

const dotenv = require("dotenv"); //acquired dotenv
const express = require("express"); // acquired express
const app = express(); //configured app to use express

dotenv.config({ path: "./config.env" }); //used dotenv to get environment variables

require("./database/connect"); //acquired database connection from connect
app.use(express.json());  //convert .json object to string
app.use(require("./router/auth")); //configured router

const PORT = process.env.PORT; //default port for backend

const middleware = (req, res, next) => {
  console.log("middleware running");
  next();
}; // started middleware


app.get("/backend2", middleware, (req, res, next) => {
  console.log("backend2 running");
  res.send("Hello World from backend");
});//backend2 route

app.listen(PORT, () => {
  console.log("server running");
});//server listening on PORT

