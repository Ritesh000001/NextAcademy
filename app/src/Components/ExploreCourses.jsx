import React from "react";
import Banner from "../Resources/img/banner-1.jpg";

const ExploreCourses = () => {
  return (
    <section className="bg-white ">
      <div className="bg-blue-50 ml-20 mr-20 h-full py-14">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-16 gap-10">
          {/* Left - Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-orange-500">
              Explore Free Courses
            </h2>
            <p className="text-gray-600 mt-4">
              Start your online learning journey at Next Academy for free with
              our short-term basic courses across various in-demand domains.
            </p>
            <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-orange-600 transition duration-300">
              Start For Free
            </button>
          </div>

          {/* Right - Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Banner}
              alt="Student Learning"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCourses;
