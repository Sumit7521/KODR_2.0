const express = require('express')
const userModel = require("../models/user.model")
const jwt = require('jsonwebtoken')


const router = express.Router()
// POST / api/auth/register
router.post('/register', async(req,res)=>{
    const { username , fullName:{firstName , lastName} ,email , password} = req.body

    const isUserExists = await userModel.findOne({
        $or: [
            { username : username},
            {email: email}
        ]
    })

    if(isUserExists){
        return res.status(422).json({
            message: "user already exist"
        })
    }
    const user = await userModel.create({
        username,
        email,
        password,
        fullName:{
            firstName,
            lastName
        }
    })

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.status(201).json({
        message: "user registered sucessfully",
        token:token,
        user:{
            _id: user._id,
            username: user.username,
            email: user.email,
            fullName: user.fullName
        }
    })
})

router.post("/random", async(req,res)=>{
    const {token} = req.body

    if(!token) {
        return res.status(401).json({
            message: "unauthorized"
        })
    }

    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.id)
        res.json({
            user:user,
            message:"token is valid"
        })
    }catch(error){
        return res.status(401).json({
            message: "unauthorized"
        })
    }
    
})

module.exports = router