const app=require('./src/app')
const connectToDb=require('./src/config/database')
connectToDb()
app.listen('7000',()=>{
    console.log('server is running on port 7000')
})