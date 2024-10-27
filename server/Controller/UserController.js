import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../Models/UserModels";

const JWT_SECRET = "your_jwt_secret_key"; // Store this in environment variables

// Register a new user
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ username, email, password });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Registration failed" });
  }
};

// Log in a user
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
};
