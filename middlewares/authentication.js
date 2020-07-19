const jwt = require('jsonwebtoken');
const config = require('config');
const Users = require('../models/User');

exports.auth = async function (req, res, next) {
  // Get token from the header
  let token;
  token = req.header('authorization');

  if (token && token.startsWith('Bearer')) {
    token = token.split(' ')[1];
  }

  //   Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token. Authorization Denied' });
  }

  //   Verify token
  try {
    const decoded = jwt.verify(token, config.get('JWT_SECRET'));
    req.user = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
