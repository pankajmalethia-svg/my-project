import express from "express";
import jwt from "jsonwebtoken";
import { authenticateToken, SECRET_KEY } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Simulated users (for demo)
const users = [
  { id: 1, username: "adminUser", password: "admin123", role: "Admin" },
  { id: 2, username: "moderatorUser", password: "mod123", role: "Moderator" },
  { id: 3, username: "regularUser", password: "user123", role: "User" }
];

// LOGIN route — issues JWT token
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    SECRET_KEY,
    { expiresIn: "2h" }
  );

  res.json({ token });
});

// 🧭 Protected Routes

router.get(
  "/admin-dashboard",
  authenticateToken,
  authorizeRoles("Admin"),
  (req, res) => {
    res.json({
      message: "Welcome to the Admin dashboard",
      user: req.user
    });
  }
);

router.get(
  "/moderator-panel",
  authenticateToken,
  authorizeRoles("Moderator"),
  (req, res) => {
    res.json({
      message: "Welcome to the Moderator panel",
      user: req.user
    });
  }
);

router.get(
  "/user-profile",
  authenticateToken,
  authorizeRoles("Admin", "Moderator", "User"),
  (req, res) => {
    res.json({
      message: `Welcome to your profile, ${req.user.username}`,
      user: req.user
    });
  }
);

export default router;
