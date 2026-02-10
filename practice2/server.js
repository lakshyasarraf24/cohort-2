const app=require('./src/app')
const connectTodb=require('./src/config/database')
connectTodb()
app.listen('4000',()=>{
    console.log('server is running')
})
