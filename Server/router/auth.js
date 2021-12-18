const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authenticate = require("../middleware/authenticate")

require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => res.send('Hello World r!'))

// app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/about', middleware, (req, res) => res.send('Hello World about us!'))
// app.get('/contact', (req, res) => res.send('Hello World contact !'))

router.post('/register',async (req,res) => {
   
    const{name,email,phone,work,password,cpassword} = req.body;

   // console.log(req.body); // res.json({message:req.body});

   if(!name || !email || !work || !phone || !password ||!cpassword){
       return res.status(422).json({error:"plz Fill All Field"});
   }
   try{
        const userExist = await User.findOne({email:email});
        
        if(userExist){
            return res.status(422).json({error: "Email Already exist"})
        }else if (password !== cpassword){
            return res.status(422).json({error: "Password does not match"})
        }else{
            const user  = new User({name,email,phone,work,password,cpassword});
        
            const userRegister =  await user.save();
    
            if(userRegister){
                res.status(201).json({message:"user save successfull"})
            } 
        }
           
    }catch(err){
    console.log(err);
   }
  
});


router.post('/signin',async (req,res)=>{
   
     try{
        const{email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:"plz Fill All Field"});
        }

        const userLogin =await User.findOne({email:email});

        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);
            let token = await userLogin.generateAuthToken();
       
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            }) 

            if(!isMatch){
                res.json({message : "Invalid Credientials"})
             }else{
                res.json({message : "user Signin Successfull"})
             }
        }else{
            res.json({message : "Invalid Credientials"})
        }

      
  
        


     }catch(err){
         console.log(err);
     }
})


router.get('/about',authenticate,(req,res)=>{
    console.log("abbout page");
    res.send(req.rootUser);
})

module.exports = router;