const express = require('express');
const { getUser, addUser } = require('../controllers/users');
const { auth } = require('../middlewares/authentication');

const router = express.Router();

router.get('/', auth, getUser);
router.post('/', addUser);

module.exports = router;
