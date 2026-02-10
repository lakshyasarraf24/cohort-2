const database=require('mongoose')
require('dotenv').config()
function connectToDb(){
    database.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('connected to database')
    })
}
module.exports=connectToDb