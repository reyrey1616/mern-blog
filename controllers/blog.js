const Blogs = require('../models/Blog');
const asyncHandler = require('../middlewares/asyncHandler');
const User = require('../models/User');

// @desc GET ALL BLOGS
// @route GET /api/blogs
// @access Public
exports.getBlogs = asyncHandler(async (req, res, next) => {
  try {
    const blogs = await Blogs.find();

    return res.status(200).json({
      success: true,
      count: blogs.length,
      blogs,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

// @desc CREATE BLOG
// @route POST /api/blogs
// @access Private

exports.createBlog = asyncHandler(async (req, res, next) => {
  try {
    const postedBy = await User.findById(req.user);
    const newBlog = new Blogs({
      user: postedBy,
      name: postedBy.name,
      email: postedBy.email,
      content: req.body.content,
      avatar: `https://robohash.org/${Math.ceil(Math.random() * 1000)}`,
    });

    const blog = await newBlog.save();

    return res.status(201).json({
      success: true,
      blog,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
});
