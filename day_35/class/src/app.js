const express = require('express')
const multer = require('multer')
const uploadFile = require('./services/storage.service')
const postModel = require('./models/post.model')



const upload = multer({storage:multer.memoryStorage() })

const app = express()
app.use(express.json())

app.post('/posts',upload.single('mama'), async(req,res)=>{
    const caption = req.body.caption
    const file =  req.file.buffer
    
    const result = await uploadFile(file, caption)

    console.log(result)
    res.send(result)

    const post = await postModel.create({
        caption:caption,
        url:result.url
    })
})

module.exports = app