const express = require('express')
const multer = require('multer')
const uploadFile = require('./service/storage.service')
const postModel = require('./models/post.model')
const cors = require('cors');

const app = express()
app.use(express.json())
app.use(cors({
  origin: 'https://gallary-henna.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // allowed methods
  credentials: true // if you want to send cookies
}));

const upload = multer({ storage: multer.memoryStorage() });

app.post('/post',upload.single('post'), async (req,res)=>{

    const caption = req.body.caption
    const file = req.file.buffer
    console.log(caption,file)

    const result = await uploadFile(file,caption)

    res.send(result)

    const post = await postModel.create({
        caption:caption,
        url:result.url
    })
})

app.get('/post', async (req,res)=>{
    const posts = await postModel.find()
    res.send(posts)
})


module.exports = app