import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole }) => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    // Unauthenticated
    if (!token) {
        console.warn("🔒 Protected route access denied — no token found");
        return <Navigate to="/login" replace />;
    }

    // Role mismatch
    if (requiredRole && user.role !== requiredRole) {
        console.warn("🚫 Role mismatch detected");
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};

export default ProtectedRoute;
