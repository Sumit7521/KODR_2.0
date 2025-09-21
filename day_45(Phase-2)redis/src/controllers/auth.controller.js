const userModel = require("../models/user.model.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Redis = require('ioredis')


const redis = new Redis{
    port:18370,
    host:"redis://default:*******@redis-18370.crce182.ap-south-1-1.ec2.redns.redis-cloud.com:"

}

async function registerUser(req, res) {
    try {
        const { username, password, email, fullName: { firstName, lastName } } = req.body;

        // Check if user already exists
        const isUserExist = await userModel.findOne({
            $or: [{ username }, { email }]
        });

        if (isUserExist) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new userModel({
            username,
            email,
            password: hashedPassword,
            fullName: { firstName, lastName }
        });

        await newUser.save();

        // Generate JWT
        const token = jwt.sign(
            { userId: newUser._id, username: newUser.username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Save JWT in httpOnly cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // only over HTTPS in production
            maxAge: 60 * 60 * 1000 // 1 hour
        });

        return res.status(201).json({ 
            message: 'User registered successfully', 
            userId: newUser._id 
        });
    } catch (err) {
        console.error('Error in registerUser:', err.message);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

async function loginUser(req, res) {
    try {
        const { username, password, email } = req.body;

        // Find user by username or email
        const user = await userModel.findOne({
            $or: [{ username }, { email }]
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate JWT
        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Save JWT in httpOnly cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 1000 // 1 hour
        });

        return res.status(200).json({ 
            message: 'Login successful', 
            userId: user._id 
        });
    } catch (err) {
        console.error('Error in loginUser:', err.message);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { registerUser, loginUser };
