const dotenv = require("dotenv");
const mongoose = require('mongoose'); 
const express = require('express')
const app = express()

dotenv.config({path:'./config.env'});
require('./db/conn')
const PORT = process.env.PORT;
const DB = process.env.DATABASE;




const middleware = (req,res,next)=>{
    console.log("hello my middleware");
    next();
}
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/about', middleware, (req, res) => res.send('Hello World about us!'))
app.get('/contact', (req, res) => res.send('Hello World contact !'))



app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))