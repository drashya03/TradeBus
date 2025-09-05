const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");


// Signup
router.post("/signup", async (req, res) => {
  console.log("[SIGNUP] Incoming:", req.body);
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      console.log("[SIGNUP] Missing fields");
      return res.status(400).json({ message: "All fields required" });
    }
    const existing = await User.findOne({ email });
    if (existing) {
      console.log("[SIGNUP] Email already registered");
      return res.status(409).json({ message: "Email already registered" });
    }
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hash });
    await user.save();
    console.log("[SIGNUP] Success:", { name: user.name, email: user.email });
    res.status(201).json({ name: user.name, email: user.email });
  } catch (e) {
    console.error("[SIGNUP] Error:", e);
    res.status(500).json({ message: "Signup failed" });
  }
});

// Login
router.post("/login", async (req, res) => {
  console.log("[LOGIN] Incoming:", req.body);
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      console.log("[LOGIN] Missing fields");
      return res.status(400).json({ message: "All fields required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      console.log("[LOGIN] Invalid credentials (user not found)");
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      console.log("[LOGIN] Invalid credentials (bad password)");
      return res.status(401).json({ message: "Invalid credentials" });
    }
    console.log("[LOGIN] Success:", { name: user.name, email: user.email });
    res.json({ name: user.name, email: user.email });
  } catch (e) {
    console.error("[LOGIN] Error:", e);
    res.status(500).json({ message: "Login failed" });
  }
});

module.exports = router;
