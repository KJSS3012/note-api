const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");

dotenv.config();
const jwtToken = process.env.JWT_TOKEN;

async function auth(req, res, next) {
  const token = req.headers["x-access-token"];

  try {
    if (!token) {
      return res.status(401).json({ error: "Unauthorized: no token provided" });
    }

    try {
      const decoded = jwt.verify(token, jwtToken);
      const user = await User.findOne({ email: decoded.email });

      if (!user) {
        return res.status(401).json({ error: "Unauthorized: user not found" });
      }

      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({ error: "Unauthorized: invalid token" });
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

module.exports = auth;
