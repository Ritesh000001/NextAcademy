import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10 relative">
      <div className="container mx-6 px-6 md:px-12 flex  justify-around">
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">Login</a></li>
            <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-500">Terms & Condition</a></li>
            <li><a href="#" className="hover:text-orange-500">FAQs & Help</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="flex items-center space-x-2">
            📍 <span>Phagwara, Punjab</span>
          </p>
          <p className="flex items-center space-x-2 mt-2">
            📞 <span>+91 00000000000</span>
          </p>
          <p className="flex items-center space-x-2 mt-2">
            ✉ <a href="mailto:nextacademy@gmail.com" className="hover:text-ororange-500">nextacademy@gmail.com</a>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-orange-500 hover:text-orange-600"><FaTwitter size={20} /></a>
            <a href="#" className="text-orange-500 hover:text-orange-600"><FaFacebookF size={20} /></a>
            <a href="#" className="text-orange-500 hover:text-orange-600"><FaYoutube size={20} /></a>
            <a href="#" className="text-orange-500 hover:text-orange-600"><FaLinkedinIn size={20} /></a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="max-w-96">
          <h3 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe now and join our growing community of learners committed to lifelong education!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-lg border-none text-black focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

    
      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm">
        © Next Academy, All Right Reserved.
      </div>

      {/* Back to Top Button */}
      <button
        className="fixed bottom-4 left-4 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
