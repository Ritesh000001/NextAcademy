import React, { useState } from "react";
import axios from "axios";
import { FaGoogle, FaApple } from "react-icons/fa";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import LoginImg from "../Resources/img/Login_img.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/users/login", {
        email,
        password,
      });
  
      alert(res.data.message);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user.id);
      
      // Checking if the logged-in user is admin
      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");  // route to admin dashboard
      } else {
        navigate("/user/dashboard");  // route to user dashboard
      }
  
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };
  

  return (
    <div className="h-screen w-full bg-slate-400 bg-gradient-to-br from-orange-400 to-purple-500">
      <Navbar />
      <div className="h-screen flex items-center justify-center text-white shadow-sm mt-10">
        <div className="rounded-xl shadow-lg flex h-3/4 w-3/4 bg-white">
          <div className="relative hidden md:block w-1/2 bg-[#F5F3F3] mx-2 my-2 rounded-xl">
            <img
              src={LoginImg}
              alt="Login"
              className="h-full w-full object-contain rounded-l-xl"
            />
          </div>

          <div className="w-full md:w-1/2 p-10 bg-white rounded-xl">
            <h2 className="text-2xl font-semibold text-orange-500 mt-8">Login</h2>
            <p className="text-sm text-gray-400 mt-1">
              Don't have an account?{" "}
              <a href="/signup" className="text-orange-500 hover:underline">
                create account
              </a>
            </p>

            <div className="mt-5">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-3 text-black px-4 py-2 rounded-lg border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <div className="relative mt-3">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-black px-4 py-2 rounded-lg border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <HiOutlineEyeOff size={20} /> : <HiOutlineEye size={20} />}
                </button>
              </div>

              <div className="flex items-center mt-3">
                <input type="checkbox" className="h-4 w-4 text-purple-500" />
                <p className="text-sm ml-2 text-gray-400">
                  I agree to the{" "}
                  <a href="#" className="text-orange-500 hover:underline">
                    Terms & Conditions
                  </a>
                </p>
              </div>

              <button
                className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
                onClick={handleLogin}
              >
                Login
              </button>

              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-600"></div>
                <p className="px-3 text-gray-400">Or login with</p>
                <div className="flex-grow border-t border-gray-600"></div>
              </div>

              <div className="flex justify-center gap-4">
                <button className="flex items-center gap-2 border border-orange-500 px-4 py-2 rounded-lg text-gray-400 hover:bg-orange-500 hover:text-white">
                  <FaGoogle size={18} className="text-orange-500 hover:text-white" />
                  Google
                </button>
                <button className="flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-lg hover:bg-white hover:text-gray-400 hover:border border-orange-500">
                  <FaApple size={18} className="text-white hover:text-orange-500" />
                  Apple
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
