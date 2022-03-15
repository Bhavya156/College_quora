//-FILE DESCRIPTION: Used to define user schema
const jwt = require("jsonwebtoken"); //acquired jsonwebtoken
const mongoose = require("mongoose"); //acquired mongoose
const bcrypt = require("bcryptjs"); //acquired bcrypt

//****************schema definition**********************//

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
  tokens: [{ token: { type: String, required: true } }],
});

//****************start of method to add jwt token to database*****************/
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY); 
    this.tokens = this.tokens.concat({ token: token }); // adds token to array of tokens
    await this.save();
    return token; 
  } catch (err) {}
};
//****************start of method to hash passwords****************//

userSchema.pre("save", async function (next) {
  //method is ran before save method hence pre-save method
  if (this.isModified("password")) {
    //check if current instance of password is modified
    this.password = bcrypt.hashSync(this.password, 12); //hash the current instance of password using bcrypt
  }
  next();
});

const User_data = mongoose.model("USER_DATA", userSchema); //export schema to mongoDB

module.exports = User_data;
