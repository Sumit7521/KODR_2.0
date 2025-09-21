const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true // remove extra spaces
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, // store emails in lowercase
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        }
    }
}, {
    timestamps: true 
});

// Optional: prevent password from being returned in queries
userSchema.methods.toJSON = function () {
    const userObject = this.toObject();
    delete userObject.password;
    return userObject;
}

module.exports = mongoose.model('User', userSchema);
