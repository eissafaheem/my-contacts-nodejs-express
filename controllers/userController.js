const User = require('./../models/userModal')
const bcrypt = require('bcrypt');

const asyncHandler = require('express-async-handler')
// @desc register user
// @route POST api/users/create 
// @access public
const createUser = asyncHandler(async (req, res) => {

    const {
        userName,
        email,
        password
    } = req.body;

    if (!userName || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const userAvailable = await User.findOne({ email });
    console.log(email)
    if (userAvailable) {
        res.status(400);
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        userName,
        email,
        password: hashedPassword
    });
    console.log("Register");
    res.status(200).json({
        _id: user._id,
        email: user.email
    });
});

// @desc login user
// @route POST api/users/login 
// @access public
const loginUser = asyncHandler((req, res) => {
    console.log("Login");
    res.json({ message: 'Login' })
});

// @desc current user
// @route GET api/users/create 
// @access private
const currentUser = asyncHandler((req, res) => {
    console.log("Current user");
    res.json({ message: 'Current' })
});

module.exports = {
    createUser,
    loginUser,
    currentUser
};