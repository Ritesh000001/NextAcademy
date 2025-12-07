import React from "react";
import { Link } from "react-router-dom";
import Crousel from   '../Resources/img/carousel-1.jpg';
const Head = () => {
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center text-white"
        style={{ backgroundImage: `url(${Crousel})` }}
      >
        <div className="absolute inset-0 bg-[#191919a3] bg-opacity-80"></div>
        <div className="relative z-10 max-w-4xl ml-32 mt-14 px-6 text-left">
          <h3 className="text-orange-500 text-lg font-semibold">
            BEST E-LEARNING PLATFORM
          </h3>
          <h1 className="text-6xl font-bold leading-tight mt-2">
            Learn Job Ready Skills from <br /> Free Online Courses with
            Certificates
          </h1>
          <p className="text-xl mt-4 text-white">
            Explore a wide range of courses designed to enhance your expertise
            in technology, business, arts, and more. Start learning today!
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 text-lg font-medium text-white rounded-lg">
              Read More
            </button>
            <Link to="/login">
            <button className="bg-white text-black hover:bg-gray-300 px-6 py-3 text-lg font-medium rounded-lg">
              Join Now
            </button>
            </Link>
          
          </div>
        </div>
      </div> 
    </>
  );
};
export default Head;
