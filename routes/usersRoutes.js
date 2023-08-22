const express = require('express');
const { createUser, loginUser, currentUser } = require('../controllers/userController');
const router = express.Router();

router.route("/register").post(createUser);

router.route("/login").post(loginUser);

router.route("/current").get(currentUser);

module.exports = router;