const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type : String,
        unique:true,
        required: true
    },
    email:{
        type : String,
        unique:true,
        required : true
    },
    fullname:{
        firstname:{
            type : String,
            required : true
        },
        lastname:{
            type: String
        }
    },
    role:{
        type:String,
        enum :["seller", "user"],
        default : "user"
    },
    password:{
        type: String,
        select : false
    }
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel