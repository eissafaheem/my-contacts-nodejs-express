const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")

const validateTokenHandler = asyncHandler((req, res, next) => {

    const authorization = req.headers.Authorization || req.headers.authorization
    if (!authorization) {
        res.status(401);
        throw new Error("Invalid access token");
    }

    let accessToken = authorization;
    if (authorization.startsWith("Bearer")) {
        accessToken = authorization.split(" ")[1];
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
            if (error) {
                res.status(401);
                throw new Error("User is not authorized");
            }
            req.user = decoded.user;
            next();
        });
    }
});

module.exports = validateTokenHandler;