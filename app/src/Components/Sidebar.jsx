import React from 'react'


const Sidebar = () => {
  return (
    <div>
        <aside className="w-64 bg-white shadow-lg p-6 flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-orange-500 mb-6">
                  Welcome, Admin!
                </h2>
                <button
                  className={`flex items-center gap-3 p-3 rounded-lg text-left hover:bg-orange-100 ${
                    activeTab === "dashboard" ? "bg-orange-200 font-semibold" : ""
                  }`}
                  onClick={() => setActiveTab("dashboard")}
                >
                  <FaChartLine className="text-orange-500" /> Dashboard
                </button>

                <Link to="/admin/coursemanagement">
                <button
                  className={`flex items-center gap-3 p-3 rounded-lg text-left hover:bg-orange-100 ${
                    activeTab === "courses" ? "bg-orange-200 font-semibold" : ""
                  }`}
                //   onClick={() => setActiveTab("courses")}
                >
                  <FaBookOpen className="text-orange-500" /> Course Management
                </button>
                </Link>

                <button
                  className={`flex items-center gap-3 p-3 rounded-lg text-left hover:bg-orange-100 ${
                    activeTab === "users" ? "bg-orange-200 font-semibold" : ""
                  }`}
                  onClick={() => setActiveTab("users")}
                >
                  <FaUsers className="text-orange-500" /> User Management
                </button>
                <button
                  className={`flex items-center gap-3 p-3 rounded-lg text-left hover:bg-orange-100 ${
                    activeTab === "analytics" ? "bg-orange-200 font-semibold" : ""
                  }`}
                  onClick={() => setActiveTab("analytics")}
                >
                  <MdOutlineAnalytics className="text-orange-500" /> Reports & Analytics
                </button>
              </aside>
    </div>
  )
}

export default Sidebar