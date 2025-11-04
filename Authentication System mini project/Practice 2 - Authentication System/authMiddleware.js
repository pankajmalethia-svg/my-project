const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/config');

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader)
    return res.status(401).json({ message: 'Token missing' });

  const token = authHeader.split(' ')[1];

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err)
      return res.status(403).json({ message: 'Invalid or expired token' });

    req.user = decoded; // attach user info to request
    next();
  });
};
