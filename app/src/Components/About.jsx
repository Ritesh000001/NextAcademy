import React from "react";
import AboutImg from "../Resources/img/about.jpg";

const About = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left - Image Section */}
        <div className="w-full p-14 md:w-1/2">
          <img
            src={AboutImg}
            alt="About Next Academy"
            className="rounded-lg shadow-lg w-fit"
          />
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-sm font-bold uppercase text-gray-700 tracking-wide relative">
            About Us
            <span className="block w-16 h-1 bg-orange-500 mt-1"></span>
          </h3>
          <h2 className="text-3xl font-bold text-orange-500 mt-2">
            Welcome to Next Academy
          </h2>
          <p className="text-gray-600 mt-4">
            At Next Academy, we believe in accessible, innovative learning
            experiences that adapt to your schedule and learning style. Join us
            in embracing the future of education and unlock your potential with
            our immersive online courses.
          </p>
          <p className="text-gray-600 mt-4">
            Welcome to Next Academy, your gateway to boundless learning
            opportunities. Our mission is to empower learners worldwide,
            fostering a community-driven platform where knowledge knows no
            limits.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-gray-700">
            <div className="flex items-center space-x-2">
              <span className="text-xl">➜</span>
              <p>Expert Instructors</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">➜</span>
              <p>Live Interactive Sessions</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">➜</span>
              <p>Comprehensive Course Catalog</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">➜</span>
              <p>Community Engagement</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">➜</span>
              <p>Personalized Learning Paths</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">➜</span>
              <p>Certification and Recognition</p>
            </div>
          </div>

          {/* Read More Button */}
          <div className="mt-6">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-orange-600 transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
