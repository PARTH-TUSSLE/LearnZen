const {JWT_ADMIN_PASSWORD} = require("../config.js")
const jwt = require('jsonwebtoken');

function adminMiddleware(req, res, next) {
  const token = req.headers.token;
  const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);

  if (decoded) {
    req.userId = decoded.id;
    next();
  } else {
    res.status(403).json({
      msg: "You are not signed in",
    });
  }
}

module.exports = {
  adminMiddleware,
};
