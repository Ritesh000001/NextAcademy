import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/Login"; // Import the Login Page
import SignUp from "./Pages/SignUp";
import CoursesPage from "./Pages/CoursesPage";
import Contact from "./Pages/ContactUs";
import AdminDashboard from "./Pages/AdminDashboard";
import CourseManagement from "./Pages/CourseManagement";
import UserDashboard from "./Pages/UserDashboard";
import ProtectedRoute from "./Components/ProtectedRoute"; // Import the ProtectedRoute component

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/course-management" element={<CourseManagement />} />
        <Route 
          path="/user/dashboard" 
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
  );
};

export default App;
