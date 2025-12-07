// src/pages/Dashboard.jsx
import React, { useState } from "react";
import userimage from "../Resources/img/testimonial-1.jpg";
import BrowseCourses from "./BrowseCourses";
import MyCourses from "./MyCourses";
import Books from "./Books";
import ProfilePage from "./UserProfile";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import {
  User,
  BookOpen,
  GraduationCap,
  LogOut,
  Home,
  Library,
  Settings,
  MessageSquare,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // 👈 import navigate

// Dummy data
const progressData = [
  { month: "Jan", progress: 40 },
  { month: "Feb", progress: 60 },
  { month: "Mar", progress: 80 },
  { month: "Apr", progress: 70 },
  { month: "May", progress: 90 },
];

const courseData = [
  { name: "Web Development", value: 2 },
  { name: "DSA", value: 1 },
  { name: "Machine Learning", value: 1 },
];

const COLORS = ["#00C49F", "#FF8042", "#0088FE"];

const ProfileCard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-4 mb-6">
      <img
        src={userimage}
        alt="User Avatar"
        className="w-20 h-20 rounded-full"
      />
      <div>
        <h2 className="text-xl font-bold">User</h2>
        <p className="text-gray-500 text-sm">ritesh@example.com</p>
        <p className="text-sm text-orange-500 font-semibold">Premium Member</p>
      </div>
    </div>
  );
};

const DashboardPage = () => {
  return (
    <div>
      <ProfileCard />

      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-gray-500">Courses Enrolled</h2>
          <p className="text-2xl font-bold text-orange-500">3</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-gray-500">Active Courses</h2>
          <p className="text-2xl font-bold text-orange-500">2</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-gray-500">Certificates Earned</h2>
          <p className="text-2xl font-bold text-orange-500">1</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progress Chart */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-gray-700 font-semibold mb-4">
            Learning Progress (Bar Chart)
          </h2>
          <BarChart width={350} height={250} data={progressData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="progress" fill="#FF8042" />
          </BarChart>
        </div>

        {/* Course Categories */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-gray-700 font-semibold mb-4">Course Categories</h2>
          <PieChart width={350} height={250}>
            <Pie
              data={courseData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {courseData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

// const ProfilePage = () => {
//   return (
//     <div className="bg-white shadow rounded-lg p-6">
//       <h1 className="text-2xl font-bold mb-6">My Profile</h1>
//       <div className="flex items-center space-x-6 mb-6">
//         <img
//           src="https://via.placeholder.com/100"
//           alt="User Avatar"
//           className="w-24 h-24 rounded-full"
//         />
//         <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
//           Change Photo
//         </button>
//       </div>

//       <form className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium">Full Name</label>
//           <input
//             type="text"
//             className="w-full border rounded-lg px-3 py-2"
//             defaultValue="Ritesh Singh"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Email</label>
//           <input
//             type="email"
//             className="w-full border rounded-lg px-3 py-2"
//             defaultValue="ritesh@example.com"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Phone</label>
//           <input
//             type="text"
//             className="w-full border rounded-lg px-3 py-2"
//             defaultValue="+91 9876543210"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Password</label>
//           <input
//             type="password"
//             className="w-full border rounded-lg px-3 py-2"
//             defaultValue="********"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-orange-500 text-white px-6 py-2 rounded-lg"
//         >
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// };

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate(); // 👈 hook

  const handleLogout = () => {
    localStorage.clear(); // clear everything (token, userId, etc.)
    navigate("/login"); // redirect to login page
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardPage />;
      case "profile":
        return <ProfilePage />;
      case "courses":
        return (
          <div>
            <h1 className="text-xl font-bold">My Courses Page</h1>
            <MyCourses />
          </div>
        );
      case "browse":
        return <BrowseCourses />;
      case "books":
        return (
          <div>
            <h1 className="text-xl font-bold">Books & Resources Page</h1>
            <Books />
          </div>
        );
      case "feedback":
        return <h1 className="text-xl font-bold">Feedback & Help Page</h1>;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col fixed h-screen">
        <div className="p-6 text-xl font-bold text-orange-500">
          Welcome, User!
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`w-full flex items-center space-x-2 p-3 rounded-lg ${
              activeTab === "dashboard"
                ? "bg-orange-100 text-orange-600"
                : "hover:bg-gray-100"
            }`}
          >
            <Home size={18} /> <span>Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab("browse")}
            className={`w-full flex items-center space-x-2 p-3 rounded-lg ${
              activeTab === "browse"
                ? "bg-orange-100 text-orange-600"
                : "hover:bg-gray-100"
            }`}
          >
            <Library size={18} /> <span>Browse Courses</span>
          </button>

          <button
            onClick={() => setActiveTab("courses")}
            className={`w-full flex items-center space-x-2 p-3 rounded-lg ${
              activeTab === "courses"
                ? "bg-orange-100 text-orange-600"
                : "hover:bg-gray-100"
            }`}
          >
            <BookOpen size={18} /> <span>My Courses</span>
          </button>

          <button
            onClick={() => setActiveTab("books")}
            className={`w-full flex items-center space-x-2 p-3 rounded-lg ${
              activeTab === "books"
                ? "bg-orange-100 text-orange-600"
                : "hover:bg-gray-100"
            }`}
          >
            <GraduationCap size={18} /> <span>Books / Resources</span>
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`w-full flex items-center space-x-2 p-3 rounded-lg ${
              activeTab === "profile"
                ? "bg-orange-100 text-orange-600"
                : "hover:bg-gray-100"
            }`}
          >
            <Settings size={18} /> <span>Profile</span>
          </button>

          <button
            onClick={() => setActiveTab("feedback")}
            className={`w-full flex items-center space-x-2 p-3 rounded-lg ${
              activeTab === "feedback"
                ? "bg-orange-100 text-orange-600"
                : "hover:bg-gray-100"
            }`}
          >
            <MessageSquare size={18} /> <span>Feedback / Help</span>
          </button>
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="m-4 flex items-center justify-center space-x-2 bg-red-200 text-red-600 rounded-lg py-2"
        >
          <LogOut size={18} /> <span>Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-8 overflow-y-auto">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;



