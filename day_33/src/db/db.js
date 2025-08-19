//logic of how to connect to db

const mongoose = require("mongoose")

function connectDB(){

    mongoose.connect("mongodb+srv://kodr2:AMxouEsyG9uAetSz@cluster0.eqnj1vd.mongodb.net/cosmo")
    .then(()=>{
        console.log("database connected sucessfully")
    })
    .catch(err => {
        console.log(err)
    })

}

module.exports = connectDB