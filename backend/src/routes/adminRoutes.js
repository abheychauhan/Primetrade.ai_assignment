// src/routes/adminRoutes.js
import express from "express";
import User from "../models/User.js";
import Task from "../models/Task.js";
import { protect } from "../middlewares/authMiddleware.js";
import { adminOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Get all users
router.get("/users", protect, adminOnly, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

//Get all tasks
router.get("/tasks", protect, adminOnly, async (req, res) => {
  const tasks = await Task.find().populate("user", "name email role");
  res.json(tasks);
});

// Delete a user
router.delete("/users/:id", protect, adminOnly, async (req, res) => {
    await Task.deleteMany({ user: req.params.id });
    await User.findByIdAndDelete(req.params.id);

  res.json({ message: "User deleted" });
});

export default router;
