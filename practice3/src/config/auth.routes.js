const express=require('express')
const authrouter=express.Router()
const usermodel=require('./user.model')
const jwt=require('jsonwebtoken')
const crypto=require('crypto')
require('dotenv').config()
authrouter.post('/register',async (req,res)=>{
    const {email,name,password}=req.body
    const isaccountexist= await usermodel.findOne({email})
    if(isaccountexist){
        return res.status(409).json({
            message:"the user account already exists"
        })
    }
    const hash=crypto.createHash('md5').update(password).digest('hex')
        const user= await usermodel.create({
        email,name,password:hash
    })
    const token=jwt.sign({
        id:user._id,
        email:user.email
    },
    process.env.JWT_SECRET
)
res.cookie('jwt-token',token)
    res.status(201).json({
        message:"user created",
        user,
        token
    })

})
authrouter.post('/protected', (req,res)=>{
    console.log(req.cookies)
    res.status(201).json({
        message:"this is protected route"
    })
})
authrouter.post('/login', async( req,res)=>{
    const {email,password}=req.body
    const user= await usermodel.findOne({email})
    if(!user){
        return res.status(404).json({
            message:"user not found"
        })
    }
    const pass=user.password===crypto.createHash('md5').update(password).digest('hex')
    if(!pass){
        return res.status(401).json({
            message:"invalid password"
        })
    }
    const token=jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)
    
    res.cookie(token)
    res.status(200).json({
        message:"user logged in",
        user
    })
})
module.exports=authrouter   