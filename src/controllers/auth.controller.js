const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already existis",
      });
    }
    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({
      message: "signup successful",
    });
  } catch (e) {
    res.status(500).json({ message: "server error", error: e.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    if (user.password != password) {
      return res.status(401).json({ message: "invalid password" });
    }

    // Create JWT Token
    const token = jwt.sign(
      { userId: user._id, name: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } 
    );

    res.status(200).json({
      message: "login successful",
      token, // send token to client
      user: {
        id: user._id,
        name: user.email,
      },
    });
  } catch (e) {
    res.status(500).json({ message: "server error", error: e.message });
  }
};
