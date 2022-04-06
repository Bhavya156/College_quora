const jwt = require("jsonwebtoken");    //acquired jwt
const User = require("../models/userSchema"); //acquired userSchema
const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;  // set token as the current jwt token
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY); // verify the jwt token using the secret key
    const rootUser = await User.findOne({   //find a user with id same as the current id of the rootUser
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("Couldn't find user"); //throw error if user is not found
    }

    req.token = token;
    req.rootUser = rootUser;    
    req.userID = rootUser._id; //now user information can be obtained using the following methods
    next();

  } catch (err) {

    res.status(401).send("Unauthorized token");
    console.log(err);
  }
};

module.exports = authenticate; // export as authenticate
