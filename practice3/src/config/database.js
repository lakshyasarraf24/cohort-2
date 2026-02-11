const mongoose=require('mongoose')
function connectToDb(){
mongoose.connect('')
.then(()=>{
    console.log("connected to database")
})
}
module.exports=connectToDb
