const dotenv = require("dotenv");
const mongoose = require('mongoose'); 

const express = require('express')
const app = express()

const cookieParser = require("cookie-parser");
dotenv.config({path:'./config.env'});
require('./db/conn');
app.use(express.json());
app.use(cookieParser());

//link router file
app.use(require('./router/auth'));


//const User = require('./model/userSchema');


const PORT = process.env.PORT;
const DB = process.env.DATABASE;




// const middleware = (req,res,next)=>{
//     console.log("hello my middleware");
//     next();
// }

// 
// app.get('/about',middleware,(req,res)=>{
//     res.send("hello about");
// })

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))