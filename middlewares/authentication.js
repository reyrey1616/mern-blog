const jwt = require('jsonwebtoken');
const asyncHandler = require('./asyncHandler');
const config = require('config');
const User = require('../models/User');

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  // If no cookie. the auth middleware will find the token in authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  // If using cookies. if the token is stored in cookies then will assign it to token and use every request
  else if (req.cookies.token) {
    token = req.cookies.token;
  }

  //   Make sure token exists
  if (!token) {
    return next(res.status(401).json({ error: 'No token' }));
  }

  try {
    const decoded = jwt.verify(token, config.get('JWT_SECRET'));

    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    console.error(err);
  }
});
