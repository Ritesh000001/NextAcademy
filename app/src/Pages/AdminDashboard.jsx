import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaChartLine, FaUsers, FaBookOpen } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import CourseManagement from "./CourseManagement";
import CourseList from "../Components/CourseList.jsx";
import UsersList from "../Components/UsersList.jsx";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [courses, setCourses] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const navigate = useNavigate();

  const COLORS = ["#FF8042", "#00C49F", "#FFBB28", "#0088FE", "#AA66CC", "#33B5E5"];

  // Logout handler
  const handleLogout = () => {
    localStorage.clear(); // clear auth/session info if stored
    navigate("/login");
  };

  // Fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/courses/all");
        const courseList = Array.isArray(res.data) ? res.data : res.data.data;
        setCourses(courseList);

        const categoryCount = {};
        courseList.forEach((course) => {
          categoryCount[course.category] = (categoryCount[course.category] || 0) + 1;
        });

        const pieFormatted = Object.keys(categoryCount).map((key) => ({
          name: key,
          value: categoryCount[key],
        }));

        setCategoryData(pieFormatted);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);

  // Fetch user count
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/dashboard/count");
        setTotalUsers(res.data.count || 0);
        console.log("Fetched total users:", res.data.count);
      } catch (error) {
        console.error("❌ Failed to fetch user count:", error);
      }
    };

    fetchUsers();
  }, []);

  // Bar chart data (simulated growth)
  const barData = Array.from({ length: 5 }, (_, i) => ({
    name: ["Jan", "Feb", "Mar", "Apr", "May"][i],
    users: Math.round((totalUsers / 5) * (0.5 + 0.1 * i)),
  }));

  const renderCharts = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="bg-white p-4 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">User Growth (Bar Chart)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#FF8042" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-4 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">Course Categories (Pie Chart)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
              dataKey="value"
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "courses":
        return (
          <div>
            <CourseManagement />
            <CourseList />
          </div>
        );
      case "users":
        return <UsersList />;
      case "analytics":
        return <div className="p-6">{renderCharts()}</div>;
      default:
        return (
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-2xl font-bold text-orange-500">{totalUsers}</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold">Active Courses</h3>
              <p className="text-2xl font-bold text-orange-500">{courses.length}</p>
            </div>
            <div className="col-span-full">{renderCharts()}</div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex max-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-orange-500 mb-6">Welcome, Admin!</h2>
          {[
            { key: "dashboard", icon: <FaChartLine />, label: "Dashboard" },
            { key: "courses", icon: <FaBookOpen />, label: "Course Management" },
            { key: "users", icon: <FaUsers />, label: "User Management" },
            { key: "analytics", icon: <MdOutlineAnalytics />, label: "Reports & Analytics" },
          ].map(({ key, icon, label }) => (
            <button
              key={key}
              className={`flex items-center gap-3 p-3 rounded-lg text-left hover:bg-orange-100 ${
                activeTab === key ? "bg-orange-200 font-semibold" : ""
              }`}
              onClick={() => setActiveTab(key)}
            >
              <span className="text-orange-500">{icon}</span> {label}
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-10 flex justify-center items-center gap-3 p-3 rounded-lg text-center bg-red-300 hover:bg-red-400 text-red-600 font-semibold"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          {{
            dashboard: "Dashboard Overview",
            courses: "Course Management",
            users: "User Management",
            analytics: "Reports & Analytics",
          }[activeTab]}
        </h1>
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;
