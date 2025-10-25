import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";
import { toast } from "react-toastify";

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState("");

    const handleReset = async (e) => {
        e.preventDefault();
        try {
            await API.post("/reset-password", { token, newPassword });
            toast.success("Password reset successfully!");
            navigate("/login");
        } catch (err) {
            toast.error(err.response?.data?.message || "Invalid or expired link");
        }
    };

    return (
        <div className="relative flex items-center justify-center h-screen overflow-hidden">
            <div className="absolute inset-0 bg-gray-100" />
            <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-2">
                    Reset Password 🔒
                </h2>
                <p className="text-gray-500 text-center mb-6">
                    Enter your new password below.
                </p>

                <form onSubmit={handleReset} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-1">New Password</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            placeholder="Enter new password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
                    >


                        Reset Password
                    </button>
                </form>

                <div className="text-center mt-6">
                    <a href="/login" className="text-blue-600 text-sm hover:underline">
                        Back to Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
