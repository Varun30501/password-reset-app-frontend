import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole }) => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    // If not logged in
    if (!token) return <Navigate to="/login" replace />;

    // If role mismatch (trying to access admin route)
    if (requiredRole && user.role !== requiredRole)
        return <Navigate to="/dashboard" replace />;

    return children;
};

export default ProtectedRoute;
