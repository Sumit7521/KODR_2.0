const mongoose = require('mongoose')

function connectDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected to db sucessfully")
    })
    .catch((error)=>{
        console.log(error)
    })
}

module.exports = connectDB