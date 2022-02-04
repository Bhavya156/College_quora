const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const app = express();

dotenv.config({path: './config.env'});
require('./database/connect');

const PORT = process.env.PORT;

const middleware = (req,res,next) => {
    console.log('middleware running');
    next();
}


app.get('/signup',(req, res, next) => {
    res.send('Hello World from server');
})
app.get('/backend2',middleware,(req, res,next) => {
    console.log('backend2 running');
    res.send('Hello World from backend');
   
})

app.listen(PORT,()=>{
    console.log('server running');
})