// src/pages/MyCourses.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Star } from "lucide-react";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/courses/my/${userId}`
        );
        setCourses(res.data);
      } catch (error) {
        console.error("Error fetching enrolled courses:", error);
      }
    };
    fetchEnrolledCourses();
  }, [userId]);

  // ✅ Open video in modal
  const openModal = (videoUrl) => {
    let embedUrl = videoUrl;
    if (!videoUrl.includes("/e/")) {
      const videoId = videoUrl.split("/").pop();
      embedUrl = `https://streamable.com/e/${videoId}`;
    }
    setSelectedVideoUrl(embedUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideoUrl("");
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Courses</h2>

      {courses.length === 0 ? (
        <p>You are not enrolled in any courses yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
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
                <span className="text-blue-600 font-medium">
                  {course.category}
                </span>
              </p>
              <p className="text-gray-600">
                Language:{" "}
                <span className="text-green-600 font-medium">
                  {course.language}
                </span>
              </p>

              {/* Description */}
              <p className="text-sm mt-2 text-gray-700">
                {course.description?.substring(0, 60)}...
              </p>

              {/* Price & Rating */}
              <div className="flex items-center justify-between mt-3">
                <p className="text-orange-500 font-bold text-lg">
                  ₹{course.price}
                </p>
                <div className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm font-medium">
                  <span>{course.rating || "4.5"}</span>
                  <Star className="w-4 h-4 ml-1 fill-current text-yellow-500" />
                </div>
              </div>

              {/* ✅ Continue Learning → Opens Video Modal */}
              <button
                onClick={() => openModal(course.videoUrl)}
                className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
              >
                Continue Learning
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full relative p-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>
            <div className="w-full h-0 pb-[56.25%] relative">
              <iframe
                src={selectedVideoUrl}
                title="Course Video"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCourses;
