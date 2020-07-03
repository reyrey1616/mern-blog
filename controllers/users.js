const mongoose = require('mongoose');
const Users = require('../models/User');
const asyncHandler = require('../middlewares/asyncHandler');

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
