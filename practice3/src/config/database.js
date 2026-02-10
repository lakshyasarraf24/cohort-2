const mongoose=require('mongoose')
function connectToDb(){
mongoose.connect('mongodb+srv://lakshya:lakshya@cluster.qpcuvxr.mongodb.net/practice3')
.then(()=>{
    console.log("connected to database")
})
}
module.exports=connectToDb