// models/UserEnrolledCourse.js
import mongoose from "mongoose";

const userEnrolledCourseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
});

export default mongoose.model("UserEnrolledCourse", userEnrolledCourseSchema);
