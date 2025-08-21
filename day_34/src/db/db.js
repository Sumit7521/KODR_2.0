const mongoose = require("mongoose")


function connectDB(){

    mongoose.connect("mongodb+srv://kodr2:AMxouEsyG9uAetSz@cluster0.eqnj1vd.mongodb.net/cosmo")
    .then(()=>{
        console.log("connect to db sucessfully")
    })
    .catch((error)=>{
        console.log(error)
    })
}


module.exports = connectDB