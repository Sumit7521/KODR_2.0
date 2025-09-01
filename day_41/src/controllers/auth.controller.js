const userModel = require('../models/user.model')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

async function createUser(
    {username,
    email,
    fullname:{
        firstname,
        lastname
    },
    password,
    role = "user"
    }
){
    const isUserAlreadyExists = await userModel.findOne({
        $or :[
            {username} , {email}
        ]
    })
    if(isUserAlreadyExists){
        throw new Error("user already exist")
    }

    const hash = await bcrypt.hash(password , 10)

    const user = await userModel.create({
        username,
        email,
        fullname:{
            firstname,
            lastname
        },
        password,
        role : role
    })

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)
    
    return(user , token)
}

async function registerUser(){
    const {username , email , fullname:{firstname , lastname},password} = req.body

    try {
        const {user, token} = await createUser({
            username,
            email,
            fullname:{
                firstname,
                lastname
            },
            password
        })
        res.cookie("token", token)
        res.status(201).json({
            message: "user already registered",
            user:{
                username : user.username,
                fullname: user.fullname,
                id : user._id,
                email : user.email
            }
        })
    } catch (error) {
        res.status(400).json({
            message : error.message
        })
    }
}

async function loginUser(){

    const {username , email , fullname:{firstname , lastname},password} = req.body

    try{
        const user = await userModel.findOne({
            $or :[
                {email},{username}
            ].select("+password")
        })

        if(!user){
            res.status(400).json({
                message : "invalid user or email"
            })
        }

        const isPasswordValid = await bcrypt.compare(password , user.password)

        if(!isPasswordValid){
            res.status(400).json({
                message :"invalid password"
            })
        }

        const token = jwt.sign({
        id:user._id
        },process.env.JWT_SECRET)

        res.cookie("token",token)

        res.status(200).json({
        message: "user logged in successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            fullname: user.fullname,
        }
        })
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}

async function registerSeller() {

    const {username , email , fullname:{firstname , lastname},password} = req.body

    try {
        const { user , token } = await createUser({
            username,
            email,
            fullname:{
                firstname,
                lastname
            },
            password,
            role:"seller"
        })

        res.cookie("token" , token)
        res.status(201).json({
            message : "seller registered succesfully",
            user:{
                id: user._id,
                username: user.username,
                email: user.email,
                fullname: user.fullname,
            }
        })

    } catch (error) {
        res.status(400).json({
            message : error.message ,
        })
    }
}

async function loginSeller(){
    const {username , email , fullname:{firstname , lastname},password} = req.body

    try {
        const user = await userModel.findOne({
            $or:[
                {username} , {email}
            ].select("+password")
        })

        if(!user){
            res.status(400).json({
                message:"invalid email or username"
            })
        }

        const isPasswordValid = bcrypt.compare(password,user.password)

        if(!isPasswordValid){
            res.status(400).json({
                message:"invalid password"
            })
        }

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

        res.cookie("token", token)

        res.status(201).json({
            message:"seller loggedin sucessfully",
            user:{
                username: user.username,
                id:user.id,
                email:user.email,
                fullname:user.fullname
            }
        })

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {
    registerUser,
    loginUser,
    registerSeller,
    loginSeller
}