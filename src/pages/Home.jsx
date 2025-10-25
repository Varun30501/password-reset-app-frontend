import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-gray-100 text-center">
            <div className="absolute inset-0 bg-gray-100" />
            <div className="relative z-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Welcome to Password Reset APP
                </h1>
                <p className="text-gray-600 mb-6">
                    Manage users and secure access effortlessly.
                </p>
                <div className="flex gap-4 justify-center">
                    <Link
                        to="/login"
                        className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="border border-blue-600 text-blue-600 px-5 py-2 rounded-md hover:bg-blue-50 transition"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
