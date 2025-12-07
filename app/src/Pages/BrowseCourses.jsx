// src/pages/BrowseCourses.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BrowseCourses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search states
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("");

  // Dropdown options
  const [categories, setCategories] = useState([]);
  const [languages, setLanguages] = useState([]);

  
  const handleEnroll = async (courseId) => {
  try {
    const userId = localStorage.getItem("userId"); // 👈 ensure you stored userId at login/signup

    if (!userId) {
      alert("Please login first");
      return;
    }

    const res = await axios.post("http://localhost:3000/api/courses/enroll", {
      userId,
      courseId,
    });

    alert(res.data.message || "Enrolled successfully!");
  } catch (error) {
    console.error("Enrollment error:", error.response?.data || error.message);
    alert(error.response?.data?.message || "Failed to enroll");
  }
 };



  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/courses/all");
        setCourses(res.data);
        setFilteredCourses(res.data);

        // Extract unique categories & languages
        const uniqueCategories = [...new Set(res.data.map((c) => c.category))];
        const uniqueLanguages = [...new Set(res.data.map((c) => c.language))];

        setCategories(uniqueCategories);
        setLanguages(uniqueLanguages);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Filter courses when search changes
  useEffect(() => {
    let result = courses;

    if (searchName.trim()) {
      result = result.filter((c) =>
        c.courseTitle.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    if (searchCategory) {
      result = result.filter((c) => c.category === searchCategory);
    }

    if (searchLanguage) {
      result = result.filter((c) => c.language === searchLanguage);
    }

    setFilteredCourses(result);
  }, [searchName, searchCategory, searchLanguage, courses]);

  if (loading) return <p className="text-center p-5">Loading courses...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Browse Courses</h2>

      {/* Search Filters (no outer box now) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Search by Name */}
        <input
          type="text"
          placeholder="Search by course name..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border p-2 rounded-md focus:outline-none shadow-md"
        />

        {/* Filter by Category */}
        <select
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          className="border p-2 rounded-md focus:outline-none shadow-md"
        >
          <option value="">All Categories</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Filter by Language */}
        <select
          value={searchLanguage}
          onChange={(e) => setSearchLanguage(e.target.value)}
          className="border p-2 rounded-md focus:outline-none shadow-md"
        >
          <option value="">All Languages</option>
          {languages.map((lang, i) => (
            <option key={i} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      {/* Courses List */}
      {filteredCourses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course._id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              {/* Thumbnail */}
              <img
                src={course.thumbnail}
                alt={course.courseTitle}
                className="w-full h-40 object-cover rounded-md"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mt-3">
                {course.courseTitle}
              </h3>

              {/* Category & Language */}
              <p className="text-gray-600 mt-1">
                Category:{" "}
                <span className="text-blue-600 font-medium">{course.category}</span>
              </p>
              <p className="text-gray-600">
                Language:{" "}
                <span className="text-green-600 font-medium">{course.language}</span>
              </p>

              {/* Description */}
              <p className="text-sm mt-2 text-gray-700">
                {course.description.substring(0, 60)}...
              </p>

              {/* Price & Rating */}
              <div className="flex items-center justify-between mt-3">
                <p className="text-orange-500 font-bold text-lg">₹{course.price}</p>
                <div className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm font-medium">
                  <span>{course.rating || "4.5"}</span>
                  <Star className="w-4 h-4 ml-1 fill-current text-yellow-500" />
                </div>
              </div>

              {/* Button */}
              <button 
               onClick={() => handleEnroll(course._id)}
               className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseCourses;
