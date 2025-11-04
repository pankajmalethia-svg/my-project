const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/config');

// Demo user (In real apps, fetch from DB)
const user = {
  id: 1,
  username: 'testuser',
  password: 'password123',
};

// Login function
exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    // Generate JWT
    const token = jwt.sign(
      { id: user.id, username: user.username },
      SECRET_KEY,
      { expiresIn: '15m' } // token valid for 15 minutes
    );

    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

// Protected route
exports.protected = (req, res) => {
  res.json({
    message: '✅ You have accessed a protected route!',
    user: req.user,
  });
};
