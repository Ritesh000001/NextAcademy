import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const userId = localStorage.getItem("userId"); // Assuming saved at login
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({});
  const [photoFile, setPhotoFile] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/api/users/${userId}`);
        setUser(res.data);
        setForm(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [userId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/api/users/${userId}`, form);
      setUser(res.data);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  const handlePhotoUpload = async () => {
    if (!photoFile) return;
    const formData = new FormData();
    formData.append("photo", photoFile);

    try {
      const res = await axios.put(`/api/users/${userId}/photo`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUser(res.data);
      alert("Profile picture updated!");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-center">Loading profile...</p>;

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-orange-600">My Profile</h1>

      <div className="flex items-center space-x-6 mb-6">
        <img
          src={user?.photo || "https://via.placeholder.com/100"}
          alt="User Avatar"
          className="w-24 h-24 rounded-full border"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhotoFile(e.target.files[0])}
          className="block"
        />
        <button
          onClick={handlePhotoUpload}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg"
        >
          Upload Photo
        </button>
      </div>

      <form onSubmit={handleSave} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName || ""}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName || ""}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email || ""}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            disabled // usually email shouldn’t be editable
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={form.phone || ""}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value="********"
            readOnly
            className="w-full border rounded-lg px-3 py-2 bg-gray-100"
          />
          <p className="text-xs text-gray-500">Password change available in security settings</p>
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded-lg"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
