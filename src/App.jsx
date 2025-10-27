import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/protectedRoute";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import UserDashboard from "./pages/UserDashboard";


function AppContent() {
  const location = useLocation();

  // ✅ Check if current page is admin (dashboard should scroll)
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div
      className={`min-h-screen flex flex-col ${isAdminPage ? "bg-gray-50" : "bg-gray-100 overflow-hidden"
        }`}
    >
      <Navbar />

      {/* ✅ Non-admin pages are full viewport height, centered */}
      <main
        className={`flex-1 ${isAdminPage
          ? "pt-20 pb-10 px-4 flex justify-center items-start"
          : "flex justify-center items-center"
          }`}
      >
        <div className="w-full max-w-6xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute allowedRoles={["user", "admin"]}>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />


          </Routes>
        </div>
      </main>

      <ToastContainer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
