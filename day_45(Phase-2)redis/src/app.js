// app.js
const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.route'); // adjust the path if needed
const connectDB = require('./db/db'); // your mongoose connection
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json()); // to parse JSON bodies
app.use(cookieParser()); // to parse cookies

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);

// Export the app
module.exports = app;
