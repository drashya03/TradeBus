const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Create a new user
router.post("/", async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json(newUser);
});

module.exports = router;
