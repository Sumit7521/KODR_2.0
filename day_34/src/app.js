const express = require('express')
const noteModel = require('./models/notes.model')


const app = express()

app.use(express.json())


app.post("/notes",async (req,res)=>{
    const {title , description} =  req.body

    const note  = await noteModel.create({
        title:title,
        description: description
    })

    res.send(note)
})

app.get('/notes',async(req,res)=>{

    const notes = await noteModel.find()

    res.send(notes)
})

app.delete('/notes/:id', async (req, res)=>{
    await noteModel.findOneAndDelete({
        _id:req.params.id
    })

    res.send('note deleted sucessfully')
})

app.patch('/notes/:id', async (req, res)=>{
    const id  = req.params.id
    const {description} = req.body

    await noteModel.findOneAndUpdate({ _id: id },{description:description})

    res.send("note updated sucessfully")
})

module.exports = app