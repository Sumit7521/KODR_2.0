const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    caption:String,
    url:String
})

const postModel = mongoose.model("post", postSchema)

module.exports = postModel