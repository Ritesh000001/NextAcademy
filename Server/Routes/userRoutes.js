import express from "express";
import { registerUser, loginUser } from "../Controllers/userController.js";
import { getAllUsers, deleteUser } from "../Controllers/userController.js";
import { User } from "../Models/User.js";
import multer from "multer";

const router = express.Router();

// File upload setup (memory storage → we save Base64 in DB)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ===================== AUTH ===================== //
router.post("/register", registerUser);
router.post("/login", loginUser);

// ===================== ADMIN ===================== //
router.get("/all", getAllUsers);             // GET all users
router.delete("/delete/:id", deleteUser);    // Delete user

// ===================== USER PROFILE ===================== //

// ✅ Get single user profile
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user profile" });
  }
});

// ✅ Update user details (except password)
router.put("/:id", async (req, res) => {
  try {
    const { firstName, lastName, email, phone } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, email, phone },
      { new: true }
    ).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error updating profile" });
  }
});

// ✅ Upload/change profile picture
router.put("/:id/photo", upload.single("photo"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No photo uploaded" });

    const base64Image = req.file.buffer.toString("base64");
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { photo: `data:${req.file.mimetype};base64,${base64Image}` },
      { new: true }
    ).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error uploading photo" });
  }
});

// ===================== COURSES ===================== //

// ✅ Get enrolled courses of a user
router.get("/:id/courses", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("enrolledCourses");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user.enrolledCourses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses" });
  }
});

export const userRoute = router;
