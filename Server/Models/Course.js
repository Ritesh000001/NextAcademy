// models/Course.js
import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseTitle: { type: String, required: true },
  category: { type: String, required: true},
  description: { type: String, required: true },
  price: Number,
  rating: Number,
  thumbnail: String,
  duration: String,
  language: String,
  tutorName: String,
  videoUrl: { type: String, required: true, unique: true },
});

export default mongoose.model("Course", courseSchema);
