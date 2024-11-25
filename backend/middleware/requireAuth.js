const jwt = require("jsonwebtoken");
const User = require('../models/user');
async function requireAuth(req, res, next) {
    // Read token from cookies
    const token = req.cookies.Authorization;

    // decode token
    const decoded = jwt.verify(token, process.env.SECRET);

    // check expiration
    if(Date.now() > decoded.exp) return res.sendStatus(401);

    // find user from decoded sub
    const user = await User.findById(decoded.sub);
    if(!user) return res.sendStatus(401);

    // attach user to req
    req.user = user;

    // continue on...


    next();
}

module.exports = requireAuth;
