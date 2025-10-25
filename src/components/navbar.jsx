import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-blue-600/90 backdrop-blur-md shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-white text-xl font-semibold tracking-wide"
                >
                    Password Reset App
                </Link>

                <div className="flex items-center space-x-6">
                    {!token ? (
                        <>
                            <Link to="/login" className="text-white hover:text-gray-200">
                                Login
                            </Link>
                            <Link to="/signup" className="text-white hover:text-gray-200">
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            {user.role === "admin" && (
                                <Link to="/admin" className="text-white hover:text-gray-200">
                                    Admin
                                </Link>
                            )}
                            <button
                                onClick={handleLogout}
                                className="bg-white text-blue-600 px-3 py-1.5 rounded-lg font-medium hover:bg-gray-200 transition"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
