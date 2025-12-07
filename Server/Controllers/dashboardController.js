import { User } from "../Models/User.js";

export const getUserCount = async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.json({ count }); // ✅ simple and clean
  } catch (err) {
    res.status(500).json({ message: "Error getting user count" });
  }
};
