const express=require('express')
const noteModel=require('./config/note.model')
const app=express()
const cors=require('cors')
app.use(express.json())
app.use(cors())
app.post('/note',async (req,res)=>{
    const {title,description}=req.body
    const note= await noteModel.create({
        title,description
    })
    res.status(201).json({
        message:"note created successfully",
        note
    })
})
app.get('/note',async(req,res)=>{
    const notes=await noteModel.find()
    res.status(200).json({
        message:"notes fetched successfully",
        notes
    }) 
})
app.delete('/note/:id',async(req,res)=>{
    const id=req.params.id
    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"note deleted successfully"
        
    })
})
app.patch('/note/:id',async(req,res)=>{
    const id=req.params.id
    const {title,description}=req.body
    await noteModel.findByIdAndUpdate(id,{title,description})
    res.status(200).json({
        message:"note updated successfully"
    })
})
module.exports=app