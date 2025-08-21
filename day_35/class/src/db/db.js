const mongoose = require('mongoose')


function connectDB() {
    mongoose.connect('mongodb+srv://kodr2:Sumit140803@cluster0.eqnj1vd.mongodb.net/amsterdom')
    .then(()=>{
        console.log("db connected sucessfully")
    })
    .catch((error)=>{
        console.error(error)
    })
}

module.exports = connectDB