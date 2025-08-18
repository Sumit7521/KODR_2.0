const express = require('express')
const cat = require('cat-me');

const app = express() //server ka instance create krta h
app.use(express.json())


app.get('/cat',(req,res)=>{
    const randomcat = cat()
    console.log(randomcat)
    res.send(`<pre>${randomcat}</pre>`);
})

app.get('/',(req,res)=>{
    res.send('heloo')
})
app.get('/home',(req,res)=>{
    res.send('this is home api.')
})

const notes = []

app.post('/notes', (req,res)=>{
    notes.push(req.body)
    res.send('notes added sucessfully')
    console.log(req.body)
})

app.get('/notes',(req,res)=>{
    res.send(notes)
})

app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index
    delete notes[ index ]
    res.send('notes deleted sucessfully')
})

app.listen(3000,function(){
    console.log("server is running on port 3000")
})