import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../Resources/img/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 px-10 py-2">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer text-2xl font-bold text-gray-900 flex items-center"
        >
          <img src={Logo} alt="Logo" className="h-9 mr-2"/>
          <span className="text-orange-500">Next</span>Academy
        </ScrollLink>


        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/home" smooth={true} duration={500} className="cursor-pointer text-orange-500 hover:text-orange-500">
            HOME
          </Link>
          <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer hover:text-orange-500">
            ABOUT
          </ScrollLink>
          <Link to="/courses" smooth={true} duration={500} className="cursor-pointer hover:text-orange-500">
            COURSES
          </Link>
          <Link to="/contact" smooth={true} duration={500} className="cursor-pointer hover:text-orange-500">
            CONTACT
          </Link>


          <Link to="/login" className="text-gray-700 hover:text-orange-500">
            <FaUserCircle size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
