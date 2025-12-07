import React, { useState } from "react";
import axios from "axios";


const CourseManagement = () => {
  const [course, setCourse] = useState({
    courseTitle: "",
    category: "",
    description: "",
    price: "",
    rating: "",
    thumbnail: "",
    duration: "",
    language: "",
    tutorName: "",
    videoUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/courses/add", course);
      console.log(response.data);
      alert("Course published successfully!");
      setCourse({
        courseTitle: "",
        category: "",
        description: "",
        price: "",
        rating: "",
        thumbnail: "",
        duration: "",
        language: "",
        tutorName: "",
        videoUrl: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to publish course");
    }
  };

  return (
    <div className="flex bg-white text-black">
     
      <div className="flex-1 p-8 border rounded-lg max-h-full overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Add detail information regarding course</h1>
          <a href="/admin/lectures" className="text-blue-600 hover:underline">
            Go to lectures page
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 shadow-md rounded-lg p-8 w-full "
        >
          <div className="mb-6">
            <h2 className="text-xl font-medium mb-1">Basic Information</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Title</label>
              <input
                type="text"
                name="courseTitle"
                value={course.courseTitle}
                onChange={handleChange}
                className="w-full border border-orange-500 p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={course.description}
                onChange={handleChange}
                className="w-full border border-orange-500 p-4 rounded-md h-40 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-medium mb-1">Category</label>
                <input
                  type="text"
                  name="category"
                  value={course.category}
                  onChange={handleChange}
                  className="w-full border border-orange-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Price (INR)</label>
                <input
                  type="number"
                  name="price"
                  value={course.price}
                  onChange={handleChange}
                  className="w-full border border-orange-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Rating</label>
                <input
                  type="number"
                  name="rating"
                  value={course.rating}
                  onChange={handleChange}
                  className="w-full border border-orange-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Thumbnail URL</label>
                <input
                  type="text"
                  name="thumbnail"
                  value={course.thumbnail}
                  onChange={handleChange}
                  className="w-full border border-orange-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={course.duration}
                  onChange={handleChange}
                  className="w-full border border-orange-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Language</label>
                <input
                  type="text"
                  name="language"
                  value={course.language}
                  onChange={handleChange}
                  className="w-full border border-orange-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Tutor Name</label>
                <input
                  type="text"
                  name="tutorName"
                  value={course.tutorName}
                  onChange={handleChange}
                  className="w-full border border-orange-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Video URL</label>
                <input
                  type="text"
                  name="videoUrl"
                  value={course.videoUrl}
                  onChange={handleChange}
                  className="w-full border border-orange-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6 gap-4">
              <button
                type="submit"
                className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Publish
              </button>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseManagement;
