const moongose= require('mongoose')
const noteSchema= new moongose.Schema({
    title:String,
    description:String
})
const noteModel=moongose.model('note',noteSchema)
module.exports=noteModel