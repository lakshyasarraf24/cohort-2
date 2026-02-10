const database=require('mongoose')
require('dotenv').config()
function connectToDb(){
    database.connect(process.env.mongoose_db)
    .then(()=>{
        console.log('connected to database')
    })
}
module.exports=connectToDb