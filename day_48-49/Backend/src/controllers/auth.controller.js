const userModel = require('../db/db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const redis = require('../db/redis')
const { json } = require('express')

const userregister = async (req, res)=>{

    const {username , fullName:{firstName, lastName}, email ,password} = req.body

    const isUserAlreadyExists = await userModel.findOne({
        $or :[
            {email}, 
            {username}
        ]
    })
    if(isUserAlreadyExists){
        return res.status(422).json({
            message: "user already exist"
        })
    }
    const hashedpassword = await bcrypt.hash(password,10)

    const user = userModel.create({
        username,
        fullName:{
            firstName,
            lastName
        },
        email,
        password : hashedpassword
    })

    const token = jwt.sign({
        id:user._id,
        role:user.role
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message: "user registered sucessfully",
        user:{
            id: user._id,
            username: user.username,
            fullName:user.fullName,
            email : user.email,
            role : user.role
        }
    })
}

const userlogin = async (req,res) =>{
    const {username , email , password} = req.body

    const user = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(!user){
        return res.status(401).json({
            message:"invalid credentials",
        })
    }

    const isPasswordValid= await bcrypt(password, user.password)

    if(!isPasswordValid){
        return res.status(401).json({
            message:"invalid credentials"
        })
    }

    const token = jwt.sign({
        id:user._id,
        role:user.role
    },process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message:"user loggedin sucessfully",
        user:{
            username:user.username,
            email:user.email
        }
    })

}

const logout = async (req, res)=>{

    const token = req.cookies.token

    if(token){
        await redis.set(`blacklist:${token}`, "true", "EX", 60 * 60 * 24)
    }

    res.clearCookie('token')

    res.status(200).json({
        message:"user logout sucessfuly"
    })
}

module.exports = {
    userregister,
    userlogin,
    logout
}