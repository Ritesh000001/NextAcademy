import React from "react";
import { FaStar, FaUserGraduate, FaClock } from "react-icons/fa";
import Course1 from "../Resources/img/course-1.jpg";
import Course2 from "../Resources/img/course-2.jpg";
import Course3 from "../Resources/img/course-3.jpg";
import Course4 from "../Resources/img/course-4.jpg";
import Course5 from "../Resources/img/course-5.jpg";
import Course6 from "../Resources/img/course-6.jpg";
import Course7 from "../Resources/img/course-7.jpg";
import Course8 from "../Resources/img/course-8.jpg";

const courses = [
  {
    title: "HTML Course for Beginners",
    image: Course1,
    rating: 4.55,
    learners: "5.8L+",
    level: "Beginner",
    duration: "2.0 Hrs",
    price: "₹ 0",
    badge: "FREE",
  },
  {
    title: "Front End Development - CSS",
    image: Course2,
    rating: 4.55,
    learners: "5.2L+",
    level: "Beginner",
    duration: "4.0 Hrs",
    price: "₹ 199",
    badge: "PAID",
  },
  {
    title: "Introduction to JavaScript",
    image: Course3,
    rating: 4.46,
    learners: "76K+",
    level: "Beginner",
    duration: "2.5 Hrs",
    price: "₹ 0",
    badge: "FREE",
  },
  {
    title: "Python Programming",
    image: Course4,
    rating: 3.54,
    learners: "3.3L+",
    level: "Beginner",
    duration: "3.0 Hrs",
    price: "₹ 299",
    badge: "PAID",
  },
  {
    title: "SQL Fundamentals",
    image: Course5,
    rating: 4.75,
    learners: "4.2L+",
    level: "Beginner",
    duration: "3.5 Hrs",
    price: "₹ 0",
    badge: "FREE",
  },
  {
    title: "AI & Machine Learning Basics",
    image: Course6,
    rating: 4.85,
    learners: "6.1L+",
    level: "Beginner",
    duration: "4.5 Hrs",
    price: "₹ 0",
    badge: "FREE",
  },
  {
    title: "AWS Training & Certification",
    image: Course7,
    rating: 4.6,
    learners: "2.9L+",
    level: "Beginner",
    duration: "5.0 Hrs",
    price: "₹ 0",
    badge: "FREE",
  },
  {
    title: "Microsoft Azure Cloud",
    image: Course8,
    rating: 4.4,
    learners: "2.5L+",
    level: "Beginner",
    duration: "4.0 Hrs",
    price: "₹ 399",
    badge: "PAID",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-12 bg-white">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <p className="uppercase font-semibold tracking-wide">
          ── Popular Courses ──
        </p>
        <h2 className="text-3xl font-bold text-orange-500 mt-2">
          Explore new and trending free online courses
        </h2>

        {/* Courses Grid */}
        <div className="px-14 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                {/* Course Image */}
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 object-cover"
                  />
                  <span
                    className={`absolute top-2 left-2 text-white px-3 py-1 text-xs font-bold rounded ${
                      course.badge === "FREE" ? "bg-orange-500" : "bg-green-600"
                    }`}
                  >
                    {course.badge}
                  </span>
                </div>

                {/* Course Details */}
                <div className="p-4">
                  <h3 className="text-lg flex font-semibold text-gray-800">
                    {course.title}
                  </h3>
                  <div className="flex items-center text-yellow-500 text-sm mt-1 justify-around">
                    <FaStar />
                    <span className="ml-1">{course.rating}</span>
                    <span className="text-gray-500 ml-2">
                      • {course.learners} Learners
                    </span>
                    <span className="text-gray-500 text-sm mt-1 flex items-center">
                      <FaClock className="mr-1" /> {course.duration}
                    </span>
                  </div>

                  {/* Price and Enroll Now */}
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-900 font-bold">
                      {course.price}
                    </span>
                    <a
                      href="#"
                      className="text-green-600 font-semibold hover:underline"
                    >
                      Enroll Now →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 justify-self-center pt-8">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-orange-600 transition duration-300">
              All Courses
            </button>
          </div>
    </section>
  );
};

export default Courses;
