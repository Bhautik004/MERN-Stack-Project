const express = require('express')
const app = express()
const port = 3000

const middleware = (req,res,next)=>{
    console.log("hello my middleware");
    next();
}
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/about', middleware, (req, res) => res.send('Hello World about us!'))
app.get('/contact', (req, res) => res.send('Hello World contact !'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))