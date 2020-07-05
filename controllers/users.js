const Users = require('../models/User');
const asyncHandler = require('../middlewares/asyncHandler');
const sendTokenResponse = require('./authentication');
// @desc GET ALL USERS
// @route GET /api/users
// @access Private
exports.getUsers = asyncHandler(async (req, res, next) => {
  try {
    const users = await Users.find();
    return res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// @desc ADD  USER
// @route POST /api/users
// @access Public
exports.addUser = asyncHandler(async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    let user = await Users.findOne({ email });

    if (user) {
      return res.status(400).json({
        error: 'Email is already in used',
      });
    }

    user = new Users({
      name,
      email,
      password,
    });

    await user.save();
    sendTokenResponse(user, 200, res);
  } catch (error) {
    res.status(500).json({ error });
  }
});
