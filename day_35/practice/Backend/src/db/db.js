const mongoose = require('mongoose')

function connectDB(){
    mongoose.connect("mongodb+srv://kodr2:Sumit140803@cluster0.eqnj1vd.mongodb.net/amsterdom")
    .then(()=>{
        console.log("connected to db sucessfully")
    })
    .catch((error)=>{
        console.log(error)
    })
}

module.exports = connectDB