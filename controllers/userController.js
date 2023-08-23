const User = require('./../models/userModal')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')

// @desc register user
// @route POST api/users/register 
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

    res.status(200).json({
        _id: user._id,
        email: user.email
    });
});

// @desc login user
// @route POST api/users/login 
// @access public
const loginUser = asyncHandler(async (req, res) => {

    const {
        email,
        password
    } = req.body;

    const userExists = await User.findOne({ email });

    if (!userExists) {
        res.status(404);
        throw new Error("User not exists");
    }

    const userFromDb = await User.findOne({ email });
    if (await bcrypt.compare(password, userFromDb.password)) {
        const accessToken = jwt.sign(
            {
                user: {
                    _id: userFromDb._id,
                    email: userFromDb.email,
                    userName: userFromDb.userName
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
        );
        res.status(200).json({ accessToken });
    }
    else {
        res.status(401);
        throw new Error("Invalid email or password");
    }

});

// @desc current user
// @route GET api/users/current 
// @access private
const currentUser = asyncHandler(async(req, res) => {
    res.json(req.user);
});

module.exports = {
    createUser,
    loginUser,
    currentUser
};