const mongoose = require('mongoose');

const User = mongoose.Schema(
    {
        userName: {
            type: String,
            require: [
                true,
                "User name is required"
            ]
        },
        email: {
            type: String,
            require: [
                true,
                "User email is required"
            ]
        },
        password: {
            type: String,
            require: [
                true,
                "User password is required"
            ]
        }
    },
    {
        timestamp: true
    }
);

module.exports = mongoose.model('User', User);