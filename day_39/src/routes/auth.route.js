const express = require('express')
const userModel = require("../models/user.model")
const jwt = require('jsonwebtoken')
const crypto = require('crypto')


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

    const hashPassword = crypto.createHash('md5').update(password).digest('hex')

    const user = await userModel.create({
        username,
        email,
        password:hashPassword,
        fullName:{
            firstName,
            lastName
        }
    })

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    return res.status(201).json({
        message: "user registered sucessfully",
        token:token,
        // user:{
        //     _id: user._id,
        //     username: user.username,
        //     email: user.email,
        //     fullName: user.fullName
        // }
    })
})

router.post("/login", async(req,res)=>{
    const {username , password , email } = req.body

    const user = await userModel.findOne({
        $or: [
            {username:username},
            {email : email}
        ]
    })

    if(!user){
        return res.status(400).json({
            message:"user not found"
        })
    }

    const hashPassword = crypto.createHash("md5").update(password).digest("hex")

    if(user.password !== hashPassword){
        return res.status(400)
    }

    const token = jwt.sign({
        id: user._id
    },process.env.JWT_SECRET)

    res.cookie("mama",token)

    return res.status(200).json({
        message: 'login successful',
        token
    })
})

router.get('/random', async (req,res)=>{
    const {mama} = req.cookies

    if(!mama){
        return res.status(401).json({
            message:"unauthorized"
        })
    }

    try {
        const decoded = jwt.verify(mama, process.env.JWT_SECRET)
        const user = await userModel.findOne({
            _id: decoded.id
        })
        res.status(200).json({
            message:"user profile fetched sucessfully"
        })

    } catch (error) {
        res.status(401).json({
            message:"use not recognized"
        })
    }
})

module.exports = router