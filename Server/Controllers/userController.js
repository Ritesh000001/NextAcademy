import { User } from "../Models/User.js";
import jwt from "jsonwebtoken";

//Controller for registering user
export const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, photo } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new User({ firstName, lastName, email, password, photo });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Error registering user", error: err.message });
  }
};



// Controllers for user login

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Step 1: Check if it's the predefined admin
    if (email === "admin@nextacademy.com" && password === "admin123") {
      const token = jwt.sign(
        { role: "admin", email },
        process.env.SECRET_KEY,
        { expiresIn: "1d" }
      );

      return res.status(200).json({
        message: "Admin login successful",
        token,
        user: {
          email,
          role: "admin",
        },
      });
    }

    // Step 2: Check for normal user in DB
    const existingUser = await User.findOne({ email });
    if (!existingUser || existingUser.password !== password) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: existingUser._id, email: existingUser.email },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: existingUser._id,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        email: existingUser.email,
        photo: existingUser.photo,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};



export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Failed to get users" });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete user" });
  }
};
