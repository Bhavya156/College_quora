//-FILE DESCRIPTION: Used to define user schema

const mongoose = require("mongoose"); //acquired mongoose

//schema definition
const userSchema = new mongoose.Schema({ 
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User_data = mongoose.model("USER_DATA", userSchema); //export schema to mongoDB

module.exports = User_data;
