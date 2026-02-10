const express=require('express')
const authrouter=require('./config/auth.routes')
const app=express()
const cookieparser=require('cookie-parser')
app.use(express.json())
app.use(cookieparser())
app.use('/api/auth',authrouter)
module.exports=app