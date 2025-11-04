const express = require('express');
const router = express.Router();
const { login, protected } = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/login', login);             // Public route
router.get('/protected', verifyToken, protected); // Protected route

module.exports = router;
