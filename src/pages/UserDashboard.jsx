import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching blog posts
    setPosts([
      {
        id: 1,
        title: "Understanding Password Security 🔒",
        description:
          "Learn how to create strong, unique passwords and why password managers are essential in 2025.",
        author: "Cyber Insights",
      },
      {
        id: 2,
        title: "Why Two-Factor Authentication Matters 🔑",
        description:
          "A quick overview of why 2FA adds an extra layer of security and how to enable it easily.",
        author: "Tech Blog",
      },
      {
        id: 3,
        title: "Top 5 Best Practices for Online Privacy 🧠",
        description:
          "Simple steps you can take today to protect your data and maintain digital privacy.",
        author: "SafeWeb Journal",
      },
    ]);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">
            Welcome, {user.username || "User"} 👋
          </h1>
        </div>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Latest Blog Posts 📰
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg p-5 border hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{post.description}</p>
              <p className="text-gray-400 text-xs italic">
                — {post.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
