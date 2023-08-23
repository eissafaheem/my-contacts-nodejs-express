const express = require('express');
const {
    createUser,
    loginUser,
    currentUser
} = require('../controllers/userController');
const validateTokenHandler = require('../middleware/validateTokenHandler');
const router = express.Router();

router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/current").get(validateTokenHandler, currentUser);

module.exports = router;