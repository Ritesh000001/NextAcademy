import React, { useEffect, useState } from "react";
import axios from "axios";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/courses/all");
      setCourses(res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

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

  const deleteCourse = async (courseId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/api/courses/${courseId}`);
      setCourses((prevCourses) => prevCourses.filter((c) => c._id !== courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div className="bg-white mt-10 border rounded-lg p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold">All Courses</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={course.thumbnail}
              alt={course.courseTitle}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">{course.courseTitle}</h2>
              <p className="text-gray-600 text-sm mb-4 flex-1">
                {course.description.length > 100
                  ? course.description.substring(0, 100) + "..."
                  : course.description}
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-orange-500 font-bold">₹{course.price}</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                  {course.rating} ⭐
                </span>
              </div>
              <div className="flex gap-2 mt-auto">
                <button
                  onClick={() => openModal(course.videoUrl)}
                  className="text-center py-2 px-4 rounded bg-blue-400 hover:bg-blue-500 text-white w-full"
                >
                  Watch Now
                </button>
                <button
                  onClick={() => deleteCourse(course._id)}
                  className="text-center py-2 px-4 rounded bg-red-400 hover:bg-red-500 text-white w-full"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
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
                title="Streamable Video"
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

export default CourseList;
