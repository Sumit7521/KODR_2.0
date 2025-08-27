const mongoose = require("mongoose")


function connectDB(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("connected to db sucessfully")
    })
    .catch((error)=>{
        console.error(error)
    })
}

module.exports = connectDB