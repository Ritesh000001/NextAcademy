import express from "express";
import { createCourse,  getAllCourses,enrollCourse, getMyCourses, deleteCourse } from "../Controllers/courseController.js";

const router = express.Router();


router.post("/add", createCourse);     // Route to add new course
router.get("/all", getAllCourses);     // to get all courses
router.post("/enroll", enrollCourse);  // to enroll in a course
router.get("/my/:userId", getMyCourses); // to get courses by user ID
router.delete("/:id", deleteCourse);   // to delete

export default router;