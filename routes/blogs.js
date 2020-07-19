const express = require('express');
const router = express.Router();
const { getBlogs, createBlog } = require('../controllers/blog');
const { auth } = require('../middlewares/authentication');

router.get('/', auth, getBlogs);
router.post('/', auth, createBlog);

module.exports = router;
