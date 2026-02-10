const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:String,
   email:{
    type:String,
    unique:[true,"account already exists"]
   },
   password:String
})
const usermodel=mongoose.model('user',userSchema)
module.exports=usermodel