import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactImg from "../Resources/img/contact-us.jpg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      
      <div className="relative bg-cover bg-center h-[300px] bg-black bg-opacity-70 ">
        <img
          src={ContactImg}
          alt="Banner"
          className="w-full h-full object-cover opacity-30 absolute inset-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold"><u>Contact Us</u></h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info Left */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-orange-500">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Email, call, or complete the form to learn how NextAcademy can solve
            your messaging problem.
            <br />
            Our support team is available around the clock to address any
            concerns or queries you have.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500 p-3 rounded text-white">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Office</h4>
                <p>Phagwara, Punjab</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-500 p-3 rounded text-white">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Mobile</h4>
                <p>+91 0000000000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-500 p-3 rounded text-white">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>nextacademy@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Right */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-orange-500">
            Contact Us
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-orange-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-orange-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-orange-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full border border-orange-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
