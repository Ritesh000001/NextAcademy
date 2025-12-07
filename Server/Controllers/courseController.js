// /controllers/courseController.js
import Course from "../Models/Course.js";
import { User } from "../Models/User.js";

export const createCourse = async (req, res) => {
  try {
    const {
      courseTitle,
      category,
      description,
      price,
      rating,
      thumbnail,
      duration,
      language,
      tutorName,
      videoUrl,
    } = req.body;

    // Validation: Check if all required fields are filled
    if (
      !courseTitle ||
      !category ||
      !description ||
      !price ||
      !rating ||
      !thumbnail ||
      !duration ||
      !language ||
      !tutorName ||
      !videoUrl
    ) {
      return res
        .status(400)
        .json({ error: "Please fill all required fields." });
    }

    // Create new course
    const newCourse = new Course({
      courseTitle,
      category,
      description,
      price,
      rating,
      thumbnail,
      duration,
      language,
      tutorName,
      videoUrl,
    });

    await newCourse.save();

    res
      .status(201)
      .json({ message: "Course created successfully!", course: newCourse });
  } catch (error) {
    console.error(error);

    // Unique error (example: videoUrl must be unique)
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ error: "Video URL already exists. It must be unique." });
    }

    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};


// get all courses
export const getAllCourses = async (req, res) => {
    try {
      const courses = await Course.find(); // Fetch all courses
      res.status(200).json(courses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch courses" });
    }
  }


  //Get enrolled courses by user ID
  export const getMyCourses = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).populate("enrolledCourses");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user.enrolledCourses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching enrolled courses", error });
  }
};
  

  export const deleteCourse = async (req, res) => {
  try {
    const deleted = await Course.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



export const enrollCourse = async (req, res) => {
  try {
    const { userId, courseId } = req.body;

    const user = await User.findById(userId);
    const course = await Course.findById(courseId);

    if (!user || !course) {
      return res.status(404).json({ message: "User or Course not found" });
    }

    // Prevent duplicate enrollment
    if (user.enrolledCourses.includes(courseId)) {
      return res.status(400).json({ message: "Already enrolled in this course" });
    }

    user.enrolledCourses.push(courseId);
    await user.save();

    res.json({ message: "Enrolled successfully", enrolledCourses: user.enrolledCourses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};