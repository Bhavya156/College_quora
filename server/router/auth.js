//*FILE DESCRIPTION: Used to create a new user

const express = require("express"); // acquired express
const mongoose = require("mongoose"); // acquired mongoose
const router = express.Router(); // acquired express router
const bcrypt = require("bcryptjs"); //acquired bcrypt
const jwt = require("jsonwebtoken"); // acquired jwt
const multer = require("multer");

const upload = multer({dest:'./uploads/', filename:function(req, file,cb){
  cb(null, file.originalname);
}});
const authenticate = require("../middleware/authenticate");
const postSchema = require("../models/postSchema");
require("../database/connect"); //connected database
const userSchema = require("../models/userSchema"); // acquired user schema

router.get("/", (req, res) => {
  res.send("Hello from the server router");
}); //shown if homepage is visited

//********************start of post method to signup*********************//

router.post("/signup", async (req, res) => {
  const { fName, lName, email, password } = req.body; //object destructuring, Eg.: req.body.name = name

  if (!fName || !lName || !email || !password) {
    //if any field is empty return error
    return res
      .status(422)
      .json({ error: " Please enter fill all the fields properly" });
  }

  try {
    const userExists = await userSchema.findOne({ email: email }); //find if user already exists

    if (userExists) {
      return res.status(422).json({ error: "Email already exists" });
    }

    const user = new userSchema({ fName, lName, email, password }); //create new object of type userSchema

    const userCreate = await user.save(); //send new user's data to database

    if (userCreate) {
      res.status(201).json({ message: "User registered succesfully" });
    } else {
      res.status(500).json({ error: "Failed to register user" });
    }
  } catch (err) {
    console.log(err);
  }
});

//********************start of post method to login*********************/

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body; //object destructuring

    if (!email || !password) {
      //if email or password field is empty
      return res
        .status(400)
        .json({ error: "Please fill both email and password." });
    }

    const userExists = await userSchema.findOne({ email: email }); //find if user exists

    if (userExists) {
      const isMatch = await bcrypt.compare(password, userExists.password); //compare entered password against account password
      const token = await userExists.generateAuthToken(); //generate json web token for authentication
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (isMatch) {
        res.status(200).json({ message: "User login successful" });
      } else {
        res.status(400).json({ error: "Invalid Credentials" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/backend2", authenticate, (req, res) => {
  console.log("backend2 running");
  res.send("Hello World from backend");
});

router.post("/upload", upload.single("image"), (req, res, next) => {
  const post = new postSchema({
    fName: req.body.fName,
    caption: req.body.caption,
    image: req.file.path,
  });
  post
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        err: err.message,
      });
    });
});

router.get("/upload", (req, res, next) => {
  postSchema.find()
    .select("fname _id caption image")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        posts: docs.map(doc => {
          return {
            name: doc.fName,
            caption: doc.caption,
            image: doc.image,
            _id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost:5000/upload" + doc._id
            }
          };
        })
      };
      //   if (docs.length >= 0) {
      res.status(200).json(response);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
module.exports = router;
