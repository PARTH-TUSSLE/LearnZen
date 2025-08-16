const {JWT_USER_PASSWORD} = require('../config.js');
const jwt = require('jsonwebtoken');

function userMiddleware(req, res, next) {
  const token = req.headers.token;
  const decoded = jwt.verify(token, JWT_USER_PASSWORD)

  if (decoded) {
    req.userId = decoded.id;   
    next();
  } else {
    res.status(403).json({
      msg: "You are not signed in"
    })
  }

}

module.exports = {
  userMiddleware,
};