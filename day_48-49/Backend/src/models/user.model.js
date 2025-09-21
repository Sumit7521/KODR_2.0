const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },
    fullName:{
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },  
    },
    email:{
        unique:true,
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        select:false,
        minlength:6
    },
     role: {
        type: String,
        enum: [ "user", "plus" ],
        default: "user"
    }
})

module.exports = mongoose.Model("user",userSchema)