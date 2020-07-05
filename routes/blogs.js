const express = require('express');
const router = express.Router();
const { getBlogs, createBlog } = require('../controllers/blog');
const { protect } = require('../middlewares/authentication');

router.get('/', getBlogs);
router.post('/', protect, createBlog);

module.exports = router;
