import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ReactImg from "../Resources/img/react.jpg"
import NodeImg from "../Resources/img/nodejs.png";
import UiImg from "../Resources/img/uiux.jpg"
import DataScienceImg from "../Resources/img/datascience.png"

const coursesData = [
  {
    id: 1,
    title: "React Basics",
    category: "Web Development",
    level: "Beginner",
    instructor: "John Doe",
    image: ReactImg,
  },
  {
    id: 2,
    title: "Advanced Node.js",
    category: "Backend",
    level: "Advanced",
    instructor: "Jane Smith",
    image: NodeImg,
  },
  {
    id: 3,
    title: "UI/UX Design",
    category: "Design",
    level: "Intermediate",
    instructor: "Alice Brown",
    image: UiImg,
  },
  {
    id: 4,
    title: "Data Science with Python",
    category: "Data Science",
    level: "Advanced",
    instructor: "Robert White",
    image: DataScienceImg,
  },
];

const CoursesPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [instructor, setInstructor] = useState("");

  const filteredCourses = coursesData.filter(
    (course) =>
      (search === "" ||
        course.title.toLowerCase().includes(search.toLowerCase())) &&
      (category === "" || course.category === category) &&
      (level === "" || course.level === level) &&
      (instructor === "" || course.instructor === instructor)
  );

  return (
    <div className="bg-gradient-to-br from-orange-400 to-purple-500 pt-28">
        <Navbar />
      <div className="p-6 max-w-6xl mx-auto bg-gray-200 min-h-screen mb-10">
        <h2 className="text-4xl font-bold mb-8 text-center text-orange-500">
          Explore Our Courses
        </h2>

        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search courses..."
            className="border rounded-lg p-2 w-full shadow-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="border rounded-lg p-2 w-full shadow-md"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="Backend">Backend</option>
            <option value="Design">Design</option>
            <option value="Data Science">Data Science</option>
          </select>
          <select
            className="border rounded-lg p-2 w-full shadow-md"
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <select
            className="border rounded-lg p-2 w-full shadow-md"
            onChange={(e) => setInstructor(e.target.value)}
          >
            <option value="">All Instructors</option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
            <option value="Alice Brown">Alice Brown</option>
            <option value="Robert White">Robert White</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {course.title}
                </h3>
                <p className="text-gray-600">
                  Category:{" "}
                  <span className="text-blue-500">{course.category}</span>
                </p>
                <p className="text-gray-600">
                  Level: <span className="text-green-500">{course.level}</span>
                </p>
                <p className="text-gray-600">
                  Instructor:{" "}
                  <span className="text-purple-500">{course.instructor}</span>
                </p>
                <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg w-full hover:bg-orange-600 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;
