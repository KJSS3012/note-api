const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const jwtToken = process.env.JWT_TOKEN;

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });

  try {
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error registering new user" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Incorrect email or password" });
    }

    const same = await user.verifyPassword(password);
    if (!same) {
      return res.status(401).json({ error: "Incorrect email or password" });
    }

    const token = jwt.sign({ email }, jwtToken, { expiresIn: "1d" });
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: "Internal error, please try again" });
  }
});

module.exports = router;
