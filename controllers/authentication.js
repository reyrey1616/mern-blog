const Users = require('../models/User');
const asyncHandler = require('../middlewares/asyncHandler');
const crypto = require('crypto');
const config = require('config');

//@desc  Login user
//@route POST /api/auth/login
//@access Public
const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: 'Please provide an email and password' });
  }

  //   Check for user
  const user = await Users.findOne({ email }).select('+password');
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  //   Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  sendTokenResponse(user, 200, res);
});

// Utility function to send token response
const sendTokenResponse = (user, statusCode, res) => {
  try {
    // Create token
    const token = user.getSignedJwtToken();
    const jwt_cookie_expire = config.get('JWT_COOKIE_EXPIRE');
    const process_env = config.get('NODE_ENV');

    const options = {
      expires: new Date(Date.now() + jwt_cookie_expire * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    if (process_env === 'production') {
      options.secure = true;
    }

    return res
      .status(statusCode)
      .cookie('token', token, options)
      .json({ success: true, token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendTokenResponse,
  login,
};
