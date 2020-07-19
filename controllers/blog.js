const Blogs = require('../models/Blog');
const asyncHandler = require('../middlewares/asyncHandler');

// @desc GET ALL BLOGS
// @route GET /api/blogs
// @access Public
exports.getBlogs = asyncHandler(async (req, res, next) => {
  try {
    const blogs = await Blogs.find();

    return res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
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
    console.log(req.body);
    const blog = await Blogs.create(req.body);

    return res.status(201).json({
      success: true,
      blog,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
});
